import type * as T from './types'

export const createChatRoomAction = (
  createdChatRoomUser: T.User,
  createdChatRoomTitle: T.ChatRoomTitle
): T.CreateChatRoomAction => ({
  type: 'createChatRoom',
  createdChatRoomUser,
  createdChatRoomTitle
})
