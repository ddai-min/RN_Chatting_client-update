import * as T from './types'

const initialState: T.State = {
  signUpJWT: ''
}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@asyncStorage/signUpJWT':
      return {...state, signUpJWT: action.signUpJWT}
  }
  return state
}
