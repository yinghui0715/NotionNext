import { Client } from '@notionhq/client'
import BLOG from '@/blog.config'
import { getContentLibrarySiteConfig } from './contentLibraryAdapter'
import { adjustPageProperties } from './getPageProperties'

const STATUS = 'Status'
const CHANNEL = 'Publish Channel'
const TITLE = 'Name'
export const INTERNAL_PUBLISHING_WORKSPACE = '🔒 内部发布工作区｜不对外展示'

export function shouldUseOfficialContentLibrary() {
  return BLOG.CONTENT_SOURCE !== 'legacy'
}

function client() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error('NOTION_API_KEY is required for Content Library')
  }
  return new Client({ auth: process.env.NOTION_API_KEY })
}

export async function fetchOfficialContentLibrarySiteData(databaseId) {
  const notion = client()
  const pages = []
  let cursor

  do {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      page_size: 100,
      filter: {
        and: [
          { property: STATUS, select: { equals: 'Published' } },
          { property: CHANNEL, multi_select: { contains: '网站' } }
        ]
      },
      sorts: [{ property: 'Publish Date', direction: 'descending' }]
    })
    pages.push(...response.results.map(mapOfficialPage))
    cursor = response.has_more ? response.next_cursor : undefined
  } while (cursor)

  const NOTION_CONFIG = getContentLibrarySiteConfig()
  pages.forEach(page => adjustPageProperties(page, NOTION_CONFIG))
  const categories = [
    ...new Set(pages.map(page => page.category).filter(Boolean))
  ]
  const categoryOptions = categories.map((name, index) => ({
    id: `category-${index}`,
    name,
    color: 'gray'
  }))
  const allNavPages = pages.map(toNavPage)

  return {
    NOTION_CONFIG,
    notice: null,
    siteInfo: {
      title: NOTION_CONFIG.TITLE,
      description: NOTION_CONFIG.DESCRIPTION,
      pageCover: BLOG.HOME_BANNER_IMAGE || '/bg_image.jpg',
      icon: BLOG.AVATAR || '/avatar.svg',
      link: BLOG.LINK
    },
    allPages: pages,
    allMembers: [],
    allEvents: [],
    allNavPages,
    allLinkPages: pages.map(page => ({
      id: page.id,
      title: page.title,
      type: page.type,
      slug: page.slug,
      href: page.href,
      short_id: page.id.replaceAll('-', '').slice(-6)
    })),
    collection: [],
    collectionQuery: {},
    collectionId: databaseId,
    collectionView: {},
    viewIds: [],
    block: {},
    schema: {},
    tagOptions: [],
    categoryOptions,
    rawMetadata: {},
    customNav: [],
    customMenu: [],
    postCount: pages.length,
    pageIds: pages.map(page => page.id),
    latestPosts: pages.slice(0, 6)
  }
}

export async function fetchOfficialPageRecordMap(pageId) {
  const notion = client()
  const page = await notion.pages.retrieve({ page_id: pageId })
  if (!isWebsitePage(page)) return null

  const rootId = page.id
  const block = {
    [rootId]: { value: null }
  }
  const childIds = await appendChildren(notion, rootId, block)
  block[rootId] = {
    value: {
      id: rootId,
      type: 'page',
      parent_id: parentId(page.parent),
      parent_table: 'collection',
      content: childIds,
      properties: { title: richText(page.properties?.[TITLE]) },
      format: pageFormat(page),
      created_time: Date.parse(page.created_time),
      last_edited_time: Date.parse(page.last_edited_time)
    }
  }
  return { block, signed_urls: {} }
}

/**
 * Resolve a Notion-hosted image without exposing the private Content Library.
 * The caller receives only a short-lived file URL after the owning page has
 * passed the same production publishing gate as normal article rendering.
 */
export async function resolvePublishedNotionImage(id, target = 'block') {
  const notion = client()

  if (target === 'page') {
    const page = await notion.pages.retrieve({ page_id: id })
    return isWebsitePage(page) ? notionHostedFileUrl(page.cover) : null
  }

  const block = await notion.blocks.retrieve({ block_id: id })
  if (block.type !== 'image') return null

  const page = await findOwningPage(notion, block)
  if (!page || !isWebsitePage(page)) return null

  return notionHostedFileUrl(block.image)
}

