import { RnConfig } from '../../.env'
import { IConfig } from './types'

export class Config implements IConfig {
  BASE_URL = 'https://cvssfmspfsit.cnsuning.com'
  RN_DEFAULT = RnConfig
}
export const ConfigSit = new Config()
