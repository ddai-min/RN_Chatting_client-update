import type * as T from './types'

export const setSignUpJWT = (signUpJWT: string): T.SetSignUpJWTAction => ({
  type: '@asyncStorage/signUpJWT',
  signUpJWT
})
