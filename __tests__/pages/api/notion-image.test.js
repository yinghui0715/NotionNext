jest.mock('@/lib/db/notion/officialContentLibrary', () => ({
  resolvePublishedNotionImage: jest.fn()
}))

import { resolvePublishedNotionImage } from '@/lib/db/notion/officialContentLibrary'
import handler from '@/pages/api/notion-image'

describe('/api/notion-image', () => {
  const blockId = '3bb1f47a-7611-8063-a17b-eee604940aed'
  const originalFetch = global.fetch

  afterEach(() => {
    jest.clearAllMocks()
    global.fetch = originalFetch
  })

  it('returns bytes for an allowed published image', async () => {
    resolvePublishedNotionImage.mockResolvedValue(
      'https://example.com/image.png'
    )
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      headers: {
        get: key =>
          ({
            'content-type': 'image/png',
            'content-length': '3'
          })[key] || null
      },
      arrayBuffer: async () => Uint8Array.from([1, 2, 3]).buffer
    })
    const res = responseMock()

    await handler(
      { method: 'GET', query: { id: blockId, target: 'block' } },
      res
    )

    expect(res.statusCode).toBe(200)
    expect(res.headers['Content-Type']).toBe('image/png')
    expect(res.body).toEqual(Buffer.from([1, 2, 3]))
  })

  it('rejects invalid ids before calling Notion', async () => {
    const res = responseMock()
    await handler({ method: 'GET', query: { id: 'not-an-id' } }, res)

    expect(res.statusCode).toBe(400)
    expect(resolvePublishedNotionImage).not.toHaveBeenCalled()
  })

  it('returns 404 when the production publishing gate fails', async () => {
    resolvePublishedNotionImage.mockResolvedValue(null)
    const res = responseMock()

    await handler(
      { method: 'GET', query: { id: blockId, target: 'block' } },
      res
    )

    expect(res.statusCode).toBe(404)
    expect(global.fetch).toBe(originalFetch)
  })

  function responseMock() {
    return {
      statusCode: 200,
      headers: {},
      body: undefined,
      setHeader(name, value) {
        this.headers[name] = value
      },
      status(code) {
        this.statusCode = code
        return this
      },
      end(body) {
        this.body = body
        return this
      },
      send(body) {
        this.body = body
        return this
      }
    }
  }
})
