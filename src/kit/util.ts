import { Dimensions, NativeModules, Platform, StatusBar } from 'react-native'
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper'
import { RoutesEnum } from '../pages'

const { StatusBarManager } = NativeModules

/**
 * 判断是否ios
 */
export const isIOS = () => Platform.OS === 'ios'

/**
 * 判断是否android
 */
export const isAndroid = () => Platform.OS === 'android'

/**
 * 屏幕宽度
 */
export const screenWidth = Dimensions.get('window').width

/**
 * 屏幕高度
 */
export const screenHeight = Dimensions.get('window').height

// UI给图比例大小
const DEFAULT_WIDTH_PX = 750

/**
 * px 转 dp
 * @param px
 */
export const px2Dp = (px: number) => (px * screenWidth) / DEFAULT_WIDTH_PX

/**
 * 获取手机状态栏高度
 */
export const getStatusBarHeight = (): Promise<number> => {
  return new Promise(resolve => {
    if (isAndroid()) {
      resolve(StatusBar?.currentHeight || 0)
    } else if (isIOS()) {
      StatusBarManager.getHeight((res: { height: number }) => {
        resolve(res.height)
      })
    } else {
      resolve(0)
    }
  })
}

/**
 * 获取iPhoneX等系列手机底部距离
 */
export const getIphoneBottomSpace = () => getBottomSpace()

/**
 * 判断是否是iPhone X刘海屏
 */
export const isIphoneXScreen = () => isIphoneX()

/**
 * https链接转http链接
 * @param url
 */
export const httpsToHttp = (url: string) => {
  return url.replace(/^https/, 'http')
}

/**
 * http链接转https链接
 * @param url
 */
export const httpToHttps = (url: string) => {
  if (url.includes('https')) {
    return url
  }
  return url.replace(/^http/, 'https')
}

/**
 * parseCookie
 * @param obj
 */
export const parseCookie = (obj: any) => {
  let ret = ''
  Object.keys(obj).forEach(key => {
    ret += `${key}=${obj[key]}; `
  })
  return ret
}

/**
 * 转json
 * @param str
 * @constructor
 */
export const JSONParse = (str: string) => {
  let result = []
  try {
    result = JSON.parse(str)
  } catch (e) {
    console.warn(e)
  }
  return result
}

/**
 * 转换客户端传入的cookie 信息
 * @param list
 */
export const parseArrayCookie = (list: Array<{ [key: string]: string }>) => {
  let str = ''
  list.forEach(v => {
    str = str.concat(`${v.name}=${v.value};`)
  })
  return str
}

/**
 * 请求返回值是否成功
 * @param code
 */
export const isSuccessCode = (code: string | number) => ['000000', '0000', '1', 0].includes(code)

/**
 * 判断是否需要重定向
 * @param headers
 */
export const hasPassport2LoginFlag = (headers: object) => {
  return (
    typeof headers === 'object' &&
    headers !== null &&
    'passport.login.flag' in headers &&
    // @ts-ignore
    headers['passport.login.flag'] === 'true'
  )
}

/**
 * cookieStr2Obj
 * @param str
 */
export const cookieStr2Obj = (str: string) => {
  let obj: { [key: string]: string } = {}
  const items = str.split(';')
  items.forEach(v => {
    const item = v.split('=')
    obj[item[0]] = item[1] || ''
  })
  return obj
}

/**
 * 判断是否是有效页面
 * @param routes
 * @param name
 */
export const isValidPage = (routes: typeof RoutesEnum, name: string) => {
  const pages = Object.keys(routes).filter(v => v === name)
  return pages && pages.length
}

/**
 * 页面显示前调用获取公共属性
 */
export const getCommonInfo = async () => {
  const statusBarHeight = await getStatusBarHeight()
  const bottomSpace = getBottomSpace()

  return { statusBarHeight, bottomSpace }
}

/**
 * sleep n 毫秒
 * @param wait
 */
export const useDelay = (wait = 500) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, wait)
  })
}

/**
 * 手机号码加****
 * 13851861590 -> 138****1590
 */
export const fuzzyMobile = (mobile = ''): string => {
  const reg = /(\d{3})\d{4}(\d{4})/
  mobile = typeof mobile !== 'string' ? '' : mobile
  return mobile.replace(reg, '$1****$2')
}

/**
 * 昵称加****
 * @param nickName
 */
export const fuzzyNickName = (nickName: string = '') => {
  if (nickName && nickName.length > 2) {
    return nickName.replace(/^(.).*(.)$/, '$1****$2')
  }
  if (nickName && nickName.length > 1) {
    return nickName.replace(/^(.).*$/, '$1****')
  }
  return nickName
}

/**
 * 格式化金额，保留2位小数
 * @param value
 */
export const formatMoney = (value: string) => {
  if (value) {
    let newValue = (Math.round(parseFloat(value) * 100) / 100).toString()
    const s = newValue.split('.')
    if (s.length === 1) {
      newValue += '.00'
      return newValue
    }
    if (s.length > 1) {
      if (s[1].length < 2) {
        newValue += '0'
      }
      return newValue
    }
  }
}
