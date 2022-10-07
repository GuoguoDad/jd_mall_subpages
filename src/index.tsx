import 'react-native-gesture-handler'
import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getCommonInfo, isValidPage, useQueryParams, exceptionCatch } from '@kit'
import { common } from '@config/common'
import { UrlProps } from '@type'
import { RoutesEnum } from '@routes'
import { name as appName } from '../app.json'

const Stack = createStackNavigator()

import UnKnowPage from '@pages/unknow-page'
import UserSetting from '@pages/user-settting'
import Waterfall from '@pages/waterfall-list'

if (!__DEV__) {
  exceptionCatch()
}

/**
 * 页面入口
 * @param props 客户端传入的参数
 * @constructor
 */
export default function App(props: AppProps) {
  const { initRouteUrl = `https://com.aries.com?pageCode=rn&bundleName=${appName}&initRouteName=UserSetting` } = props

  const [isReady, setIsReady] = useState<boolean>(false)

  //initRouteUrl 是打开页面的入口，由app菜单或者cms配置
  const { initRouteName, ...restProps } = useQueryParams<UrlProps>(initRouteUrl)

  //判断initRouteUrl配置是否正确
  let finalInitRouteName = initRouteName
  if (!isValidPage(RoutesEnum, initRouteName)) {
    finalInitRouteName = RoutesEnum.UnKnowPage
  }

  //显示页面前设置共用的属性，列如:店铺编号,城市编号,状态栏高度,底部距离
  useEffect(() => {
    getCommonInfo().then(({ statusBarHeight, bottomSpace }) => {
      common.currentValue = { statusBarHeight, bottomSpace }
      setIsReady(true)
    })
  }, [])

  if (!isReady) {
    return <View />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={finalInitRouteName} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RoutesEnum.UnKnowPage} component={UnKnowPage} initialParams={restProps} />
        <Stack.Screen name={RoutesEnum.UserSetting} component={UserSetting} initialParams={restProps} />
        <Stack.Screen name={RoutesEnum.Waterfall} component={Waterfall} initialParams={restProps} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type AppProps = {
  initRouteUrl: string
}
