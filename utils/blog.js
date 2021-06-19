export const truncateText = (string, wordLimit = 20) => {
  if (!string) return ''

  let content = string.trim()
  content = content.split(' ').slice(0, wordLimit)
  content = content.join(' ')

  if (content.length != string.length) {
    content += '...'
  }

  return content
}
