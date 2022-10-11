// @ts-ignore
import qs from 'qs'
import { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { isAndroid } from './util'

/**
 * 解析链接携带的参数
 * @param url
 */
export function useQueryParams<QueryParams extends { [K in keyof QueryParams]?: unknown } = {}>(
  url: string
): QueryParams {
  const query = qs.parse(url, { ignoreQueryPrefix: true })
  return query as QueryParams
}

/**
 * 单位时间内执行第一次
 */
export const useCallOnceInInterval = () => {
  let isCalled = false
  return (functionTobeCalled: Function, interval = 800) => {
    if (!isCalled) {
      isCalled = true
      let timer = setTimeout(() => {
        isCalled = false
        clearTimeout(timer)
      }, interval)
      return functionTobeCalled()
    }
  }
}

/**
 * 监听安卓返回键
 * @param fn
 */
export const useAndroidBackHandler = (fn: () => any) => {
  useEffect(() => {
    if (isAndroid()) {
      BackHandler.addEventListener('hardwareBackPress', fn)
    }
    return () => {
      if (isAndroid()) {
        BackHandler.removeEventListener('hardwareBackPress', fn)
      }
    }
  }, [fn])
}
