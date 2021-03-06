import React, {useState} from 'react'
import {Alert} from 'react-native'
import {
  Button,
  Divider,
  FormControl,
  Input,
  Text,
  Badge,
  Toast,
  KeyboardAvoidingView,
  ScrollView,
  Checkbox
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
  const [category, setCategory] = useState({
    one: false,
    two: false,
    three: false
  })

  const dispatch = useDispatch()
  const checkForm = () => {
    dispatch(
      S.signupAction({
        name,
        email,
        password,
        category: {one: category.one, two: category.two, three: category.three}
      })
    )
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
      post(getHostUrl('/auth/signUp'), {
        name,
        email,
        password,
        category: setCategory(category)
      })
        .then((res) => res.json())
        .then((result) => {
          const {jwt} = result

          U.writeToStorage('signUpJWT', jwt)
            .then(() => {
              Toast.show({description: '회원가입이 완료되었습니다.'})
              dispatch(A.setSignUpJWT(jwt))
              dispatch(
                S.signupAction({
                  name,
                  email,
                  password,
                  category: {
                    one: category.one,
                    two: category.two,
                    three: category.three
                  }
                })
              )
            })
            .catch((err) => Alert.alert(err.message))
        })
        .catch((err) => Alert.alert(err.message))
      navigation.goBack()
    }
  }

  return (
    <KeyboardAvoidingView bg="white" flex={1} paddingTop="5">
      <ScrollView paddingLeft="5" paddingRight="5">
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
        <Divider w="100%" my="5" />
        <FormControl>
          <FormControl.Label>카테고리 선택</FormControl.Label>
          <Checkbox
            value="one"
            onChange={(isSelected) =>
              setCategory({
                one: isSelected,
                two: category.two,
                three: category.three
              })
            }>
            가가가
          </Checkbox>
          <Checkbox
            value="two"
            onChange={(isSelected) =>
              setCategory({
                one: category.one,
                two: isSelected,
                three: category.three
              })
            }>
            나나나
          </Checkbox>
          <Checkbox
            value="three"
            onChange={(isSelected) =>
              setCategory({
                one: category.one,
                two: category.two,
                three: isSelected
              })
            }>
            다다다
          </Checkbox>
          <FormControl.HelperText>
            회원가입 목적을 선택해주세요.
          </FormControl.HelperText>
        </FormControl>
      </ScrollView>
      <Button rounded="none" onPress={checkForm}>
        <Text color="white" fontSize="20">
          회원가입
        </Text>
      </Button>
    </KeyboardAvoidingView>
  )
}
