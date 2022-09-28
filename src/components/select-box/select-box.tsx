import React from 'react'
import { Button } from '@comps'
import { StyleSheet } from 'react-native'
import { px2Dp } from '@kit'

const SelectBox = (props: { isSelect: boolean; text: string; disabled?: boolean; onClick?: () => void }) => {
  const { isSelect, text, onClick = () => {}, disabled = false } = props
  return (
    <Button
      text={text}
      disabled={disabled}
      style={[styles.unselectBtn, isSelect ? styles.selectedBtn : null]}
      textStyle={[styles.unselectTxt, isSelect ? styles.selectedTxt : null]}
      onPress={onClick}
    />
  )
}

export default SelectBox

const styles = StyleSheet.create({
  unselectBtn: {
    height: px2Dp(54),
    borderWidth: px2Dp(1),
    borderColor: '#CCCCCC',
    borderRadius: px2Dp(18),
    paddingHorizontal: px2Dp(16),
    backgroundColor: '#F9F9F9',
    marginRight: px2Dp(24),
    marginBottom: px2Dp(10)
  },
  selectedBtn: {
    borderColor: '#3377FF'
  },
  unselectTxt: {
    fontFamily: 'PingFangSC-Regular',
    fontWeight: '400',
    fontSize: px2Dp(26),
    color: '#666666',
    letterSpacing: 0
  },
  selectedTxt: {
    color: '#3377FF'
  }
})
