import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class SystemMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      time: ''
    }
  }

  render() {
    return (
      <View style={styles.systemMessage}>
        <Text style={styles.systemMessageText}>
          {this.props.body.toUpperCase()}
        </Text>

        <View style={styles.timeContainer}>
          <Text style={styles.systemMessageText}>{this.props.time}</Text>
        </View>
      </View>
    )
  }
}

export default SystemMessage

const styles = StyleSheet.create({
  systemMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32
  },
  systemMessageText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700'
  },
  timeContainer: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 4
  }
})
