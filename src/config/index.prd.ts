import { RnConfig } from '../../.env'
import { IConfig } from './types'

export class Config implements IConfig {
  BASE_URL = 'https://lsysearch.suning.com'
  RN_DEFAULT = RnConfig
}
export const ConfigPrd = new Config()
