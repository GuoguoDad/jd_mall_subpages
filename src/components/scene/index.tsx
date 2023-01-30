import React, { PropsWithChildren, useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native'
import { FastImg } from '@comps'
import { common } from '@config/common'
import { backBlack, backWhite } from '@img'
import { px2Dp, rnClose, screenWidth, useAndroidBackHandler } from '@kit'

const Scene = (props: SceneProps) => {
  const {
    children,
    hasBack = true,
    title,
    backFun,
    barStyle = 'dark-content',
    contentBackgroundColor = '#f6f6f6',
    renderRight
  } = props

  const navigation = useNavigation()
  const route = useRoute()
  const isFirstRouteInParent = useNavigationState(state => state.routes[0].key === route.key)

  const _backHandler = () => {
    if (isFirstRouteInParent) {
      rnClose()
      return
    }
    navigation.goBack()
    return
  }

  useAndroidBackHandler(_backHandler)

  const backHandler = backFun ?? _backHandler

  const [backgroundColor, setBackgroundColor] = useState(props?.backgroundColor || 'white')

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle={barStyle} />
      <View style={[styles.container]}>
        <View
          style={[
            styles.header,
            {
              paddingTop: common.currentValue.statusBarHeight,
              backgroundColor
            }
          ]}
        >
          <View style={styles.left}>
            {hasBack ? (
              <TouchableOpacity
                activeOpacity={0.75}
                accessible
                onPress={backHandler}
                style={[styles.container, styles.leftBack]}
                hitSlop={{ top: 5, bottom: 5, left: 5, right: 20 }}
              >
                <FastImg
                  url={barStyle === 'dark-content' ? backBlack : backWhite}
                  priority="high"
                  style={styles.leftIcon}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          {/* 标题 */}
          <View style={[styles.container, styles.titleView]}>
            <Text style={[styles.title, { color: barStyle === 'dark-content' ? '#222222' : '#fff' }]} numberOfLines={1}>
              {title}
            </Text>
          </View>
          <View style={styles.left}>{renderRight ? renderRight : null}</View>
        </View>
        {/* 内容 */}
        <View
          style={
            contentBackgroundColor ? [styles.container, { backgroundColor: contentBackgroundColor }] : styles.container
          }
        >
          {children || null}
        </View>
      </View>
    </>
  )
}

export default Scene

export type SceneProps = PropsWithChildren<{
  hasBack?: boolean
  backFun?: () => void
  title: string
  barStyle?: 'light-content' | 'dark-content'
  backgroundColor?: string
  contentBackgroundColor?: string
  renderRight?: React.ReactNode
}>

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  left: {
    height: px2Dp(88),
    width: screenWidth / 4
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
    color: '#fff',
    fontSize: px2Dp(36),
    letterSpacing: 0
  },
  leftIcon: {
    width: px2Dp(48),
    height: px2Dp(48)
  }
})
