import { RnConfig } from '../../.env'
import { IConfig } from './types'

export class Config implements IConfig {
  BASE_URL = 'http://127.0.0.1:8090'
  RN_DEFAULT = RnConfig
}
export const DevConfig = new Config()
