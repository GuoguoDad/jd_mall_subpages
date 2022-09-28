import { SNENV } from '@config/utils'

export class Env {
  get currentEnv(): string {
    return this._pEnv
  }

  set currentEnv(value: string) {
    __DEV__ && console.log('env is change to', value)
    this._pEnv = value
  }

  private _pEnv: string = SNENV.PRD.toString()

  static getEnvList(): string[] {
    return [SNENV.DEV, SNENV.PREXG, SNENV.PREXZ, SNENV.PRD]
  }

  public getEnvList() {
    return Env.getEnvList()
  }
}

export const appEnv = new Env()
