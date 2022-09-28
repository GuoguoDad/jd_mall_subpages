import { ConfigDev } from './index.dev'
import { ConfigSit } from './index.sit'
import { ConfigPrd } from './index.prd'
import { ConfigPreXG } from './index.prexg'
import { ConfigPreXZ } from './index.prexz'
import { appEnv } from './env'
import { IConfig } from './types'

export type EnvHost = Record<string, IConfig>
export class HostConfig {
  private envHost: EnvHost = {
    dev: ConfigDev,
    sit: ConfigSit,
    prexz: ConfigPreXZ,
    prexg: ConfigPreXG,
    pre: ConfigPreXZ,
    prd: ConfigPrd
  }
  get config(): IConfig {
    return this.envHost[appEnv.currentEnv]
  }
}

export const Host = new HostConfig()
