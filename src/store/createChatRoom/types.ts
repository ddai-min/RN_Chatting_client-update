import type {Action} from 'redux'

export type User = {
  name: string
}

export type ChatRoomInformation = {
  number: number
  title: string
}

export type State = {
  createdChatRoom: boolean
  createdChatRoomUser: User
  createdChatRoomInformation: ChatRoomInformation
}

export type DeleteChatRoomAction = Action<'deleteChatRoom'>
export type CreateChatRoomAction = Action<'createChatRoom'> & {
  createdChatRoomUser: User
  createdChatRoomInformation: ChatRoomInformation
}
export type Actions = DeleteChatRoomAction | CreateChatRoomAction
