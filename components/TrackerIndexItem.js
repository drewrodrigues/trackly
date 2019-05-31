import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class Tracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { startTime: undefined, runningTime: 0 }
    this.interval = null
    this.startOrStopButton = this.startOrStopButton.bind(this)
    this.startTime = this.startTime.bind(this)
    this.endTime = this.endTime.bind(this)
  }

  startOrStopButton() {
    let method, title
    if (this.state.startTime) {
      title = "Stop"
      method = this.endTime
    } else {
      title = "Start"
      method = this.startTime
    }
    return <Button title={ title } onPress={ method } />
  }

  startTime() {
    this.setState({ startTime: new Date })
    this.interval = setInterval(() => {
      this.setState({ runningTime: parseInt((new Date - this.state.startTime) / 1000) })
    }, 1000)
  }

  endTime() {
    clearInterval(this.interval)
    this.setState({ startTime: undefined, runningTime: 0, running: false })
  }

  render() {
    const { _id, time, title } = this.props.tracker
    const { startOrStopButton } = this

    return (
      <View style={ styles.container }>
        <Button title="Delete" onPress={ () => this.props.deleteTracker(_id) } />
        <Text>{ time }</Text>
        <Text>{ title }</Text>
        { startOrStopButton() }
        <Text>{ this.state.runningTime }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    color: "white",
    marginBottom: 10,
    width: 100,
    textAlign: "center"
  }
})

export default Tracker