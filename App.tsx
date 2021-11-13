import React from 'react'
import {Provider as ReduxProvider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NativeBaseProvider, extendTheme} from 'native-base'
import {makeStore} from './redux'
import {makeTheme} from './theme'

import Initial from './src/initial/initial'
import LoginIndex from './src/login/loginIndex'
import Category from './src/category/category'
import MainIndex from './src/main/mainIndex'

const Stack = createNativeStackNavigator()

const store = makeStore()

const theme = makeTheme()

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
