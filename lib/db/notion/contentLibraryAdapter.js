const CONTENT_LIBRARY_FIELDS = {
  title: 'Name',
  status: 'Status',
  summary: 'Summary',
  category: 'Category',
  date: 'Publish Date',
  channels: 'Publish Channel',
  contentId: 'Content ID',
  series: 'Series',
  contentType: 'Content Type'
}

export function isContentLibrarySchema(schema = {}) {
  const names = new Set(Object.values(schema).map(item => item?.name))
  return (
    names.has(CONTENT_LIBRARY_FIELDS.title) &&
    names.has(CONTENT_LIBRARY_FIELDS.status) &&
    names.has(CONTENT_LIBRARY_FIELDS.channels)
  )
}

export function adaptContentLibraryProperties(properties = {}) {
  if (!properties[CONTENT_LIBRARY_FIELDS.title]) return properties

  properties.title = properties[CONTENT_LIBRARY_FIELDS.title]
  properties.status = first(properties[CONTENT_LIBRARY_FIELDS.status])
  properties.summary = properties[CONTENT_LIBRARY_FIELDS.summary] || ''
  properties.category = first(properties[CONTENT_LIBRARY_FIELDS.category])
  properties.date = properties[CONTENT_LIBRARY_FIELDS.date]
  properties.tags = []
  properties.slug =
    properties[CONTENT_LIBRARY_FIELDS.contentId] || properties.id
  properties.type = 'Post'
  properties.publishChannels = list(properties[CONTENT_LIBRARY_FIELDS.channels])
  properties.series = first(properties[CONTENT_LIBRARY_FIELDS.series])
  properties.contentType = first(properties[CONTENT_LIBRARY_FIELDS.contentType])
  properties.contentLibrary = true

  return properties
}

export function isWebsiteEligibleContent(properties = {}) {
  if (!properties.contentLibrary) return true
  return (
    properties.status === 'Published' &&
    properties.publishChannels?.includes('网站')
  )
}

export function getContentLibrarySiteConfig() {
  return {
    TITLE: 'Leo 数字工坊',
    DESCRIPTION: '用 AI、自动化与数字工具，建立可持续的个人数字系统',
    THEME: 'nobelium',
    LANG: 'zh-CN'
  }
}

function first(value) {
  return Array.isArray(value) ? value[0] || '' : value || ''
}

function list(value) {
  if (Array.isArray(value)) return value
  return value ? [value] : []
}
