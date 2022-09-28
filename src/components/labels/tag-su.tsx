import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TagSu = (props: { value: string }) => {
  const { value } = props
  return (
    <View style={styles.su}>
      <Text numberOfLines={1} style={styles.suTxt}>
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  su: {
    height: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingTop: 1,
    paddingLeft: 2,
    paddingRight: 2,
    borderWidth: 1,
    borderColor: '#3377FF',
    marginRight: 5,
    marginBottom: 2
  },
  suTxt: {
    fontSize: 10,
    color: '#3377FF',
    textAlign: 'center',
    height: 10
  }
})
