import * as L from '.'

export type User = {
  name: string
  email: string
  password: string
}

export type AppState = {
  loggedIn: boolean
  loggedUser: User
}
