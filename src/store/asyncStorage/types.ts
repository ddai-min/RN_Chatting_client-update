import type {Action} from 'redux'

export type State = {
  signUpJWT: string
}
export type SetSignUpJWTAction = Action<'@asyncStorage/signUpJWT'> & {
  signUpJWT: string
}
export type Actions = SetSignUpJWTAction