/**
 * Remove the private publishing workspace and every descendant before a
 * recordMap can reach rendering, excerpts, search indexing, or the TOC.
 */
export function removeInternalPublishingWorkspaces(recordMap) {
  const blocks = recordMap?.block
  if (!blocks) return recordMap

  const removed = new Set()
  const visit = id => {
    if (!id || removed.has(id)) return
    removed.add(id)
    const block = blocks[id]?.value || blocks[id]
    block?.content?.forEach(visit)
  }

  Object.entries(blocks).forEach(([id, entry]) => {
    const block = entry?.value || entry
    if (legacyBlockText(block) === INTERNAL_PUBLISHING_WORKSPACE) visit(id)
  })

  if (removed.size === 0) return recordMap

  Object.entries(blocks).forEach(([id, entry]) => {
    if (removed.has(id)) {
      delete blocks[id]
      return
    }
    const block = entry?.value || entry
    if (Array.isArray(block?.content)) {
      block.content = block.content.filter(childId => !removed.has(childId))
    }
  })

  return recordMap
}

function legacyBlockText(block) {
  return (block?.properties?.title || [])
    .map(part => (Array.isArray(part) ? part[0] : ''))
    .join('')
    .trim()
}

async function findOwningPage(notion, block) {
  let current = block
  let depth = 0

  while (current && depth < 64) {
    if (officialBlockText(current) === INTERNAL_PUBLISHING_WORKSPACE) {
      return null
    }

    const parent = current.parent
    if (parent?.type === 'page_id') {
      return notion.pages.retrieve({ page_id: parent.page_id })
    }
    if (parent?.type !== 'block_id') return null

    current = await notion.blocks.retrieve({ block_id: parent.block_id })
    depth++
  }

  return null
}

function officialBlockText(block) {
  const data = block?.[block?.type]
  const richText = data?.rich_text || data?.caption || []
  return richText
    .map(item => item?.plain_text || '')
    .join('')
    .trim()
}

function notionHostedFileUrl(value) {
  const url = fileUrl(value)
  if (!url) return null

  try {
    const hostname = new URL(url).hostname
    return hostname === 'secure.notion-static.com' ||
      /^prod-files-secure(?:-[a-z0-9]+)?\.s3[.-]/.test(hostname)
      ? url
      : null
  } catch {
    return null
  }
}

async function appendChildren(notion, parentId, target) {
  const children = []
  let cursor
  do {
    const response = await notion.blocks.children.list({
      block_id: parentId,
      start_cursor: cursor,
      page_size: 100
    })
    for (const source of response.results) {
      const value = toLegacyBlock(source, parentId)
      target[source.id] = { value }
      children.push(source.id)
      if (source.has_children) {
        value.content = await appendChildren(notion, source.id, target)
      }
    }
    cursor = response.has_more ? response.next_cursor : undefined
  } while (cursor)
  return children
}

function mapOfficialPage(page) {
  const props = page.properties || {}
  const title = text(propValue(props[TITLE]))
  const summary = text(propValue(props.Summary))
  const category = firstOption(props.Category)
  const date = props['Publish Date']?.date || {}
  const slug = text(propValue(props['Content ID'])) || page.id
  const cover =
    fileUrl(page.cover) ||
    firstFile(props['Cover Image']) ||
    BLOG.HOME_BANNER_IMAGE ||
    null
  const icon = fileUrl(page.icon) || page.icon?.emoji || null
  const publishChannels = optionNames(props[CHANNEL])
  const publishDate = Date.parse(date.start || page.created_time)

  return {
    id: page.id,
    short_id: page.id.replaceAll('-', '').slice(-6),
    title,
    name: title,
    summary,
    category,
    tags: [],
    tagItems: [],
    status: 'Published',
    type: 'Post',
    slug,
    href: slug.startsWith('/') ? slug : `/article/${slug}`,
    date: { start_date: date.start || page.created_time.slice(0, 10) },
    publishDay: date.start || page.created_time.slice(0, 10),
    publishDate,
    createdTime: Date.parse(page.created_time),
    lastEditedDate: Date.parse(page.last_edited_time),
    lastEditedDay: page.last_edited_time.slice(0, 10),
    pageCover: cover,
    pageCoverThumbnail: cover,
    pageIcon: icon,
    icon,
    publishChannels,
    contentType: firstOption(props['Content Type']),
    series: firstOption(props.Series),
    contentLibrary: true
  }
}

