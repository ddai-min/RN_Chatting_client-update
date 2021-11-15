import type * as T from './types'

export const signupAction = (signedUser: T.User): T.SignupAction => ({
  type: 'signup',
  signedUser
})
