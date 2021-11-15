import type {Action} from 'redux'

export type User = {
  name: string
}

export type ChatRoomTitle = {
  title: string
}

export type State = {
  createdChatRoom: boolean
  createdChatRoomUser: User
  createdChatRoomTitle: ChatRoomTitle
}

export type DeleteChatRoomAction = Action<'deleteChatRoom'>
export type CreateChatRoomAction = Action<'createChatRoom'> & {
  createdChatRoomUser: User
  createdChatRoomTitle: ChatRoomTitle
}
export type Actions = DeleteChatRoomAction | CreateChatRoomAction
