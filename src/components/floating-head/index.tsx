import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  TextProps,
  StatusBarStyle
} from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { isAndroid, rnBack, px2Dp, HeaderThemeEnum, screenWidth } from '@kit'
import { backWhite, backBlack } from '@img'
import { common } from '@config/common'
import { FastImg } from '@comps'

class FloatingHeader extends React.Component<FloatingHeaderProps, FloatingHeaderState> {
  constructor(props: FloatingHeaderProps) {
    super(props)
    this.state = {
      statusBarStyle: this.props.statusBarStyle || 'dark-content',
      title: this.props.title,
      headerTheme: this.props.headerTheme
    }
  }

  componentDidMount() {
    if (isAndroid()) {
      BackHandler.addEventListener('hardwareBackPress', this._backHandler)
    }
  }

  componentWillReceiveProps(nextProps: Readonly<FloatingHeaderProps>, nextContext: any) {
    const { headerTheme, title, statusBarStyle = 'dark-content' } = nextProps
    if (
      headerTheme !== this.state.headerTheme ||
      title !== this.state.title ||
      this.state.statusBarStyle !== statusBarStyle
    ) {
      this.setState({ headerTheme, title, statusBarStyle })
    }
  }

  componentWillUnmount() {
    if (isAndroid()) {
      BackHandler.removeEventListener('hardwareBackPress', this._backHandler)
    }
  }

  render() {
    const { titleStyle, renderRight } = this.props
    const { title, headerTheme, statusBarStyle } = this.state
    const leftImg = headerTheme === HeaderThemeEnum.transparent ? backBlack : backBlack

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
            onPress={this._backHandler}
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

  _backHandler = () => {
    const { navigation, onBack = () => {} } = this.props
    onBack()
    rnBack(navigation)
    return false
  }
}

export default FloatingHeader

export type FloatingHeaderProps = {
  title: string
  onBack?: () => void
  statusBarStyle?: StatusBarStyle
  titleStyle?: TextProps['style']
  headerTheme: HeaderThemeEnum
  renderRight?: React.ReactNode
} & NavigationInjectedProps

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
