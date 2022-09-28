import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { px2Dp, screenWidth } from '@kit'

const OptionContainer = (props: PropsWithChildren<{ title: string; disabled?: boolean }>) => {
  const { title, children, disabled = false } = props
  return (
    <View style={styles.listView}>
      <Text style={[styles.listTitle, disabled ? styles.grey : null]}>{title}</Text>
      <View style={[styles.row, styles.selectListView]}>{children}</View>
    </View>
  )
}

export default React.memo(OptionContainer)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  listView: {
    width: screenWidth,
    marginTop: px2Dp(32),
    paddingHorizontal: px2Dp(42)
  },
  listTitle: {
    fontFamily: 'PingFangSC-Semibold',
    fontWeight: '600',
    fontSize: px2Dp(26),
    color: '#222222',
    letterSpacing: 0
  },
  selectListView: {
    flexWrap: 'wrap',
    marginTop: px2Dp(24)
  },
  grey: {
    opacity: 0.5
  }
})
