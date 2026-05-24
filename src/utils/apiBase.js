export function getApiBaseUrl() {
  const explicitBaseUrl = process.env.VUE_APP_API_URL

  if (explicitBaseUrl) {
    return explicitBaseUrl.replace(/\/$/, '')
  }

  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return ''
}