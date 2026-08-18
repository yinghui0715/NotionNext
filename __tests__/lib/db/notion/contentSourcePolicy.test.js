import { preserveLastSuccessfulSnapshot } from '@/lib/db/notion/contentSourcePolicy'

describe('Content Library source failure policy', () => {
  it('rethrows official source failures so ISR keeps the previous snapshot', () => {
    const error = new Error('temporary Notion failure')

    expect(() => preserveLastSuccessfulSnapshot(error, true)).toThrow(error)
  })

  it('preserves the legacy best-effort fallback behavior', () => {
    expect(() =>
      preserveLastSuccessfulSnapshot(new Error('legacy failure'), false)
    ).not.toThrow()
  })
})
