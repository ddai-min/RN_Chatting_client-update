import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ChatList from './chatList'
import ChatRoom from './chatRoom'

const Stack = createNativeStackNavigator()

export default function ChatIndex() {
  return (
    <Stack.Navigator
      initialRouteName="ChatList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={ChatList}></Stack.Screen>
      <Stack.Screen name="ChatDetail" component={ChatRoom}></Stack.Screen>
    </Stack.Navigator>
  )
}
