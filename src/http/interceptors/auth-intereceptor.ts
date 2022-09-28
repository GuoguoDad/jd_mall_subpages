import { AxiosResponse } from 'axios'
import { hasPassport2LoginFlag, rn2AppLogin } from '@kit'
import { Toast } from '@comps'
import { BaseResponse } from '../response'
import { AxiosInterceptor } from './types'

export const AuthInterceptor: AxiosInterceptor<AxiosResponse<BaseResponse<unknown>>> = [
  // @ts-ignore
  async res => {
    const { headers } = res
    if (headers && hasPassport2LoginFlag(headers)) {
      __DEV__ && console.warn('-----------登录超时-----------')
      Toast.show('登录超时')
      rn2AppLogin()
      return Promise.reject('cookie expired')
    }
    return res
  }
]
