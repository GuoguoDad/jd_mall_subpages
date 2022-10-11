import 'react-native-gesture-handler'
import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCommonInfo, isValidPage, useQueryParams, exceptionCatch } from '@kit'
import { common } from '@config/common'
import { UrlProps } from '@type'
import { RoutesEnum, Pages } from './pages'
import { name as appName } from '../app.json'

if (!__DEV__) {
  exceptionCatch()
}

/**
 * 页面入口
 * @param props 客户端传入的参数
 * @constructor
 */
export default function App(props: UrlProps) {
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
  return <Pages initRouteName={finalInitRouteName} initParams={restProps} />
}
