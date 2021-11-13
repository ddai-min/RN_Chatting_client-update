export type User = {
  id: string
  password: string
}

export type AppState = {
  loggedIn: boolean
  loggedUser: User
}
