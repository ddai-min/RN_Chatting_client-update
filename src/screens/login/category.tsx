import React from 'react'
import {Button, Box, Text, Center} from 'native-base'
import {useNavigation} from '@react-navigation/native'

export default function Category() {
  const navigation = useNavigation()

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Center flex={1}></Center>
      <Button
        h="8%"
        rounded="none"
        onPress={() => {
          navigation.reset({routes: [{name: 'MainIndex'}]})
        }}>
        <Text color="white" fontSize="20">
          다음
        </Text>
      </Button>
    </Box>
  )
}
