import {AppState} from './AppState'
import type {LoginActions} from './actions'

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {email: '', name: '', password: ''}
}

export const rootReducer = (
  state: AppState = initialState,
  action: LoginActions
) => {
  return state
}
