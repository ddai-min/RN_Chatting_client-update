import React from 'react'
import {
  Box,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Text,
  Spacer,
  Button
} from 'native-base'
import {useDispatch} from 'react-redux'
import * as CCR from '../../../store/createChatRoom'
import * as U from '../../../utils'
import {useNavigation} from '@react-navigation/native'
import {AppState} from '../../../store'
import * as A from '../../../store/asyncStorage'

export default function ChatList() {
  const navigation = useNavigation()

  const RenderChatRoom = () => {
    const data = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        fullName: 'Aafreen Khan',
        timeStamp: '12:47 PM',
        recentText: 'Good Day!',
        avatarUrl:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Sujitha Mathur',
        timeStamp: '11:11 PM',
        recentText: 'Cheer up, there!',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d12',
        fullName: 'Anci Barroco',
        timeStamp: '6:22 PM',
        recentText: 'Good Day!',
        avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d23',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '28694a0f-3da1-471f-bd96-142456e29d34',
        fullName: 'Kiara',
        timeStamp: '12:47 PM',
        recentText: 'I will call today.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d45',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d56',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d67',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d78',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d89',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d90',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d01',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29123',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29234',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e293455',
        fullName: 'Aniket Kumar',
        timeStamp: '8:56 PM',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      }
    ]
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600'
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="4"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50'
                  }}
                  color="coolGray.800"
                  bold>
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200'
                  }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50'
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
            <Button
              onPress={() => {
                navigation.navigate('ChatRoom')
              }}>
              <Text>가가가가</Text>
            </Button>
          </Box>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={null}
        ListFooterComponent={null}></FlatList>
    )
  }

  return (
    <Box bg="white">
      <RenderChatRoom />
    </Box>
  )
}
