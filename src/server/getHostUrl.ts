export const getHostUrl = (path: string) => {
  const protocol = 'http'
  const ip = '192.168.0.2'
  const port = 4000
  return `${protocol}://${ip}:${port}${path}`
}
