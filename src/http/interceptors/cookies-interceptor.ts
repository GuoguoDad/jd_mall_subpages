import { AxiosRequestInterceptor } from './types'
import { cookies } from '@config/cookies'

export const CookiesInjectRequestInterceptor: AxiosRequestInterceptor = [
  async req => {
    let cookieStr = cookies.currentValue

    if (cookieStr) {
      // @ts-ignore
      req.headers.cookie = cookieStr
    }
    return req
  },
  error => {
    __DEV__ && console.warn('axios error', error)
    return Promise.reject(error)
  }
]
