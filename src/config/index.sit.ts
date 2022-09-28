import { IConfig } from './types'
import { SNENV } from '@config/utils'

export class Config implements IConfig {
  BASE_URL = 'https://cvssfmspfsit.cnsuning.com'
  REPORT_URL = 'https://lsyreportsit.cnsuning.com'
  LSY_BOSS_URL = 'https://lsybossapisit.cnsuning.com'
  CART_URL = 'https://lsycartapisit.cnsuning.com'
  XTCS_BASE_URL = 'https://xtcssit.cnsuning.com'
  SNNET_BASE_URL = 'https://10035pre.cnsuning.com'
  CMS_BASE_URL = 'https://libsit.cnsuning.com'
  CDOSS_BASE_URL = 'http://cdosssit.cnsuning.com'
  PASSPROT_BASE_URL = 'https://passportsit.cnsuning.com'
  PASSPORT = {
    LOGIN_URL: 'https://passportsit.cnsuning.com/ids/login',
    LOGOUT_URL: 'https://passportsit.cnsuning.com/ids/logout',
    AUTH_STATUS_URL: 'https://mysit.cnsuning.com/authStatus',
    AUTH_URL: '',
    LOGIN_THEME: 'wap_new'
  }
  RSA_PUBLIC_KEY =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCg5GY06W8u7Xj5gxlz0VgDchu1NMHCG34RVuJmOVKRnkelMmfXviUxAsn0Nv+Vg7vI4BNGHoIuidxmfQ5CODk77/S1gslWlDLCHLoO1M7cSHwAo42oxdz4cjfnHEkPfCj8Dne2yGL6ZQKMGZaBUlEvv3yoUXjRU+L8hRlXIA9gTQIDAQAB'
  RN_DEFAULT = {
    storeCode: '59021',
    snCustNum: '7018002212',
    initRouteUrl: 'https://ns.suning.com/?storeTypeCode=lsyrn&bundleName=coupon-goods&initRouteName=ArbitrageClound',
    env: SNENV.PREXZ,
    appkey: 'fmcg;3.2.0;214',
    cookieObj: `hm_guid=5907dff0-875a-4a6f-8b4e-c82ece0df965; _df_ud=f4d9e56b-fc17-4fa0-a953-cd4a08f45d9f; experimentation_subject_id=IjAwYjU4OTAzLTQ4MjUtNDE0NC04MmVjLThkMWI5N2M4ODIxNiI%3D--8d464637d3d4294d0425ceaf10560a5a3d40a46d; iar_sncd=0; SN_CITY=10_010_1000000_9017_01_10106_2_0; cityCode=010; districtId=10106; cityId=9017; tradeMA=177; sncnstr=udDBatVydwFo0YrZrun2AQ%3D%3D; _snvd=1648453748192bSaxoADIAc0; isso_ld=true; isso_us=20020013; _snsr=direct%7Cdirect%7C%7C%7C; _snma=1%7C164152254221671011%7C1641522542216%7C1648621115264%7C1649756770921%7C2688%7C41; _snmp=164975677071745092; _snmb=164975677092382740%7C1649756770926%7C1649756770923%7C1; token=baa092b5-9d8f-4e6c-8460-79c7a0ccc5e7; ecologyLevel=ML100100; idsLoginUserIdLastTime=; logonStatus=0; nick=129******07; nick2=129******07; _snck=164975678238254976; custno=7017963441; authId=siPdAhghn48Wip8ZqGAhqITs8W01JDAfQh; secureToken=3D477531EE88CD6511474F251B1B540A; ssotbrd=TGT0vdUF0n77TRlrKlz3CjqipMPzsbLm3TtxkSmIBuW`,
    authId: 'sim1tSYApCY8LMUueY6QSprLqHjqEu0x5N',
    cityCode: '025',
    districtCode: '03',
    townCode: '03',
    extParams:
      '{"couponInfo":"{\\"status\\":\\"2\\",\\"voucherType\\":\\"2\\",\\"amount\\":\\"50.00\\",\\"endTime\\":\\"2021-08-28 23:59:59\\",\\"detailNo\\":\\"1202201191000173790\\",\\"voucherDiscount\\":\\"6.1\\",\\"leftAmount\\":\\"50.00\\",\\"fullDeduction\\":\\"U6ee1200U7528Uff0cU6700U9ad8U51cf50U5143\\",\\"voucherNo\\":\\"60042001628058\\",\\"voucherDesc\\":\\"U5546U5bb6111U54c1U7c7bU90e8U5206U5546U54c1U4f7fU7528\\",\\"startTime\\":\\"2021-08-23 10:00:00\\"}"}'
  }
}
export const ConfigSit = new Config()
