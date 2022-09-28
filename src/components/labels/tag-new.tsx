import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TagNew = () => {
  return (
    <View style={styles.new}>
      <Text style={styles.newTxt}>新品</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  new: {
    height: 14,
    backgroundColor: '#26bfbf',
    borderRadius: 4,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    marginRight: 5,
    marginBottom: 2
  },
  newTxt: {
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
    height: 12
  }
})
