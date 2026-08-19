jest.mock('@notionhq/client', () => ({
  Client: jest.fn()
}))

jest.mock('@/lib/db/notion/getPageProperties', () => ({
  adjustPageProperties: jest.fn()
}))

import { Client } from '@notionhq/client'
import {
  INTERNAL_PUBLISHING_WORKSPACE,
  removeInternalPublishingWorkspaces,
  resolvePublishedNotionImage
} from '@/lib/db/notion/officialContentLibrary'

describe('removeInternalPublishingWorkspaces', () => {
  it('removes the marker block, all descendants, and the parent reference', () => {
    const recordMap = {
      block: {
        page: {
          value: {
            id: 'page',
            type: 'page',
            content: ['public', 'private']
          }
        },
        public: {
          value: {
            id: 'public',
            type: 'text',
            properties: { title: [['公开正文']] }
          }
        },
        private: {
          value: {
            id: 'private',
            type: 'toggle',
            content: ['package'],
            properties: { title: [[INTERNAL_PUBLISHING_WORKSPACE]] }
          }
        },
        package: {
          value: {
            id: 'package',
            type: 'sub_header',
            content: ['package-copy'],
            properties: { title: [['公众号发布包']] }
          }
        },
        'package-copy': {
          value: {
            id: 'package-copy',
            type: 'text',
            properties: { title: [['内部文案']] }
          }
        }
      }
    }

    removeInternalPublishingWorkspaces(recordMap)

    expect(recordMap.block.page.value.content).toEqual(['public'])
    expect(recordMap.block.public).toBeDefined()
    expect(recordMap.block.private).toBeUndefined()
    expect(recordMap.block.package).toBeUndefined()
    expect(recordMap.block['package-copy']).toBeUndefined()
  })
})

describe('resolvePublishedNotionImage', () => {
  const imageUrl =
    'https://prod-files-secure.s3.us-west-2.amazonaws.com/space/image.png?signature=short-lived'
  const previousNotionApiKey = process.env.NOTION_API_KEY

  beforeEach(() => {
    process.env.NOTION_API_KEY = 'test-notion-key'
    Client.mockReset()
  })

  afterAll(() => {
    if (previousNotionApiKey === undefined) {
      delete process.env.NOTION_API_KEY
    } else {
      process.env.NOTION_API_KEY = previousNotionApiKey
    }
  })

  it('returns a signed image only when its page passes the website gate', async () => {
    const retrieveBlock = jest.fn().mockResolvedValue({
      id: 'image-block',
      type: 'image',
      parent: { type: 'page_id', page_id: 'published-page' },
      image: { type: 'file', file: { url: imageUrl }, caption: [] }
    })
    const retrievePage = jest.fn().mockResolvedValue(publishedPage())
    Client.mockImplementation(() => ({
      blocks: { retrieve: retrieveBlock },
      pages: { retrieve: retrievePage }
    }))

    await expect(resolvePublishedNotionImage('image-block')).resolves.toBe(
      imageUrl
    )
  })

  it('rejects images below the internal publishing workspace marker', async () => {
    const retrieveBlock = jest
      .fn()
      .mockResolvedValueOnce({
        id: 'image-block',
        type: 'image',
        parent: { type: 'block_id', block_id: 'internal-workspace' },
        image: { type: 'file', file: { url: imageUrl }, caption: [] }
      })
      .mockResolvedValueOnce({
        id: 'internal-workspace',
        type: 'toggle',
        parent: { type: 'page_id', page_id: 'published-page' },
        toggle: {
          rich_text: [{ plain_text: INTERNAL_PUBLISHING_WORKSPACE }]
        }
      })
    const retrievePage = jest.fn()
    Client.mockImplementation(() => ({
      blocks: { retrieve: retrieveBlock },
      pages: { retrieve: retrievePage }
    }))

    await expect(resolvePublishedNotionImage('image-block')).resolves.toBeNull()
    expect(retrievePage).not.toHaveBeenCalled()
  })

  it('rejects images when the owning page is no longer published', async () => {
    Client.mockImplementation(() => ({
      blocks: {
        retrieve: jest.fn().mockResolvedValue({
          id: 'image-block',
          type: 'image',
          parent: { type: 'page_id', page_id: 'draft-page' },
          image: { type: 'file', file: { url: imageUrl }, caption: [] }
        })
      },
      pages: {
        retrieve: jest.fn().mockResolvedValue(publishedPage('Draft'))
      }
    }))

    await expect(resolvePublishedNotionImage('image-block')).resolves.toBeNull()
  })

  function publishedPage(status = 'Published') {
    return {
      id: 'published-page',
      properties: {
        Status: { select: { name: status } },
        'Publish Channel': { multi_select: [{ name: '网站' }] }
      }
    }
  }
})
