import React, {useState} from 'react'
import {Alert} from 'react-native'
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Input,
  Text,
  Badge,
  Toast
} from 'native-base'
import {useDispatch} from 'react-redux'
import * as S from '../../store/signup'
import * as U from '../../utils'
import {useNavigation} from '@react-navigation/native'
import {getHostUrl, post} from '../../server'
import * as A from '../../store/asyncStorage'

export default function Signup() {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const dispatch = useDispatch()
  const checkForm = () => {
    dispatch(S.signupAction({name, email, password}))
    var nameValid = false
    var emailValid = false
    var passwordValid = false
    var confirmPasswordValid = false

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

    if (confirmPassword.length == 0) {
      setConfirmPasswordError('비밀번호를 다시 한 번 입력해주세요.')
    } else if (password != confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.')
    } else {
      setConfirmPasswordError('')
      confirmPasswordValid = true
    }

    if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
      post(getHostUrl('/auth/signUp'), {name, email, password})
        .then((res) => res.json())
        .then((result) => {
          const {jwt} = result

          U.writeToStorage('signUpJWT', jwt)
            .then(() => {
              Toast.show({description: '회원가입이 완료되었습니다.'})
              dispatch(A.setSignUpJWT(jwt))
              dispatch(S.signupAction({name, email, password}))
            })
            .catch((err) => Alert.alert(err.message))
        })
        .catch((err) => Alert.alert(err.message))
      navigation.goBack()
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
        <Divider w="100%" my="5" />
        <FormControl>
          <FormControl.Label>비밀번호 확인</FormControl.Label>
          <Input
            type="password"
            placeholder="confirm password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}></Input>
          <FormControl.HelperText>
            비밀번호를 다시 한 번 입력해주세요.
          </FormControl.HelperText>
        </FormControl>
        {confirmPasswordError.length > 0 && (
          <Badge colorScheme="danger">
            <Text>{confirmPasswordError}</Text>
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
