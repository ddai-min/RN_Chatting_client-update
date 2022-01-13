import React, {Component} from 'react'
import {KeyboardAvoidingView, FlatList, StyleSheet, View} from 'react-native'

import SystemMessage from './SystemMessage'
import MessageBubble from './MessageBubble'
import ChatDetailInput from './ChatDetailInput'

import axios from 'axios'

const USER_ID = 'ktm'
const HOST = '172.30.1.26:3000'
const messages = [
  {
    body: '채팅을 시작하세요.',
    senderID: 'system',
    type: 'system'
  }
]

function sendChat(message) {
  axios({
    method: 'POST',
    url: `http://${HOST}/chat/`,
    data: message
  })
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
      throw new Error(error)
    })
}

class ChatDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages
    }
  }

  receiveChat = async () => {
    try {
      let res = await axios.get(`http://${HOST}/chat/${USER_ID}`)
      res.data.map((msg) => this.addNewMessage(msg))
    } catch (err) {
      alert(err)
    }
  }

  timerId = null
  componentDidMount() {
    this.timerId = setInterval(this.receiveChat, 2000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        style={styles.container}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={this.state.messages}
            inverted={true}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
        <ChatDetailInput onSubmit={this.submit} />
      </KeyboardAvoidingView>
    )
  }

  submit = (text) => {
    const message = {
      body: text,
      senderID: 'ktm',
      receiver: 'jsb',
      type: 'user'
    }

    this.addNewMessage(message)
    sendChat(message)
  }

  addNewMessage = (message) => {
    this.setState((prevState) => {
      const newMessages = [message, ...prevState.messages]

      return {messages: newMessages}
    })
  }

  keyExtractor = (item) => item.id

  renderItem = ({item}) => {
    if (item.type === 'system') {
      return <SystemMessage body={item.body} />
    }

    return (
      <MessageBubble
        alignToRight={item.senderID === USER_ID}
        alignToLeft={item.receiver === USER_ID}
        body={item.body}
      />
    )
  }
}

export default ChatDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  flatListContainer: {
    flex: 1,
    paddingHorizontal: 16
  }
})

// import React from 'react'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'

// import ChatList from './chatList'
// import ChatRoom from './chatRoom'

// const Stack = createNativeStackNavigator()

// export default function ChatIndex() {
//   return (
//     <Stack.Navigator
//       initialRouteName="ChatList"
//       screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Chat" component={ChatList}></Stack.Screen>
//       <Stack.Screen name="ChatDetail" component={ChatRoom}></Stack.Screen>
//     </Stack.Navigator>
//   )
// }