function isWebsitePage(page) {
  return (
    firstOption(page.properties?.[STATUS]) === 'Published' &&
    optionNames(page.properties?.[CHANNEL]).includes('网站')
  )
}

function toNavPage(page) {
  return {
    id: page.id,
    title: page.title,
    pageCoverThumbnail: page.pageCoverThumbnail,
    category: page.category,
    tags: page.tags,
    summary: page.summary,
    slug: page.slug,
    href: page.href,
    pageIcon: page.pageIcon,
    lastEditedDate: page.lastEditedDate,
    publishDate: page.publishDate,
    ext: {}
  }
}

function toLegacyBlock(block, parentId) {
  const data = block[block.type] || {}
  const typeMap = {
    paragraph: 'text',
    heading_1: 'header',
    heading_2: 'sub_header',
    heading_3: 'sub_sub_header',
    bulleted_list_item: 'bulleted_list',
    numbered_list_item: 'numbered_list',
    to_do: 'to_do',
    toggle: 'toggle',
    quote: 'quote',
    callout: 'callout',
    divider: 'divider',
    code: 'code',
    image: 'image',
    video: 'video',
    audio: 'audio',
    file: 'file',
    pdf: 'pdf',
    bookmark: 'bookmark',
    embed: 'embed',
    equation: 'equation',
    child_page: 'page',
    table: 'table',
    table_row: 'table_row'
  }
  const type = typeMap[block.type] || 'text'
  const value = {
    id: block.id,
    type,
    parent_id: parentId,
    parent_table: 'block',
    created_time: Date.parse(block.created_time),
    last_edited_time: Date.parse(block.last_edited_time),
    properties: {}
  }
  const content = data.rich_text || data.caption || []
  if (content.length) value.properties.title = richText(content)
  const source = fileUrl(data)
  if (source) value.properties.source = [[source]]
  if (data.url) value.properties.source = [[data.url]]
  if (block.type === 'code')
    value.properties.language = [[data.language || 'plain text']]
  if (block.type === 'to_do')
    value.properties.checked = [[data.checked ? 'Yes' : 'No']]
  if (block.type === 'equation')
    value.properties.title = [[data.expression || '']]
  if (block.type === 'child_page') value.properties.title = [[data.title || '']]
  if (block.type === 'table') {
    value.format = {
      table_block_column_order: Array.from(
        { length: data.table_width || 1 },
        (_, i) => `column-${i}`
      )
    }
  }
  if (block.type === 'table_row') {
    value.properties = Object.fromEntries(
      (data.cells || []).map((cell, i) => [`column-${i}`, richText(cell)])
    )
  }
  return value
}

function richText(value) {
  const items = Array.isArray(value) ? value : propValue(value)
  return (items || []).map(item => {
    if (typeof item === 'string') return [item]
    const marks = []
    if (item.annotations?.bold) marks.push(['b'])
    if (item.annotations?.italic) marks.push(['i'])
    if (item.annotations?.underline) marks.push(['_'])
    if (item.annotations?.strikethrough) marks.push(['s'])
    if (item.annotations?.code) marks.push(['c'])
    if (item.href) marks.push(['a', item.href])
    const plain =
      item.plain_text || item.text?.content || item.mention?.page?.id || ''
    return marks.length ? [plain, marks] : [plain]
  })
}

function propValue(prop) {
  if (!prop) return []
  return prop.title || prop.rich_text || []
}

function text(items) {
  return (items || [])
    .map(item => item.plain_text || item.text?.content || '')
    .join('')
}

function firstOption(prop) {
  return prop?.status?.name || prop?.select?.name || optionNames(prop)[0] || ''
}

function optionNames(prop) {
  return (prop?.multi_select || []).map(option => option.name)
}

function firstFile(prop) {
  return fileUrl(prop?.files?.[0])
}

function fileUrl(value) {
  return value?.file?.url || value?.external?.url || null
}

function pageFormat(page) {
  const cover = fileUrl(page.cover)
  const icon = fileUrl(page.icon) || page.icon?.emoji
  return {
    ...(cover ? { page_cover: cover } : {}),
    ...(icon ? { page_icon: icon } : {})
  }
}

function parentId(parent) {
  return parent?.database_id || parent?.page_id || parent?.block_id || null
}
