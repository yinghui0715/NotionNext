import { resolvePublishedNotionImage } from '@/lib/db/notion/officialContentLibrary'

const MAX_IMAGE_BYTES = 15 * 1024 * 1024

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD')
    return res.status(405).end('Method not allowed')
  }

  const id = singleQueryValue(req.query?.id)
  const target = singleQueryValue(req.query?.target) || 'block'
  if (!isNotionId(id) || !['block', 'page'].includes(target)) {
    return res.status(400).end('Invalid image request')
  }

  try {
    const source = await resolvePublishedNotionImage(id, target)
    if (!source) return res.status(404).end('Image not found')

    const upstream = await fetch(source)
    const contentType = upstream.headers.get('content-type') || ''
    const contentLength = Number(upstream.headers.get('content-length'))
    if (
      !upstream.ok ||
      !contentType.toLowerCase().startsWith('image/') ||
      (Number.isFinite(contentLength) && contentLength > MAX_IMAGE_BYTES)
    ) {
      return res.status(502).end('Image unavailable')
    }

    const bytes = Buffer.from(await upstream.arrayBuffer())
    if (bytes.length > MAX_IMAGE_BYTES) {
      return res.status(413).end('Image too large')
    }

    res.setHeader('Content-Type', contentType)
    res.setHeader('Content-Length', String(bytes.length))
    res.setHeader('Content-Disposition', 'inline')
    res.setHeader(
      'Cache-Control',
      'public, max-age=60, s-maxage=60, must-revalidate'
    )
    res.setHeader('X-Content-Type-Options', 'nosniff')
    return req.method === 'HEAD'
      ? res.status(200).end()
      : res.status(200).send(bytes)
  } catch (error) {
    console.warn(
      '[Notion image proxy] request failed:',
      error?.code || error?.name || 'unknown'
    )
    return res.status(404).end('Image not found')
  }
}

function singleQueryValue(value) {
  return Array.isArray(value) ? null : value
}

function isNotionId(value) {
  return (
    typeof value === 'string' &&
    /^[0-9a-f]{32}$/i.test(value.replaceAll('-', ''))
  )
}
