import React from 'react'
import {
  FlatList,
  Box,
  Avatar,
  Button,
  VStack,
  HStack,
  Text,
  Spacer
} from 'native-base'

export default function RecommendCard() {
  const RenderRecommendCard = () => {
    const data = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        fullName: 'Aafreen Khan',
        recentText: 'Good Day!',
        avatarUrl:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Sujitha Mathur',
        recentText: 'Cheer up, there!',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d12',
        fullName: 'Anci Barroco',
        recentText: 'Good Day!',
        avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d23',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '28694a0f-3da1-471f-bd96-142456e29d34',
        fullName: 'Kiara',
        recentText: 'I will call today.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d45',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d56',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d67',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d78',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d89',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d90',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29d01',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29123',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e29234',
        fullName: 'Aniket Kumar',
        recentText: 'All the best',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU'
      },
      {
        id: '68694a0f-3da1-431f-bd56-142371e293455',
        fullName: 'Aniket Kumar',
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
              <Button>
                <Text color="white">친구추가</Text>
              </Button>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={null}
        ListFooterComponent={null}></FlatList>
    )
  }

  return <RenderRecommendCard />
}
