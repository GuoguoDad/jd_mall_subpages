import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { getIphoneBottomSpace, httpToHttps } from '@kit'
import { bottomBg } from '@img'

class PageFooter extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <ImageBackground
          resizeMode={'contain'}
          source={{ uri: httpToHttps(bottomBg), cache: 'force-cache' }}
          style={styles.imgBg}
        >
          <Text style={styles.tip}>到底了</Text>
        </ImageBackground>
      </View>
    )
  }
}

export default PageFooter

const styles = StyleSheet.create({
  footer: {
    height: 48 + getIphoneBottomSpace(),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: getIphoneBottomSpace()
  },
  tip: {
    color: '#cccccc',
    fontSize: 14
  },
  imgBg: {
    width: 240,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
