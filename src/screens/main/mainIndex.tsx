import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import {MenuBar} from './utils/menuBar'

import List from './list/list'
import ChatIndex from './chat/chatIndex'
import Recommend from './recommend/recommend'

const Tab = createBottomTabNavigator()

export default function MainIndex() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: MenuBar,
        tabBarIcon: ({focused, color, size}) => {
          let iconName

          if (route.name === '친구 목록') {
            iconName = focused ? 'people' : 'people-outline'
          } else if (route.name === '채팅 목록') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
          } else if (route.name === '친구 추천 목록') {
            iconName = focused ? 'person-add' : 'person-add-outline'
          }

          return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray'
      })}>
      <Tab.Screen name="친구 목록" component={List}></Tab.Screen>
      <Tab.Screen name="채팅 목록" component={ChatIndex}></Tab.Screen>
      <Tab.Screen name="친구 추천 목록" component={Recommend}></Tab.Screen>
    </Tab.Navigator>
  )
}
