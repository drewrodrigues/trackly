import React from 'react'
import { Alert, Button, StyleSheet, Text, ScrollView } from 'react-native'
import store from "../store"
import TrackerIndexItem from './TrackerIndexItem'

export default class TrackerIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { trackers: [] }
    this.goToNewForm = this.goToNewForm.bind(this)
    this.deleteTracker = this.deleteTracker.bind(this)
  }

  componentDidMount() {
    store.find({}, (err, docs) => {
      this.setState({ trackers: docs })
    })
  }

  deleteTracker(id) {
    store.remove({ _id: id }, {}, (err, numRemoved) => {
      console.log(this.state.trackers)
      if (err) Alert.alert("Didn't delete")
      let leftOverTrackers = this.state.trackers.filter(tracker => tracker._id !== id)
      this.setState({ trackers: leftOverTrackers })
      // TODO: also remove it from array? or re query?
    })
  }

  goToNewForm() {
    this.props.navigation.navigate("New")
  }

  render() {
    const { trackers } = this.state
    const { deleteTracker } = this

    return (
      <ScrollView style={ styles.container }>
        <Button title="New Tracker" onPress={ this.goToNewForm } />
        { trackers.map((tracker, i) => (
          <TrackerIndexItem
            key={ i }
            tracker={ tracker }
            deleteTracker={ deleteTracker }
          />
        ))}
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
