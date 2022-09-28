import { AxiosResponse } from 'axios'
import { isSuccessCode } from '@kit'
import { Toast } from '@comps'
import { AxiosInterceptor } from './types'
import { BaseResponse } from '../response'

export const ErrorResponseInterceptor: AxiosInterceptor<AxiosResponse<BaseResponse<any>>> = [
  // @ts-ignore
  res => {
    if (!isSuccessCode(res.data?.code) && !res.config.url?.includes('ids/needVerifyCode')) {
      const { msg = '服务异常,请稍后重试!' } = res?.data
      Toast.fail(msg)
      return Promise.reject(res.data.msg)
    }
    return res
  },
  err => {
    if (err.response) {
      const { msg = '服务异常,请稍后重试' } = err.response?.data
      Toast.fail(msg)
    }
    return Promise.reject(err)
  }
]
