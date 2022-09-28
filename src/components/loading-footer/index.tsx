import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getIphoneBottomSpace, px2Dp } from '@kit'

const LoadingFooter = (props: { tip?: string; bg?: string }) => {
  const { tip = '加载中...', bg = 'white' } = props
  return (
    <View style={[styles.footer, { backgroundColor: bg }]}>
      <Text style={styles.tip}>{tip}</Text>
    </View>
  )
}

export default React.memo(LoadingFooter)

const styles = StyleSheet.create({
  footer: {
    height: px2Dp(84) + getIphoneBottomSpace(),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: getIphoneBottomSpace()
  },
  tip: {
    color: '#cccccc',
    fontSize: 14
  }
})
