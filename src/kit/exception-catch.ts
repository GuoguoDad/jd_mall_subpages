import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler'

export function exceptionCatch() {
  setJSExceptionHandler(err => {
    console.log('js err:', err)
  }, true)

  setNativeExceptionHandler(err => {
    console.log('native err:', err)
  }, false)
}
