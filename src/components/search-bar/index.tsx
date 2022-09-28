import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import { px2Dp } from '@kit'
import { ic_search_grey, ic_close } from '@img'
import { FastImg } from '@comps'
import { common } from '@config/common'

const SearchBar = (props: SearchBarProp) => {
  const {
    placeholder = '',
    value = '',
    onChange = () => {},
    onCancel = () => {},
    backgroundColor = 'white',
    autoFocus = false
  } = props
  const [text, setText] = useState<string>(value)
  const [val, setVal] = useState<string>(value)

  useEffect(() => {
    if (value !== val) {
      setText(value)
      setVal(value)
    }
  }, [value])

  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColor, paddingTop: common.currentValue.statusBarHeight }]}
    >
      <View style={styles.content}>
        <View style={styles.searchArea}>
          {val ? (
            <View style={styles.tag}>
              <Text style={styles.tagTxt} numberOfLines={1}>
                {val}
              </Text>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => {
                  setVal('')
                  setText('')
                  onChange('')
                }}
              >
                <FastImg url={ic_close} priority="high" style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <FastImg url={ic_search_grey} priority="high" style={styles.searchIcon} />
              <TextInput
                value={text}
                maxLength={48}
                onSubmitEditing={() => {
                  setVal(text)
                  onChange(text)
                }}
                autoFocus={autoFocus}
                onChangeText={(text: string) => setText(text)}
                style={styles.placeholder}
                placeholder={placeholder}
                returnKeyType={'search'}
                returnKeyLabel={'搜索'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'#CCCCCC'}
              />
            </>
          )}
        </View>
        <TouchableOpacity onPress={() => onCancel()} activeOpacity={0.75} style={styles.btnContainer}>
          <Text style={styles.cancelTxt}>取消</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default SearchBar

type SearchBarProp = {
  value?: string
  placeholder?: string
  backgroundColor?: string
  onChange?: (va: string) => void
  onCancel?: () => void
  autoFocus?: boolean
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  content: {
    height: px2Dp(88),
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tag: {
    height: px2Dp(50),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: px2Dp(8),
    paddingHorizontal: px2Dp(16),
    backgroundColor: '#FFFFFF',
    borderRadius: px2Dp(20)
  },
  tagTxt: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2Dp(28),
    color: '#333333'
  },
  searchArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: px2Dp(60),
    backgroundColor: '#F3F3F3',
    borderRadius: px2Dp(24)
  },
  searchIcon: {
    width: px2Dp(30),
    height: px2Dp(30),
    marginLeft: px2Dp(20),
    marginRight: px2Dp(16)
  },
  closeIcon: {
    width: px2Dp(18),
    height: px2Dp(18),
    marginLeft: px2Dp(8),
    marginRight: px2Dp(5)
  },
  txtInput: {},
  placeholder: {
    maxWidth: '80%',
    paddingVertical: 0, //android部分机型文字显示不全的问题
    opacity: 0.9,
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2Dp(26)
  },
  btnContainer: {
    width: px2Dp(80),
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  cancelTxt: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2Dp(28),
    color: '#333333'
  }
})
