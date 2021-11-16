import React from 'react'
import {Menu, Pressable, HamburgerIcon} from 'native-base'

export function MenuBar() {
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
    </Menu>
  )
}
