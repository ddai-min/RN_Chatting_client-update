import React, {useEffect} from 'react'
import {ScrollView, Box} from 'native-base'
import {useDispatch} from 'react-redux'
import * as CCR from '../../../store/createChatRoom'
import * as U from '../../../utils'
import {useNavigation} from '@react-navigation/native'
import {AppState} from '../../../store'
import * as A from '../../../store/asyncStorage'

export default function Chat() {
  return (
    <ScrollView bg="white">
      <Box paddingLeft="3"></Box>
    </ScrollView>
  )
}
