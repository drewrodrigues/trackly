import React, { Component } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'
import store from '../store'

class TrackerForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
    this.addTracker = this.addTracker.bind(this)
  }

  addTracker() {
    store.insert({ title: this.state.text, time: 892 }, (err, doc) => {
      if (err) {
        Alert.alert("Failure")
      }
      Alert.alert(doc.title)
    })
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