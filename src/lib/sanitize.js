/**
 * Sanitizes a URL to prevent javascript: and other dangerous URI schemes.
 * Only allows https:, http:, and mailto: schemes.
 */
export function sanitizeUrl(url) {
  if (!url || typeof url !== 'string') return '#'
  const trimmed = url.trim()
  if (
    trimmed.startsWith('https://') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('mailto:')
  ) {
    return trimmed
  }
  return '#'
}
