export class BundleEnv {
  get currentValue(): BundleEnvEnum {
    return this._env
  }

  set currentValue(value: BundleEnvEnum) {
    __DEV__ && console.log('bundle env is change to', value)
    this._env = value
  }

  private _env: BundleEnvEnum = BundleEnvEnum.APP
}

export enum BundleEnvEnum {
  LOCAL = 'LOCAL',
  APP = 'APP'
}

export const bundleEnv = new BundleEnv()
