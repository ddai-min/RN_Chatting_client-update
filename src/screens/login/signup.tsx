import React, {useState} from 'react'
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Input,
  Text,
  Badge
} from 'native-base'
import {useDispatch} from 'react-redux'
import {signupAction} from '../../store/signup'

export default function Signup({navigation}: any) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const dispatch = useDispatch()
  const checkForm = () => {
    dispatch(signupAction({name, email, password}))
    var nameValid = false
    var emailValid = false
    var passwordValid = false

    if (name.length == 0) {
      setNameError('이름을 입력하세요.')
    } else if (name.indexOf(' ') >= 0) {
      setNameError('띄어쓰기가 포함되어 있습니다.')
    } else {
      setNameError('')
      nameValid = true
    }

    if (email.length == 0) {
      setEmailError('이메일을 입력하세요.')
    } else if (email.indexOf(' ') >= 0) {
      setEmailError('띄어쓰기가 포함되어 있습니다.')
    } else {
      setEmailError('')
      emailValid = true
    }

    if (password.length == 0) {
      setPasswordError('비밀번호를 입력하세요.')
    } else if (password.indexOf(' ') >= 0) {
      setPasswordError('띄어쓰기가 포함되어 있습니다.')
    } else {
      setPasswordError('')
      passwordValid = true
    }

    if (nameValid && emailValid && passwordValid) {
      navigation.pop()
    }
  }

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Container flex={1} paddingTop="5" paddingLeft="5">
        <FormControl>
          <FormControl.Label>이름</FormControl.Label>
          <Input
            type="name"
            placeholder="name"
            onChangeText={setName}
            value={name}></Input>
          <FormControl.HelperText>이름을 입력해주세요.</FormControl.HelperText>
        </FormControl>
        {nameError.length > 0 && (
          <Badge colorScheme="danger">
            <Text>{nameError}</Text>
          </Badge>
        )}
        <Divider w="100%" my="5" />
        <FormControl>
          <FormControl.Label>이메일</FormControl.Label>
          <Input
            type="email"
            placeholder="email"
            onChangeText={setEmail}
            value={email}></Input>
          <FormControl.HelperText>
            이메일을 입력해주세요.
          </FormControl.HelperText>
        </FormControl>
        {emailError.length > 0 && (
          <Badge colorScheme="danger">
            <Text>{emailError}</Text>
          </Badge>
        )}
        <Divider w="100%" my="5" />
        <FormControl>
          <FormControl.Label>비밀번호</FormControl.Label>
          <Input
            type="password"
            placeholder="password"
            onChangeText={setPassword}
            value={password}></Input>
          <FormControl.HelperText>
            비밀번호를 입력해주세요.
          </FormControl.HelperText>
        </FormControl>
        {passwordError.length > 0 && (
          <Badge colorScheme="danger">
            <Text>{passwordError}</Text>
          </Badge>
        )}
      </Container>
      <Button h="8%" rounded="none" onPress={checkForm}>
        <Text color="white" fontSize="20">
          회원가입
        </Text>
      </Button>
    </Box>
  )
}
