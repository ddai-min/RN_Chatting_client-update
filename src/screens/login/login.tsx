import React, {useState, useEffect} from 'react'
import {
  Button,
  Center,
  Divider,
  FormControl,
  Input,
  Text,
  HStack,
  Badge,
  Toast,
  KeyboardAvoidingView,
  ScrollView
} from 'native-base'
import {useDispatch, useSelector} from 'react-redux'
import * as L from '../../store/login'
import * as U from '../../utils'
import {useNavigation} from '@react-navigation/native'
import {AppState} from '../../store'
import {getHostUrl, postWithJWT} from '../../server'
import * as A from '../../store/asyncStorage'

export default function Login() {
  const navigation = useNavigation()

  const {loggedIn} = useSelector<AppState, L.State>(({login}) => login)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const dispatch = useDispatch()
  const goMain = () => {
    dispatch(L.loginAction({email, password}))
    var emailValid = false
    var passwordValid = false

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

    if (emailValid && passwordValid) {
      U.readFromStorage('signUpJWT')
        .then((jwt) => {
          postWithJWT(getHostUrl('/auth/login'), {email, password}, jwt)
            .then((res) => res.json())
            .then((result) => {
              if (result.success == true) {
                Toast.show({description: result.message})
                dispatch(A.setSignUpJWT(jwt))
                dispatch(L.loginAction({email, password}))
                navigation.reset({routes: [{name: 'MainIndex'}]})
              } else {
                Toast.show({description: result.message})
              }
            })
            .catch((e) => Toast.show({description: e.message}))
        })
        .catch((err) => Toast.show({description: err.message}))
    }
  }

  useEffect(() => {
    U.readFromStorage(L.loggedUserKey)
      .then((value) => {
        if (value.length > 0) {
          const savedUser = JSON.parse(value)
          setEmail(savedUser.email)
          setPassword(savedUser.password)
        }
      })
      .catch((e) => {})
  }, [loggedIn])

  return (
    <KeyboardAvoidingView bg="white" flex={1} paddingTop="5">
      <ScrollView flex={1} paddingLeft="5" paddingRight="5">
        <FormControl>
          <FormControl.Label>이메일</FormControl.Label>
          <Input
            type="email"
            placeholder="Email"
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
            placeholder="Password"
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
      </ScrollView>
      <HStack paddingBottom="2">
        <Center>
          <Text paddingLeft="30" fontSize="20">
            회원이 아니신가요?
          </Text>
        </Center>
        <Center paddingLeft="20%">
          <Button
            h="50"
            w="100"
            onPress={() => {
              navigation.navigate('Signup')
            }}>
            <Text fontSize="20">회원가입</Text>
          </Button>
        </Center>
      </HStack>
      <Button rounded="none" onPress={goMain}>
        <Text color="white" fontSize="20">
          로그인
        </Text>
      </Button>
    </KeyboardAvoidingView>
  )
}

// var email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
