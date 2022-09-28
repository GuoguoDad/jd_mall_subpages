import { IConfig } from './types'
import { SNENV } from '@config/utils'

export class Config implements IConfig {
  BASE_URL = 'https://lsysearchprexz.cnsuning.com'
  REPORT_URL = 'https://lsyreportpre.cnsuning.com'
  LSY_BOSS_URL = 'https://lsybossxzpre.cnsuning.com'
  CART_URL = 'https://lsycartapiprexz.cnsuning.com'
  XTCS_BASE_URL = 'https://xtcspre.cnsuning.com'
  SNNET_BASE_URL = 'https://10035pre.cnsuning.com'
  CMS_BASE_URL = 'https://libpre.cnsuning.com'
  CDOSS_BASE_URL = 'http://cdosspre.cnsuning.com'
  PASSPROT_BASE_URL = 'https://passportpre.cnsuning.com'
  PASSPORT = {
    LOGIN_URL: 'https://passportpre.suning.com/ids/login',
    LOGOUT_URL: 'https://passportpre.cnsuning.com/ids/logout',
    AUTH_STATUS_URL: 'https://loginstpre.cnsuning.com/authStatus',
    AUTH_URL: '',
    LOGIN_THEME: 'wap_new'
  }
  RSA_PUBLIC_KEY =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCg5GY06W8u7Xj5gxlz0VgDchu1NMHCG34RVuJmOVKRnkelMmfXviUxAsn0Nv+Vg7vI4BNGHoIuidxmfQ5CODk77/S1gslWlDLCHLoO1M7cSHwAo42oxdz4cjfnHEkPfCj8Dne2yGL6ZQKMGZaBUlEvv3yoUXjRU+L8hRlXIA9gTQIDAQAB'
  RN_DEFAULT = {
    storeCode: '59021',
    snCustNum: '7018002212',
    initRouteUrl: 'https://ns.suning.com?storeTypeCode=lsyrn&bundleName=coupon-goods&initRouteName=ArbitrageClound',
    env: SNENV.PREXZ,
    appkey: 'fmcg;3.2.0;214',
    cookieObj:
      'hm_guid=5907dff0-875a-4a6f-8b4e-c82ece0df965; _df_ud=f4d9e56b-fc17-4fa0-a953-cd4a08f45d9f; experimentation_subject_id=IjAwYjU4OTAzLTQ4MjUtNDE0NC04MmVjLThkMWI5N2M4ODIxNiI%3D--8d464637d3d4294d0425ceaf10560a5a3d40a46d; iar_sncd=0; SN_CITY=10_010_1000000_9017_01_10106_2_0; cityCode=010; districtId=10106; cityId=9017; isso_ld=true; isso_us=20020013; _snma=1%7C164152254221671011%7C1641522542216%7C1650766833781%7C1650767313379%7C2692%7C44; tradeMA=177; logonStatus=0; nick=129******07; nick2=129******07; sncnstr=udDBatVydwFo0YrZrun2AQ%3D%3D; _snvd=16503348885755jJplkrl/Ui; authId=siTrl1vdoB1014AeAfKJl09aypLMH6vbcR; secureToken=DE6374B4EB67243E4A6E6D1566509EFB; custno=7017963441; ecologyLevel=ML100100; idsLoginUserIdLastTime=; ssotbrd=TGTV07UV1KHSnsQeWRj5KMQBi16H6hlzqF09aeYTqOY; _snmb=165102305020928190%7C%7C1651023050209%7C0',
    authId: 'sim1tSYApCY8LMUueY6QSprLqHjqEu0x5N',
    cityCode: '025',
    districtCode: '03',
    townCode: '03',
    extParams:
      '{"couponInfo":"{\\"status\\":\\"2\\",\\"voucherType\\":\\"2\\",\\"amount\\":\\"50.00\\",\\"endTime\\":\\"2021-08-28 23:59:59\\",\\"detailNo\\":\\"1202201191000173790\\",\\"voucherDiscount\\":\\"6.1\\",\\"leftAmount\\":\\"50.00\\",\\"fullDeduction\\":\\"U6ee1200U7528Uff0cU6700U9ad8U51cf50U5143\\",\\"voucherNo\\":\\"60042001628058\\",\\"voucherDesc\\":\\"U5546U5bb6111U54c1U7c7bU90e8U5206U5546U54c1U4f7fU7528\\",\\"startTime\\":\\"2021-08-23 10:00:00\\"}"}'
  }
}
export const ConfigPreXZ = new Config()
