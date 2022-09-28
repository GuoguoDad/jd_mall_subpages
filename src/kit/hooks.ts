// @ts-ignore
import qs from 'qs'
import { screen } from '@config/screen'
import { useNavigationState, useRoute } from '@react-navigation/native'

export const useIsFirstRouteInParent = () => {
  const route = useRoute()
  const isFirstRouteInParent = useNavigationState(state => state.routes[0].key === route.key)

  return isFirstRouteInParent
}

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
