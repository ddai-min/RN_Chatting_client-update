import type {Action} from 'redux'

export type User = {
  name: string
  email: string
  password: string
}

export type State = {
  signedUp: boolean
  signedUser: User
}

export type SignupAction = Action<'signup'> & {
  signedUser: User
}
export type Actions = SignupAction
