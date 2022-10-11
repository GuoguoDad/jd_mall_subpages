import React, { useMemo } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PortalProvider } from '@comps'
import { store } from '@store'

import UnKnowPage from '@pages/unknow-page'
import UserSetting from '@pages/user-settting'
import Waterfall from '@pages/waterfall-list'

export enum RoutesEnum {
  UnKnowPage = 'UnKnowPage',
  UserSetting = 'UserSetting',
  Waterfall = 'Waterfall'
}

const Stack = createStackNavigator()

export const Pages = (props: PageProps) => {
  const { initRouteName, initParams } = props

  const StackApp = useMemo(
    () => (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initRouteName} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={RoutesEnum.UnKnowPage} component={UnKnowPage} initialParams={initParams} />
          <Stack.Screen name={RoutesEnum.UserSetting} component={UserSetting} initialParams={initParams} />
          <Stack.Screen name={RoutesEnum.Waterfall} component={Waterfall} initialParams={initParams} />
        </Stack.Navigator>
      </NavigationContainer>
    ),
    [initRouteName]
  )

  return (
    <ReduxProvider store={store}>
      <PortalProvider>{StackApp}</PortalProvider>
    </ReduxProvider>
  )
}

export type PageProps = {
  initRouteName: string
  initParams: { [key: string]: any }
}
