import { AxiosResponse } from 'axios'
import { AxiosInterceptor } from './types'
import { BaseResponse } from '../response'

export const ResponseLogInterceptor: AxiosInterceptor<AxiosResponse<BaseResponse<any>>> = [
  // @ts-ignore
  res => {
    console.log(`request url is ${res.config.url}`)
    console.log('request body is', res.config.data)
    console.log('response', res)
    return res
  },
  error => {
    if (error.request) {
      console.warn('.....................................................')
      console.warn('response interceptor error and request:', error.request)
      console.warn('response interceptor error and url is', error.request.responseURL)
      console.warn('response interceptor error and error is', error)
      console.warn('response interceptor error and response:', error.response)
      console.warn('.....................................................')
    }
    return Promise.reject(error)
  }
]
