import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './login'
import Signup from './signup'

const Stack = createNativeStackNavigator()

export default function LoginIndex() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
    </Stack.Navigator>
  )
}
