import React, { Component } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

class TrackerForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  addTracker() {
  }

  render() {
    return (
      <View>
        <TextInput
          style={ styles.form }
          placeholder="Type here to add a new tracker"
          onChangeText={ text => this.setState({ text }) }
        />
        <Button
          onPress={ this.addTracker }
          title="Add tracker"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
    marginBottom: 10,
    paddingLeft: 10
  }
})

export default TrackerForm