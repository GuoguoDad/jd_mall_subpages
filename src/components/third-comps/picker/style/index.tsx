import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { isAndroid, px2Dp } from '@kit'

export interface PickerStyle {
  modal: ViewStyle
  header: ViewStyle
  headerItem: ViewStyle
  headerLeftItem: ViewStyle
  headerRightItem: ViewStyle
  actionText: TextStyle
  title: TextStyle
  okText: TextStyle
  dismissText: TextStyle
}

export default () =>
  StyleSheet.create<PickerStyle>({
    modal: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    header: {
      flexGrow: 1,
      height: 44,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: isAndroid() ? px2Dp(58) : px2Dp(40)
    },
    headerItem: {
      height: 44,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerLeftItem: {
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: px2Dp(42)
    },
    headerRightItem: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingRight: px2Dp(42)
    },
    actionText: {
      color: '#0ae',
      fontSize: 18,
      textAlign: 'center'
    },
    okText: {
      fontSize: px2Dp(28),
      color: '#3377FF'
    },
    dismissText: {
      fontSize: px2Dp(28),
      color: '#000000'
    },
    title: {
      color: '#666',
      fontSize: 18,
      textAlign: 'center'
    }
  })
