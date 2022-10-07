import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import UnKnowPage from '@pages/unknow-page'
import UserSetting from '@pages/user-settting'
import Waterfall from '@pages/waterfall-list'

export enum RoutesEnum {
  UnKnowPage = 'UnKnowPage',
  UserSetting = 'UserSetting',
  Waterfall = 'Waterfall'
}

export const Pages = (props: PageProps) => {
  const { finalInitRouteName, initParams = {} } = props

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={finalInitRouteName} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RoutesEnum.UnKnowPage} component={UnKnowPage} initialParams={initParams} />
        <Stack.Screen name={RoutesEnum.UserSetting} component={UserSetting} initialParams={initParams} />
        <Stack.Screen name={RoutesEnum.Waterfall} component={Waterfall} initialParams={initParams} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export type PageProps = {
  finalInitRouteName: string
  initParams: { [key: string]: any }
}
