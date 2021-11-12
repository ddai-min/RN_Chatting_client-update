import React from 'react';
import { Button, Box, Text, Center } from 'native-base';

export default function Category({ navigation }) {
    return (
        <Box flex={1} bg="white" safeAreaTop>
            <Center flex={1}>

            </Center>
            <Button h="8%" rounded="none"
                onPress={() => {
                    navigation.navigate("MainIndex")
                }}>
                <Text color="white" fontSize="20">다음</Text>
            </Button>
        </Box>
    );
}