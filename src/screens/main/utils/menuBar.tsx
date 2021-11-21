import React from 'react'
import {Menu, Pressable, HamburgerIcon, Divider, Toast} from 'native-base'
import {useDispatch, useSelector} from 'react-redux'
import * as L from '../../../store/login'
import {useNavigation} from '@react-navigation/native'

export function MenuBar() {
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const logout = () => {
    Toast.show({description: '로그아웃 되었습니다.'})
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
