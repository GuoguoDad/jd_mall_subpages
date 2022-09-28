type ValueInfo = {
  currentScreen: string
  initRouteName: string
}

export class Screen {
  get currentValue(): ValueInfo {
    return this._screen
  }

  set currentValue(value: ValueInfo) {
    __DEV__ && console.log('screen is change to', value)
    this._screen = value
  }

  private _screen: ValueInfo = {
    currentScreen: '',
    initRouteName: ''
  }
}

export const screen = new Screen()
