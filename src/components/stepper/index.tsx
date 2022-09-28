import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { FastImg } from '@comps'
import { subtract_disabled, subtract_active, single_add, add_disabled, add_active } from '@img'

export default class Stepper extends React.Component<StepperProp> {
  render() {
    const { value, onChange, max = 999, align = 'right', editable = true } = this.props

    return (
      <View style={[styles.container, align === 'left' ? styles.alignLeft : null]}>
        {value === 0 ? (
          <TouchableOpacity activeOpacity={0.75} onPress={this.onAdd}>
            <FastImg url={single_add} style={styles.singleAdd} />
          </TouchableOpacity>
        ) : (
          <View style={[styles.content]}>
            <TouchableOpacity activeOpacity={0.75} onPress={value > 0 ? this.onSubtract : () => {}}>
              <FastImg url={value > 0 ? subtract_active : subtract_disabled} style={styles.singleAdd} />
            </TouchableOpacity>
            <TextInput
              editable={editable}
              keyboardType="numeric"
              underlineColorAndroid="transparent" //android上隐藏下划线
              onChangeText={va => {
                let val: number = va ? parseInt(va) : 0
                if (val > max) {
                  val = 999
                }
                onChange(val)
              }}
              style={styles.value}
              defaultValue={value.toString()}
              value={value.toString()}
            />
            <TouchableOpacity activeOpacity={0.75} onPress={value >= max ? () => {} : this.onAdd}>
              <FastImg url={value >= max ? add_disabled : add_active} style={styles.singleAdd} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }

  onAdd = () => {
    const { value, onChange } = this.props
    const va = value + 1
    onChange(va)
  }

  onSubtract = () => {
    const { value, onChange } = this.props
    const va = value - 1
    onChange(va)
  }
}

type StepperProp = {
  editable?: boolean
  value: number
  onChange: Function
  max?: number
  align?: 'left' | 'right'
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  singleAdd: {
    width: 24,
    height: 24
  },
  alignLeft: {
    width: '100%',
    justifyContent: 'flex-start'
  },
  content: {
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  value: {
    width: 46,
    paddingVertical: 0, //android上面显示不全
    textAlign: 'center',
    color: '#121212'
  }
})
