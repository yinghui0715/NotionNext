/**
 * @jest-environment node
 */

import {
  adaptContentLibraryProperties,
  isContentLibrarySchema,
  isWebsiteEligibleContent
} from '@/lib/db/notion/contentLibraryAdapter'

describe('contentLibraryAdapter', () => {
  const originalVercelEnv = process.env.VERCEL_ENV

  afterEach(() => {
    process.env.VERCEL_ENV = originalVercelEnv
  })

  it('detects the Content Library schema', () => {
    expect(
      isContentLibrarySchema({
        a: { name: 'Name' },
        b: { name: 'Status' },
        c: { name: 'Publish Channel' }
      })
    ).toBe(true)
  })

  it('maps governance fields to the NotionNext post model', () => {
    const properties = adaptContentLibraryProperties({
      id: 'page-id',
      Name: 'A published note',
      Status: ['Published'],
      Summary: 'Summary',
      Category: ['数字生活'],
      'Publish Date': { start_date: '2026-08-08' },
      'Publish Channel': ['公众号', '网站'],
      'Content Type': ['趋势分析 Insight']
    })

    expect(properties).toMatchObject({
      title: 'A published note',
      status: 'Published',
      type: 'Post',
      slug: 'page-id',
      category: '数字生活',
      publishChannels: ['公众号', '网站'],
      contentLibrary: true
    })
  })

  it('requires the website channel in production', () => {
    process.env.VERCEL_ENV = 'production'
    expect(
      isWebsiteEligibleContent({
        contentLibrary: true,
        status: 'Published',
        publishChannels: ['公众号']
      })
    ).toBe(false)
    expect(
      isWebsiteEligibleContent({
        contentLibrary: true,
        status: 'Published',
        publishChannels: ['公众号', '网站']
      })
    ).toBe(true)
  })

  it('keeps the website channel gate in protected Vercel previews', () => {
    process.env.VERCEL_ENV = 'preview'
    expect(
      isWebsiteEligibleContent({
        contentLibrary: true,
        status: 'Published',
        publishChannels: ['公众号']
      })
    ).toBe(false)
  })
})
