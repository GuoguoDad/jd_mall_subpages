import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useCallOnceInInterval } from '@kit'

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
    this.state = {
      refreshKey: 0,
      disabled: this.props?.disabled || false,
      text: this.props.text
    }
  }

  componentWillReceiveProps(nextProps: Readonly<ButtonProps>, nextContext: any) {
    const { disabled, text } = nextProps
    if (disabled !== this.state.disabled || text !== this.state.text) {
      this.setState({ disabled, text, refreshKey: this.state.refreshKey + 1 })
    }
  }

  render() {
    const { disabled, text, refreshKey } = this.state
    const { onPress = () => {}, style, textStyle } = this.props
    return (
      <TouchableOpacity
        key={refreshKey}
        activeOpacity={disabled ? 0.5 : 0.75}
        onPress={() => {
          if (!disabled) {
            useCallOnceInInterval()(() => onPress())
          }
        }}
        style={[style, styles.center, disabled ? styles.btnGrey : null]}
      >
        <Text numberOfLines={1} style={textStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button

type ButtonProps = {
  disabled?: boolean
  onPress?: Function
  style: StyleProp<ViewStyle>
  textStyle: StyleProp<TextStyle>
  text: string
}

type ButtonState = {
  refreshKey: number
  disabled?: boolean
  text: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnGrey: {
    opacity: 0.5
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
