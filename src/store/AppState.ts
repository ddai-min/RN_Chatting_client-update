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
import * as L from './login'
export type AppState = {
  login: L.State
}
