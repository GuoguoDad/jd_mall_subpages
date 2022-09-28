import axios, { AxiosRequestConfig } from 'axios'
import { BaseResponse } from './response'
import { AuthInterceptor } from './interceptors/auth-intereceptor'
import { ErrorResponseInterceptor } from './interceptors/error-response-interceptor'
import { CookiesInjectRequestInterceptor } from './interceptors/cookies-interceptor'
import { ResponseLogInterceptor } from './interceptors/response-log-interceptor'

const instance = axios.create()
// @ts-ignore
instance.defaults.headers['Content-Type'] = 'application/json'
// @ts-ignore
instance.defaults.headers.Accept = 'application/json'
instance.defaults.withCredentials = true
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers.post['Access-Control-Allow-Credentials'] = true

if (__DEV__) {
  instance.interceptors.response.use(...ResponseLogInterceptor)
}
instance.interceptors.response.use(...AuthInterceptor)
instance.interceptors.response.use(...ErrorResponseInterceptor)
instance.interceptors.request.use(...CookiesInjectRequestInterceptor)

const Fetch = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => {
    return instance.get<BaseResponse<T>>(url, { ...config }).then(res => res.data)
  },
  post: <T = any>(url: string, data: any = {}, config?: AxiosRequestConfig) => {
    return instance.post<BaseResponse<T>>(url, data, { ...config }).then(res => res.data)
  },
  request: <T = any>(config: AxiosRequestConfig) => instance.request<BaseResponse<T>>({ ...config })
}

export default Fetch
