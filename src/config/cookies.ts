export class Cookies {
  get currentValue(): string {
    return this._cookies
  }

  set currentValue(value: string) {
    __DEV__ && console.log('cookies is change to', value)
    this._cookies = value
  }

  private _cookies: string = ''
}

export const cookies = new Cookies()
