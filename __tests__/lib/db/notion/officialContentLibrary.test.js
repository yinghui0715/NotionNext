import {
  INTERNAL_PUBLISHING_WORKSPACE,
  removeInternalPublishingWorkspaces
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
