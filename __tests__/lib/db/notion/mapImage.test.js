import { mapImgUrl } from '@/lib/db/notion/mapImage'

describe('mapImgUrl for private Content Library images', () => {
  it('routes Notion-hosted article images through the authenticated server', () => {
    const url =
      'https://prod-files-secure.s3.us-west-2.amazonaws.com/space/image.png?signature=short-lived'

    expect(
      mapImgUrl(url, {
        id: '3bb1f47a-7611-8063-a17b-eee604940aed',
        type: 'image'
      })
    ).toBe(
      '/api/notion-image?id=3bb1f47a-7611-8063-a17b-eee604940aed&target=block'
    )
  })

  it('uses the page target for a private Notion page cover', () => {
    const url =
      'https://prod-files-secure.s3.us-west-2.amazonaws.com/space/cover.png?signature=short-lived'

    expect(
      mapImgUrl(url, {
        id: '3bb1f47a-7611-8115-b743-f3c18d23872f',
        type: 'page'
      })
    ).toBe(
      '/api/notion-image?id=3bb1f47a-7611-8115-b743-f3c18d23872f&target=page'
    )
  })

  it('does not trust a URL that only contains a Notion hostname in its path', () => {
    const url =
      'https://example.com/secure.notion-static.com/prod-files-secure/image.png'

    expect(
      mapImgUrl(url, {
        id: '3bb1f47a-7611-8063-a17b-eee604940aed',
        type: 'image'
      })
    ).toBe(`${url}?t=3bb1f47a-7611-8063-a17b-eee604940aed`)
  })
})
