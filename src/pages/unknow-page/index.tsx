import React from 'react'
import { StyleSheet, View, Text, BackHandler, TouchableOpacity } from 'react-native'
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native'
import { isAndroid, rnClose } from '@kit'
import { useFocusEffect } from '@react-navigation/native'

const UnKnowPage = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const isFirstRouteInParent = useNavigationState(state => state.routes[0].key === route.key)

  const backHandler = () => {
    if (isFirstRouteInParent) {
      rnClose()
      return
    }
    navigation.goBack()
    return false
  }

  useFocusEffect(() => {
    if (isAndroid()) {
      BackHandler.addEventListener('hardwareBackPress', backHandler)
    }
    return () => {
      if (isAndroid()) {
        BackHandler.removeEventListener('hardwareBackPress', backHandler)
      }
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.tips}>该页面不存在，请更新至最新版本后重试~</Text>
      <TouchableOpacity style={styles.btnBack} activeOpacity={0.75} onPress={() => backHandler()}>
        <Text style={styles.backTxt}>返回</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UnKnowPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
  },
  tips: {
    fontSize: 18
  },
  btnBack: {
    width: '50%',
    marginTop: 20,
    paddingVertical: 4,
    backgroundColor: 'grey',
    borderRadius: 9
  },
  backTxt: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
})
