import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Tracker extends React.Component {
  doTheThings() {
    console.log('yes')
  }

  render() {
    return (
      <View style={ styles.container } onClick={ this.doTheThings }>
        <Text>Something</Text>
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