import navigate from 'react-native-navigate'
import { useIsFirstRouteInParent } from './hooks'
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types'

enum RN_NATIVE_ROUTE {
  // goThreePage = 'https://ns.suning.com?snstoreTypeCode=2b1002&addId=000000000120874428_0000000000_b2b',//打开si级页
  goThreePage = 'https://ns.suning.com?snstoreTypeCode=2b1002&addId=', //打开si级页
  // goShopPage = 'https://ns.suning.com?snstoreTypeCode=1046&addId=0070824892',//打开店铺页面
  goShopPage = 'https://ns.suning.com?snstoreTypeCode=1046&addId=', //打开店铺页面
  goCart = 'https://ns.suning.com?snstoreTypeCode=7001', //购物车
  purchaseHistory = 'https://ns.suning.com?snstoreTypeCode=2502', //消费记录
  couponRecord = 'https://ns.suning.com?snstoreTypeCode=2503', //券记录
  login = 'https://ns.suning.com?snstoreTypeCode=1063', //登录页面
  arbitrageGoodsDetail = 'https://ns.suning.com?snstoreTypeCode=2056&addId=', //门店套购详情页
  changePrice = 'https://ns.suning.com?snstoreTypeCode=5011&addId=',
  custormPrice = 'https://ns.suning.com?snstoreTypeCode=5055&addId='
}

/**
 * 门店套购-端上详情页
 * @param params
 * storeCode 1-门店现货，2-平台配送
 */
export const arbitrageGoodsDetail = (params: {
  snCmmdtyCode: string
  supplierCode: string
  distributorCode: string
  storeType: string
}) => {
  try {
    console.log('rnpath', RN_NATIVE_ROUTE.arbitrageGoodsDetail)
    navigate.pushTo(
      `${RN_NATIVE_ROUTE.arbitrageGoodsDetail}${params.snCmmdtyCode}_${params.supplierCode}_${params.distributorCode}_${params.storeType}`
    )
  } catch (err) {}
}

/**
 * 门店套购-更改定价
 * @param params
 * flag 1-门店现货, 2-平台送货
 */
export const changePricing = (params: { cmmdtyCode: string; flag: string }) => {
  try {
    console.log('rnpath', RN_NATIVE_ROUTE.changePrice)
    navigate.pushTo(`${RN_NATIVE_ROUTE.changePrice}${params.cmmdtyCode}_${params.flag}`)
  } catch (err) {}
}
/**
 * C端挂牌价-自定义门店价格
 * cmmdtyCode
 */
export const customStorePrice = (cmmdtyCode: string) => {
  try {
    console.log('rnpath', `${RN_NATIVE_ROUTE.custormPrice}${cmmdtyCode}`)
    navigate.pushTo(`${RN_NATIVE_ROUTE.custormPrice}${cmmdtyCode}`)
  } catch (err) {}
}
/**
 * 跳转app登录页
 */
export const rn2Cart = () => {
  try {
    console.log('rnpath', RN_NATIVE_ROUTE.goCart)
    navigate.pushTo(RN_NATIVE_ROUTE.goCart)
  } catch (err) {}
}

/**
 * 消费记录
 */
export const rn2purchaseHistory = (phoneNumber: string) => {
  try {
    console.log('rnpath', RN_NATIVE_ROUTE.purchaseHistory + '&phoneNumber=' + phoneNumber)
    navigate.pushTo(RN_NATIVE_ROUTE.purchaseHistory + '&phoneNumber=' + phoneNumber)
  } catch (err) {}
}

/**
 * 券记录
 */
export const rn2couponRecord = () => {
  try {
    console.log('rnpath', RN_NATIVE_ROUTE.couponRecord)
    navigate.pushTo(RN_NATIVE_ROUTE.couponRecord)
  } catch (err) {}
}

/**
 * 跳转打开三级页
 */
export const rnGoThreePage = (param: { cmmdtyCode: string; distributorCode: string }) => {
  try {
    let rnPath = `${RN_NATIVE_ROUTE.goThreePage}${param.cmmdtyCode}_${param.distributorCode}_b2b`
    console.log('rnPath', rnPath)
    navigate.pushTo(rnPath)
  } catch (err) {}
}

/**
 * 跳转打开C店
 */
export const rnGoShopPage = (shopId: string) => {
  try {
    let rnPath = `${RN_NATIVE_ROUTE.goShopPage}${shopId}`
    console.log('rnPath', rnPath)
    navigate.pushTo(rnPath)
  } catch (err) {}
}

/**
 * 跳转app登录页
 */
export const rn2AppLogin = () => {
  try {
    navigate.pushTo(RN_NATIVE_ROUTE.login)
  } catch (err) {
    rnClose()
  }
}

/**
 * 通过原生打开rn
 * @param url
 */
export const rn2AppRn = (url: string) => {
  try {
    // navigate.pushTo(url)
    navigate.pushTo('native://cart')
  } catch (err) {}
}

/**
 * rn模块关闭，返回到app
 */
export const rnClose = () => {
  try {
    navigate.close()
  } catch (err) {}
}

/**
 * rn页面返回
 * @param navigation
 *
 * NavigationScreenProp<NavigationRoute<P>, P>
 */
export const rnBack = (navigation: NavigationProp<ReactNavigation.RootParamList>) => {
  if (useIsFirstRouteInParent()) {
    rnClose()
    return
  }
  navigation.goBack()
}
