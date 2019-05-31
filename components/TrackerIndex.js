import React from 'react'
import { Alert, Button, StyleSheet, Text, ScrollView } from 'react-native'
// import store from "../store"
// import TrackerIndexItem from './TrackerIndexItem'

export default class TrackerIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { trackers: [] }
    this.goToNewForm = this.goToNewForm.bind(this)
    // this.store = store
    // this.deleteTracker = this.deleteTracker.bind(this)
  }

  // componentDidMount() {
  //   this.store.find({}, (err, docs) => {
  //     this.setState({ trackers: docs })
  //   })
  // }

  // deleteTracker(id) {
  //   this.store.remove({ _id: trackerId }, {}, (err, numRemoved) => {
  //     if (err) Alert.alert("Didn't delete")
  //     let oldTrackers = Object.assign({}, this.state)
  //     let leftOverTrackers = oldTrackers.select(tracker => tracker._id !== trackerId)
  //     this.setState({ trackers: leftOverTrackers })
  //     // TODO: also remove it from array? or re query?
  //   })
  // }

  goToNewForm() {
    this.props.navigation.navigate("New")
  }

  render() {
    const { trackers } = this.state

    return (
      <ScrollView style={ styles.container }>
        <Button title="New Tracker" onPress={ this.goToNewForm } />
        <Text>Tracker Index</Text>
        <Text>Tracker Index</Text>
        <Text>Tracker Index</Text>
        <Text>Tracker Index</Text>
        {/* { trackers.map((tracker, i) => (
          <TrackerIndexItem
            key={ i }
            tracker={ tracker }
            deleteTracker={ deleteTracker } />)
        )} */}
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
