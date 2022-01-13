import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

class MessageBubble extends Component {
  render() {
    return (
      <View
        style={[
          styles.bubble,
          this.props.alignToRight && styles.bubbleOnRight
        ]}>
        <View
          style={[
            styles.bubbleTextContainer,
            this.props.highlighted && styles.bubbleTextContainerHighlighted
          ]}>
          <Text>{this.props.body}</Text>
        </View>
      </View>
    )
  }
}

export default MessageBubble

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    marginBottom: 8
  },
  bubbleOnRight: {
    justifyContent: 'flex-end'
  },
  bubbleMetaText: {
    color: 'grey',
    marginTop: 0,
    fontSize: 11
  },
  bubbleMetaTextOnRight: {
    textAlign: 'right'
  },
  bubbleTextContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 15
  },
  bubbleTextContainerHighlighted: {
    backgroundColor: '#EEEEEE'
  },
  profileImage: {
    height: 45,
    width: 45
  },
  systemMessage: {
    alignItems: 'center',
    paddingVertical: 32
  },
  systemMessageText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700'
  },
  container: {
    backgroundColor: '#1BA2FB',
    flex: 1,
    paddingHorizontal: 16
  }
})
