export interface IConfig {
  /** base url 搜索search */
  BASE_URL: string
  RN_DEFAULT: {
    initRouteUrl?: string
    cookieObj: string
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
