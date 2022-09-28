import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FastImg } from '@comps'
import { px2Dp } from '@kit'
import { arrowRight } from '@img'

const SettingItem = (props: SettingItemProps) => {
  const { title, description = '', onPress = () => {} } = props
  return (
    <TouchableOpacity activeOpacity={0.65} onPress={onPress} style={[styles.row, styles.itemView]}>
      <Text style={styles.nickName}>{title}</Text>
      <Text style={styles.userName}>{description}</Text>
      <FastImg url={arrowRight} style={styles.arrowRight} />
    </TouchableOpacity>
  )
}

export default SettingItem

type SettingItemProps = {
  title: string
  description?: string
  onPress?: () => void
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  headerIcon: {
    width: px2Dp(140),
    height: px2Dp(140),
    borderRadius: px2Dp(80)
  },
  arrowRight: {
    width: px2Dp(16),
    height: px2Dp(30),
    marginRight: px2Dp(15),
    marginTop: px2Dp(5),
    borderRadius: px2Dp(80)
  },
  itemView: {
    height: px2Dp(98),
    paddingHorizontal: px2Dp(16),
    paddingVertical: px2Dp(10),
    backgroundColor: 'white',
    alignItems: 'center'
  },
  userView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: px2Dp(12)
  },
  nickName: {
    fontWeight: '300',
    fontSize: px2Dp(28),
    color: '#000100'
  },
  userName: {
    flex: 1,
    fontWeight: '300',
    fontSize: px2Dp(26),
    color: '#8B8B8D',
    marginTop: px2Dp(5),
    textAlign: 'right',
    marginRight: px2Dp(15)
  }
})
