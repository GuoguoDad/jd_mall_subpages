export interface IConfig {
  /** base url 搜索search */
  BASE_URL: string
  REPORT_URL: string
  LSY_BOSS_URL: string
  /** 购物车 */
  CART_URL: string
  /** 苏小团前台接口合并系统(XTCS) 接口地址，如"https://xtcs.suning.com" */
  XTCS_BASE_URL: string
  /** 苏宁互联网上营业厅系统(SNNET) 接口地址，如"https://10035.suning.com" */
  SNNET_BASE_URL: string
  /** CMS 接口地址，如"https://lib.suning.com" */
  CMS_BASE_URL: string
  /** CDOSS 系统地址，如"cdoss.suning.com" */
  CDOSS_BASE_URL: string
  /** 易购 passport 相关配置 */
  PASSPROT_BASE_URL: string
  PASSPORT: {
    /** 易购登录接口地址，如"https://passport.suning.com/ids/login" */
    LOGIN_URL: string
    /** 易购退出登录接口地址，如"https://passport.suning.com/ids/logout" */
    LOGOUT_URL: string
    /** 登录 authStatus 查询接口，如"https://loginst.suning.com/authStatus" */
    AUTH_STATUS_URL: string
    /** 登录 auth 接口，如"https://loginst.suning.com/msi-web/auth" */
    AUTH_URL: string
    /** 登录页 主题 */
    LOGIN_THEME: string
  }
  /** RAS加密公钥 */
  RSA_PUBLIC_KEY: string
  RN_DEFAULT: {
    initRouteUrl?: string
    appkey?: string
    storeCode: string
    env: string
    cookieObj: string
    authId: string
    cityCode: string
    extParams?: string
    snCustNum?: string
    districtCode: string
    townCode: string
  }
}

export type IExtParams = {
  couponInfo: string
}

export type ICouponInfo = {
  amount: string
  detailNo: string
  endTime: string
  fullDeduction: string
  leftAmount: string
  startTime: string
  status: number
  voucherDesc: string
  voucherDiscount: string
  voucherNo: string
  voucherType: string | number
}

export type ScreenProps = {
  storeCode: string
  appkey: string
  cityCode: string
  [key: string]: string
}

export type UrlProps = {
  initRouteName: string
  [key: string]: string
}

export type AppProps = {
  env: string
  storeCode: string
  /**
   * bundleName 为多bundle预留参数,initRouteName必传，其他参数根据业务添加
   *
   * https://ns.suning.com?storeTypeCode=lsyrn&bundleName=coupon-goods&initRouteName=${RoutesEnum.CouponGoods}
   */
  initRouteUrl?: string
  appkey: string
  cookieObj: string
  authId: string
  cityCode: string
  districtCode: string
  townCode: string
  extParams?: string
  snCustNum?: string
}

export type AppState = {
  isEnvInit: boolean
  accountInfo: AccountInfo
}

export type AccountInfo = {
  cookies: string
  storeCode: string
}

export type WithScreenProps<P> = P & { screenProps: ScreenProps }

export type Nil = null | undefined

export type MayBeNil<T> = Nil | T
