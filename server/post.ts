export const post = <T extends object>(url: string, data: T) =>
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })

export const postWithJWT = <T extends object>(
  url: string,
  data: T,
  jwt: string
) =>
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify(data)
  })
