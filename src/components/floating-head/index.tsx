import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextProps, StatusBarStyle } from 'react-native'
import { px2Dp, HeaderThemeEnum, screenWidth, rnClose, useAndroidBackHandler } from '@kit'
import { backWhite, backBlack } from '@img'
import { common } from '@config/common'
import { FastImg } from '@comps'
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native'

const FloatingHeader = (props: FloatingHeaderProps) => {
  const route = useRoute()
  const navigation = useNavigation()
  const isFirstRouteInParent = useNavigationState(state => state.routes[0].key === route.key)

  const { titleStyle, renderRight } = props
  const [state, setState] = useState<FloatingHeaderState>({
    statusBarStyle: props.statusBarStyle || 'dark-content',
    title: props.title,
    headerTheme: props.headerTheme
  })

  const { title, headerTheme, statusBarStyle } = state
  const leftImg = headerTheme === HeaderThemeEnum.transparent ? backBlack : backBlack

  const backHandler = () => {
    if (isFirstRouteInParent) {
      rnClose()
      return
    }
    navigation.goBack()
    return
  }

  useAndroidBackHandler(backHandler)

  useEffect(() => {
    setState({ headerTheme, title, statusBarStyle })
  }, [props.statusBarStyle, props.title, props.headerTheme])

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle={statusBarStyle} />
      <View
        style={[
          styles.header,
          headerTheme === HeaderThemeEnum.white ? styles.active : null,
          { paddingTop: common.currentValue.statusBarHeight }
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.75}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={backHandler}
          style={styles.left}
        >
          <View style={[styles.container, styles.leftBack]}>
            <FastImg url={leftImg} priority="high" style={styles.leftIcon} />
          </View>
        </TouchableOpacity>
        <View style={[styles.container, styles.titleView]}>
          <Text
            style={[styles.title, headerTheme === HeaderThemeEnum.white ? styles.titleActive : null, titleStyle]}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
        <View style={styles.left}>{renderRight ? renderRight : null}</View>
      </View>
    </>
  )
}

export default FloatingHeader

export type FloatingHeaderProps = {
  title: string
  onBack?: () => void
  statusBarStyle?: StatusBarStyle
  titleStyle?: TextProps['style']
  headerTheme: HeaderThemeEnum
  renderRight?: React.ReactNode
}

export type FloatingHeaderState = {
  title: string
  statusBarStyle: StatusBarStyle
  headerTheme: HeaderThemeEnum
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,
    elevation: 991,
    zIndex: 991,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  active: {
    backgroundColor: 'white'
  },
  left: {
    height: px2Dp(88),
    width: screenWidth / 5,
    backgroundColor: 'transparent'
  },
  leftBack: {
    justifyContent: 'center'
  },
  titleView: {
    height: px2Dp(88),
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'PingFangSC-Semibold',
    fontWeight: '600',
    color: '#10161E',
    fontSize: px2Dp(36),
    letterSpacing: 0
  },
  titleActive: {
    color: '#333333'
  },
  leftIcon: {
    width: px2Dp(48),
    height: px2Dp(48)
  }
})
