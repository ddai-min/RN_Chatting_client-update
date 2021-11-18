import React from 'react'
import {Alert} from 'react-native'
import {Menu, Pressable, HamburgerIcon, Divider} from 'native-base'
import {useDispatch} from 'react-redux'
import * as L from '../../../store/login'
import {useNavigation} from '@react-navigation/native'

export function MenuBar() {
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(L.logoutAction())
    navigation.navigate('LoginIndex')
  }

  return (
    <Menu
      w="190"
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon />
          </Pressable>
        )
      }}>
      <Menu.Item>방 만들기</Menu.Item>
      <Divider my="3" w="100%" />
      <Menu.Item onPress={logout}>로그아웃</Menu.Item>
    </Menu>
  )
}
