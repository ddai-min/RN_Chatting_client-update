import React from 'react';
import { Box, Button, Center, Divider, FormControl, Input, Text, HStack, Container } from 'native-base';

export default function Login({ navigation }) {
    return (
        <Box flex={1} bg="white" safeAreaTop>
            <Container flex={1} paddingTop="5" paddingLeft="5">
                <FormControl>
                    <FormControl.Label>아이디</FormControl.Label>
                    <Input type="id" placeholder="ID"></Input>
                    <FormControl.HelperText>아이디를 입력해주세요.</FormControl.HelperText>
                </FormControl>
                <Divider w="100%" my="5" />
                <FormControl>
                    <FormControl.Label>비밀번호</FormControl.Label>
                    <Input type="password" placeholder="Password"></Input>
                    <FormControl.HelperText>비밀번호를 입력해주세요.</FormControl.HelperText>
                </FormControl>
            </Container>
            <HStack paddingBottom="3" space={2}>
                <Center>
                    <Text paddingLeft="30" fontSize="20">회원이 아니신가요?</Text>
                </Center>
                <Center paddingLeft="20%">
                    <Button h="50" w="100"
                        onPress={() => {
                            navigation.navigate("Membership")
                        }}>
                        <Text fontSize="20">회원가입</Text>
                    </Button>
                </Center>
            </HStack>
            <Button h="8%" rounded="none"
                onPress={() => {
                    navigation.navigate("Category")
                }}>
                <Text color="white" fontSize="20">로그인</Text>
            </Button>
        </Box>
    );
}