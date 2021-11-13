import React from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NativeBaseProvider} from 'native-base'

import {makeStore} from './src/store'
import {makeTheme} from './theme'

import Initial from './src/screens/initial/initial'
import LoginIndex from './src/screens/login/loginIndex'
import Category from './src/screens/category/category'
import MainIndex from './src/screens/main/mainIndex'

const Stack = createNativeStackNavigator()
const theme = makeTheme()
const store = makeStore()

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Initial"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Initial" component={Initial}></Stack.Screen>
            <Stack.Screen
              name="LoginIndex"
              component={LoginIndex}></Stack.Screen>
            <Stack.Screen name="Category" component={Category}></Stack.Screen>
            <Stack.Screen name="MainIndex" component={MainIndex}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </NativeBaseProvider>
  )
}
