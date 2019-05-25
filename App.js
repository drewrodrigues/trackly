import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import TrackerForm from './components/TrackerForm'
import Tracker from './components/Tracker'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={ styles.container }>
        <TrackerForm />
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20
  }
})
