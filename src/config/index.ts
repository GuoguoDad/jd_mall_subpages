import { IConfig } from '@type'
import { DevEnv } from '../../.env'
import { appEnv } from './env'
import { DevConfig } from './index.dev'
import { ConfigPrd } from './index.prd'
import { ConfigPreXZ } from './index.prexz'
import { ConfigSit } from './index.sit'

export type EnvHost = Record<string, IConfig>
export class HostConfig {
  private envHost: EnvHost = {
    dev: DevConfig,
    sit: ConfigSit,
    pre: ConfigPreXZ,
    prd: ConfigPrd
  }
  get config(): IConfig {
    return this.envHost[appEnv.currentEnv]
  }

  get devEnv(): string {
    return DevEnv
  }
}

export const Host = new HostConfig()
