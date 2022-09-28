import { IConfig } from './types'
import { SNENV } from '@config/utils'

export class Config implements IConfig {
  BASE_URL = 'http://127.0.0.1:8090'
  REPORT_URL = 'http://127.0.0.1:8090'
  CART_URL = 'http://127.0.0.1:8090'
  LSY_BOSS_URL = 'http://127.0.0.1:8090'
  XTCS_BASE_URL = 'http://localhost:8090'
  SNNET_BASE_URL = 'http://localhost:8090'
  CMS_BASE_URL = 'https://libpre.cnsuning.com'
  CDOSS_BASE_URL = 'https://cdosspre.cnsuning.com'
  PASSPROT_BASE_URL = 'https://passportsit.cnsuning.com'
  PASSPORT = {
    LOGIN_URL: 'https://passportsit.suning.com/ids/login',
    LOGOUT_URL: 'https://passportsit.cnsuning.com/ids/logout',
    AUTH_STATUS_URL: 'https://mysit.cnsuning.com/authStatus',
    AUTH_URL: '',
    LOGIN_THEME: 'wap_new'
  }
  RSA_PUBLIC_KEY =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCg5GY06W8u7Xj5gxlz0VgDchu1NMHCG34RVuJmOVKRnkelMmfXviUxAsn0Nv+Vg7vI4BNGHoIuidxmfQ5CODk77/S1gslWlDLCHLoO1M7cSHwAo42oxdz4cjfnHEkPfCj8Dne2yGL6ZQKMGZaBUlEvv3yoUXjRU+L8hRlXIA9gTQIDAQAB'
  RN_DEFAULT = {
    storeCode: '04036',
    snCustNum: '7018002212',
    initRouteUrl: 'https://ns.suning.com/?storeTypeCode=lysrn&bundleName=coupon-goods&initRouteName=ArbitrageClound',
    env: SNENV.DEV,
    appkey: 'fmcg;3.2.0;214',
    cookieObj: ``,
    authId: '',
    cityCode: '025',
    districtCode: '03',
    townCode: '03',
    extParams:
      '{"couponInfo":"{\\"status\\":\\"2\\",\\"voucherType\\":\\"2\\",\\"amount\\":\\"50.00\\",\\"endTime\\":\\"2021-08-28 23:59:59\\",\\"detailNo\\":\\"1202108201000167131\\",\\"voucherDiscount\\":\\"6.1\\",\\"leftAmount\\":\\"50.00\\",\\"fullDeduction\\":\\"U6ee1200U7528Uff0cU6700U9ad8U51cf50U5143\\",\\"voucherNo\\":\\"60042001628058\\",\\"voucherDesc\\":\\"U5546U5bb6111U54c1U7c7bU90e8U5206U5546U54c1U4f7fU7528\\",\\"startTime\\":\\"2021-08-23 10:00:00\\"}"}',
  }
}
export const ConfigDev = new Config()
