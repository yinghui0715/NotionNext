/**
 * Official Content Library failures must abort ISR regeneration so Next.js
 * keeps serving the last successful page instead of caching an empty site.
 * Legacy sources retain their existing best-effort fallback behavior.
 */
export function preserveLastSuccessfulSnapshot(error, isOfficialSource) {
  if (isOfficialSource) {
    throw error
  }
}
