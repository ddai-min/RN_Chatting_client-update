export const getHostUrl = (path: string) => {
  const protocol = 'http'
  const ip = '172.30.1.26'
  const port = 4000
  return `${protocol}://${ip}:${port}${path}`
}
