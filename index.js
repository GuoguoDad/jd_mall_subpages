/**
 * @format
 */
import { AppRegistry, LogBox } from 'react-native'
import { name as appName } from './app.json'
import App from './src/index'

AppRegistry.registerComponent(appName, () => {
  LogBox.ignoreAllLogs()
  return App
})
