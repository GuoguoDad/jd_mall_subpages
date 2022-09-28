import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Replenish = () => {
  return (
    <React.Fragment>
      <View style={[styles.container, styles.center]} />
      <View style={[styles.tipsContainer, styles.center]}>
        <Text style={styles.tips}>补货中</Text>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 991,
    elevation: 991,
    width: 120,
    height: 120,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    opacity: 0.5
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tipsContainer: {
    position: 'absolute',
    zIndex: 992,
    elevation: 992,
    top: 44,
    left: 30,
    width: 60,
    height: 28,
    borderRadius: 8,
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  tips: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#FFFFFF'
  }
})
