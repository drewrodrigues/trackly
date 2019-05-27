import React from 'react'
import Datastore from "react-native-local-mongodb"
import { Alert, StyleSheet, Text, ScrollView } from 'react-native'
import TrackerForm from './components/TrackerForm'
import Tracker from './components/Tracker'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.db = new Datastore({ filename: "trackly", autoload: true })
    this.state = { trackers: [] }
  }

  componentDidMount() {
    this.db.find({}, (err, docs) => {
      this.setState({ trackers: docs })
    })
  }

  render() {
    const { trackers } = this.state

    return (
      <ScrollView style={ styles.container }>
        <TrackerForm db={ this.db }/>
        { trackers.map((tracker, i) => <Tracker key={ i } tracker={ tracker } />)}
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
