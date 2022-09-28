import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FastImg } from '@comps'
import { goods } from '@img'

class NoData extends React.Component<NoDataProps> {
  constructor(props: NoDataProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={[styles.container, this.props.noDataStyle]}>
        <FastImg url={this.props.imgUrl || goods} style={styles.icon} />
        <Text style={[styles.tips, this.props.emptyTextStyle]}>{this.props.title || '暂无数据'}</Text>
      </View>
    )
  }
}

export default NoData

type NoDataProps = {
  title?: string
  imgUrl?: string
  noDataStyle?: any
  emptyTextStyle?: any
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tips: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 20,
    color: '#333333',
    marginTop: 25
  },
  icon: {
    width: 150,
    height: 150
  }
})
