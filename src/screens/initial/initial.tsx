import React from 'react'
import {Box, Text, Button, Center} from 'native-base'

export default function Initial({navigation}: any) {
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
