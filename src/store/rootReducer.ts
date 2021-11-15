import {combineReducers} from 'redux'
import * as L from './login'
import * as S from './signup'
import * as CCR from './createChatRoom'

export const rootReducer = combineReducers({
  login: L.reducer,
  signup: S.reducer,
  createChatRoom: CCR.reducer
})
