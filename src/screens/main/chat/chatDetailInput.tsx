import React, {Component} from 'react'
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class ChatDetailInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.setText}
          onSubmitEditing={this.submit}
          placeholder="메시지를 입력하세요."
          placeholderTextColor="black"
          style={styles.textInput}
          value={this.state.text}
        />

        <TouchableOpacity style={styles.sendButton} onPress={this.submit}>
          <Icon name="send" color="#000000" size={26} />
        </TouchableOpacity>
      </View>
    )
  }

  setText = (text) => {
    this.setState({text})
  }

  submit = () => {
    this.props.onSubmit(this.state.text)
    this.setState({text: ''})
  }
}

export default ChatDetailInput

const styles = StyleSheet.create({
  container: {},
  sendButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 0,
    height: 60,
    justifyContent: 'center',
    width: 60
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    height: 60,
    paddingHorizontal: 16
  }
})
