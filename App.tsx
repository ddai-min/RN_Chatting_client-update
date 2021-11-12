import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme } from 'native-base';

import Initial from './src/initial/initial';
import LoginIndex from './src/login/loginIndex';
import Category from './src/category/category';
import MainIndex from './src/main/mainIndex';

const Stack = createNativeStackNavigator();

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
    },
  },

  font: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Initial" component={Initial}></Stack.Screen>
          <Stack.Screen name="LoginIndex" component={LoginIndex}></Stack.Screen>
          <Stack.Screen name="Category" component={Category}></Stack.Screen>
          <Stack.Screen name="MainIndex" component={MainIndex}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}