import React from 'react'
import {useSelector} from 'react-redux'
import {Box, Text, Button, Center, StatusBar} from 'native-base'
import {useNavigation} from '@react-navigation/native'

import {AppState} from '../../store'
import * as L from '../../store/login'

export default function Initial() {
  const navigation = useNavigation()

  const login = useSelector<AppState, L.State>((state) => state.login)
  const {loggedIn, loggedUser} = login
  const {email} = loggedUser

  if (!loggedIn) {
    return (
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
          <Text fontSize="50">안녕하세요.</Text>
        </Center>
        <Button
          h="8%"
          rounded="none"
          onPress={() => {
            navigation.navigate('LoginIndex')
          }}>
          <Text color="white" fontSize="20">
            다음
          </Text>
        </Button>
      </Box>
    )
  }

  return (
    <StatusBar>
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
          <Text fontSize="50">안녕하세요.</Text>
        </Center>
        <Button
          h="8%"
          rounded="none"
          onPress={() => {
            navigation.navigate('MainIndex')
          }}>
          <Text color="white" fontSize="20">
            다음
          </Text>
        </Button>
      </Box>
    </StatusBar>
  )
}
