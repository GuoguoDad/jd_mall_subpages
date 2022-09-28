import 'react-native-gesture-handler'
import { View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getCommonInfo, isValidPage, useQueryParams } from '@kit'
import { UrlProps } from '@type'
import { RoutesEnum } from '@routes'
import { name as appName } from '../app.json'

const Stack = createStackNavigator()

import { common } from '@config/common'
import { screen } from '@config/screen'

import UnKnowPage from '@pages/unknow-page'
import UserSetting from '@pages/user-settting'
import Waterfall from '@pages/waterfall-list'

/**
 * 页面入口
 * @param props 客户端传入的参数
 * @constructor
 */
export default function App(props: AppProps) {
  const { initRouteUrl = `https://com.aries.com?pageCode=rn&bundleName=${appName}&initRouteName=UserSetting` } = props

  //initRouteUrl 是打开页面的入口，由app菜单或者cms配置
  const { initRouteName, ...restProps } = useQueryParams<UrlProps>(initRouteUrl)

  //判断initRouteUrl配置是否正确
  let finalInitRouteName = initRouteName
  if (!isValidPage(RoutesEnum, initRouteName)) {
    finalInitRouteName = RoutesEnum.UnKnowPage
  }

  //设置initRouteName 和 currentScreen
  screen.currentValue = { initRouteName: finalInitRouteName, currentScreen: finalInitRouteName }

  const [isEnvInit, setIsEnvInit] = useState(false)

  //显示页面前设置共用的属性，列如:店铺编号,城市编号,状态栏高度,底部距离
  useEffect(() => {
    getCommonInfo().then(({ statusBarHeight, bottomSpace }) => {
      common.currentValue = { statusBarHeight, bottomSpace }
      setIsEnvInit(true)
    })
  }, [])

  return isEnvInit ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={finalInitRouteName} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RoutesEnum.UnKnowPage} component={UnKnowPage} />
        <Stack.Screen name={RoutesEnum.UserSetting} component={UserSetting} />
        <Stack.Screen name={RoutesEnum.Waterfall} component={Waterfall} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View />
  )
}

type AppProps = {
  initRouteUrl: string
}
