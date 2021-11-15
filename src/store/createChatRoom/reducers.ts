import {combineReducers} from 'redux'
import * as T from './types'

const initialCreatedChatRoom = false
const createdChatRoomReducer = (
  state = initialCreatedChatRoom,
  action: T.Actions
) => {
  switch (action.type) {
    default:
      return false
    case 'createChatRoom':
      return true
  }
  return state
}
const initialCreatedChatRoomUser: T.User = {name: ''}
const createdChatRoomUserReducer = (
  state = initialCreatedChatRoomUser,
  action: T.Actions
) => {
  switch (action.type) {
    default:
      return initialCreatedChatRoomUser
    case 'createChatRoom':
      return {...state, ...action.createdChatRoomUser}
  }
  return state
}
const initialCreatedChatRoomTitle: T.ChatRoomTitle = {title: ''}
const createdChatRoomTitleReducer = (
  state = initialCreatedChatRoomTitle,
  action: T.Actions
) => {
  switch (action.type) {
    default:
      return initialCreatedChatRoomTitle
    case 'createChatRoom':
      return {...state, ...action.createdChatRoomTitle}
  }
  return state
}
export const reducer = combineReducers({
  createdChatRoom: createdChatRoomReducer,
  createdChatRoomUser: createdChatRoomUserReducer,
  createdChatRoomTitle: createdChatRoomTitleReducer
})
