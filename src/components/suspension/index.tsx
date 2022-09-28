import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity ,AppState} from 'react-native'
import { getIphoneBottomSpace, Msg, rn2Cart } from '@kit'
import { FastImg } from '@comps'
import { order, shopCart, cart, gotop } from '@img'
import { MsgEnum } from '@kit'

import { queryCartNum } from './web-api'

export default class Suspension extends React.Component<SuspensionProps, { cartNum: number }> {
  constructor(props: SuspensionProps) {
    super(props)
    this.state = {
      cartNum: 0
    }
  }

  componentDidMount() {
    this.queryNum()
    Msg.addListener(MsgEnum.cartNum, this.queryNum)
    AppState.addEventListener('change',this._onAppStateChange)

    return () => {
      Msg.removeListener(MsgEnum.cartNum, this.queryNum)
    }
  }

  componentWillUnmount(){
    AppState.removeEventListener('change',this._onAppStateChange)
  }

  _onAppStateChange = () => {
    this.queryNum()
  }

  render() {
    const { cartNum } = this.state
    let { scrollToTop } = this.props
    // const cartNum = 11
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.75} onPress={() => rn2Cart()} style={styles.item}>
          <FastImg url={cart} priority="high" style={styles.icon} />
          {cartNum > 0 ? (
            <View style={styles.cornerMarker}>
              <Text style={styles.amount}>{cartNum > 0 && cartNum < 100 ? cartNum : '99+'}</Text>
            </View>
          ) : null}
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity activeOpacity={0.75} onPress={() => scrollToTop()} style={styles.item}>
          <FastImg url={gotop} priority="high" style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }

  queryNum = () => {
    const { storeCode } = this.props
    queryCartNum(storeCode).then(res => {
      this.setState({ cartNum: res.data.cartOneCount|| 0 })
    })
  }
}

type SuspensionProps = {
  storeCode: string
  scrollToTop: () => void
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 108,
    position: 'absolute',
    bottom: 10 + getIphoneBottomSpace(),
    right: 10,
    backgroundColor: 'transparent'
    // borderColor: '#F2F2F2',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // opacity: 0.9,
    // borderRadius: 20,
    // shadowColor: 'rgba(204,204,204,0.14)',
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  },
  line: {
    width: '80%',
    height: 1,
    marginLeft: '10%',
    backgroundColor: '#F2F2F2'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 50,
    height: 50
  },
  cornerMarker: {
    position: 'absolute',
    top: 4,
    right: 2,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 1,
    paddingBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth:14
  },
  amount: {
    fontSize: 12,
    color: 'white',
    // height: 12,
    // minWidth: 12,
    // textAlign:'center'
  }
})
