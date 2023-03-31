/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'
import App from './src/index'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => {
  LogBox.ignoreAllLogs()
  return App
})
