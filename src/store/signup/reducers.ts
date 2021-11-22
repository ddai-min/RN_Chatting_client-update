import {combineReducers} from 'redux'
import * as T from './types'

const initialSignedUp = false
const signedUpReducer = (state = initialSignedUp, action: T.Actions) => {
  switch (action.type) {
    default:
      return false
    case 'signup':
      return true
  }
  return state
}
const initialSignedUser: T.User = {
  email: '',
  name: '',
  password: '',
  category: {one: false, two: false, three: false}
}
const signedUserReducer = (state = initialSignedUser, action: T.Actions) => {
  switch (action.type) {
    default:
      return initialSignedUser
    case 'signup':
      return {...state, ...action.signedUser}
  }
  return state
}
export const reducer = combineReducers({
  signedUp: signedUpReducer,
  signedUser: signedUserReducer
})
