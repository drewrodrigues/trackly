import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Tracker extends React.Component {
  render() {
    const { time, title } = this.props.tracker

    return (
      <View style={ styles.container } onClick={ this.doTheThings }>
        <Text>{ time }</Text>
        <Text>{ title }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    color: "white",
    height: 100,
    marginBottom: 10,
    width: 100,
    textAlign: "center"
  }
})

export default Tracker