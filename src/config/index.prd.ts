import { IConfig } from './types'
import { SNENV } from '@config/utils'

export class Config implements IConfig {
  BASE_URL = 'https://lsysearch.suning.com'
  REPORT_URL = 'https://lsyreport.suning.com'
  LSY_BOSS_URL = 'https://lsybossapi.suning.com'
  CART_URL = 'https://lsycartapi.suning.com'
  XTCS_BASE_URL = 'https://xtcs.suning.com'
  SNNET_BASE_URL = 'https://10035.suning.com'
  CMS_BASE_URL = 'https://lib.suning.com'
  CDOSS_BASE_URL = 'https://cdoss.suning.com'
  PASSPROT_BASE_URL = 'https://passport.cnsuning.com'
  PASSPORT = {
    LOGIN_URL: 'https://passport.suning.com/ids/login',
    LOGOUT_URL: 'https://passport.suning.com/ids/logout',
    AUTH_STATUS_URL: 'https://loginst.suning.com/authStatus',
    AUTH_URL: '',
    LOGIN_THEME: 'wap_new'
  }
  RSA_PUBLIC_KEY =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQComqoAyvbCqO1EGsADwfNTWFQIUbm8CLdeb9TgjGLcz95mAo204SqTYdSEUxFsOnPfROOTxhkhfjbRxBV4/xjS06Y+kkUdiMGFtABIxRQHQIh0LrVvEZQs4NrixxcPI+b1bpE0gO/GAFSNWm9ejhZGj7UnqiHphnSJAVQNz2lgowIDAQAB'
  RN_DEFAULT = {
    storeCode: '00001',
    initRouteUrl: 'https://ns.suning.com/?storeTypeCode=1027&bundleName=coupon-goods&initRouteName=CouponGoods',
    env: SNENV.PRD,
    appkey: 'fmcg;3.2.0;214',
    cookieObj: `_device_session_id=p_2f7fdc7b-12e3-4a39-aecf-558221f9c6f4; hm_guid=8c78ab00-f84f-4f28-800c-7639224305f7; _df_ud=1ecd0e74-13d8-444e-809e-45b494e6b0cf; iar_sncd=0; streetCode=0250199; cityCode=025; districtId=11365; cityId=9173; isScale=false; SN_CITY=100_025_1000173_9173_01_11365_1_1_99_0250199; iar_low=0; _cp_dt=6d28e4f2-80c7-442b-9f34-56ae0a3a39d3-02732; route=b392b5563d7dc8bd72857cc7fe4bb024; tradeMA=194; custLevel=161000000110; ecologyLevel=ML100103; _snms=164068526681777240; totalProdQty=2; _snmc=1; _snsr=direct%7Cdirect%7C%7C%7C; _snma=1%7C163039588375662645%7C1630395883756%7C1642591431504%7C1645146508382%7C141%7C45; _snmp=164514650752118273; _snmb=164514650839952730%7C1645146508423%7C1645146508399%7C1; token=3f55b829-fae8-41ce-a413-be750595fd60; _snzwt=TH7akf17f0a5f8e669GICceb7; authId=siH7lyRkNVyp023FOWAetVYAJEqHvbkw3E; secureToken=930C8ABF663452D375F579115BCEE25D; custno=6195348674; idsLoginUserIdLastTime=; logonStatus=0; nick=%E8%91%A3%E6%9D%B0dj...; nick2=%E8%91%A3%E6%9D%B0dj...; sncnstr=sU4LHaYcaXq5Ftp6gr6QHw%3D%3D; ssotbrd=TGTUwsQ9aExtUzskvhlCozqdTX6qI01G2oBG2MOAeI9; _snck=164514653401021334; _snvd=1645146507311nbyu4XiN89a`,
    authId: 'siH7lyRkNVyp023FOWAetVYAJEqHvbkw3E',
    cityCode: '025',
    districtCode: '03',
    townCode: '03',
    provCode: '100',
    extParams:
      '{"couponInfo":"{\\"status\\":\\"2\\",\\"voucherType\\":\\"2\\",\\"amount\\":\\"50.00\\",\\"endTime\\":\\"2021-08-28 23:59:59\\",\\"detailNo\\":\\"1202202161004074453\\",\\"voucherDiscount\\":\\"6.1\\",\\"leftAmount\\":\\"50.00\\",\\"fullDeduction\\":\\"U6ee1200U7528Uff0cU6700U9ad8U51cf50U5143\\",\\"voucherNo\\":\\"60042001628058\\",\\"voucherDesc\\":\\"U5546U5bb6111U54c1U7c7bU90e8U5206U5546U54c1U4f7fU7528\\",\\"startTime\\":\\"2021-08-23 10:00:00\\"}"}'
  }
}
export const ConfigPrd = new Config()
