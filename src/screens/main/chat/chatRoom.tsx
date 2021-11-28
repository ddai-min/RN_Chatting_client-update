import React, {useState} from 'react'
import {Box, Container, Input, Toast} from 'native-base'
import {GiftedChat, Send} from 'react-native-gifted-chat'
import {MaterialIcons} from '@expo/vector-icons'

const SendButton = (props: any) => {
  return (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4
      }}>
      <MaterialIcons name="send" size={24} />
    </Send>
  )
}

export default function ChatRoom() {
  const [messages, setMessages] = useState([])

  return (
    <Box flex={1}>
      <GiftedChat
        placeholder="메시지를 입력해주세요."
        messages={messages}
        renderSend={(props) => <SendButton {...props} />}
      />
    </Box>
  )
}
