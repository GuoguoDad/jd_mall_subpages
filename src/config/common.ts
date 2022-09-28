export class Common {
  get currentValue(): ICommon {
    return this._value
  }

  set currentValue(value: ICommon) {
    __DEV__ && console.log('Common is change to', value)
    this._value = value
  }

  private _value: ICommon = {
    statusBarHeight: 0,
    bottomSpace: 0
  }
}

export const common = new Common()

type ICommon = {
  /**
   * 状态栏高度
   */
  statusBarHeight: number
  /**
   * 手机底部距离
   */
  bottomSpace: number
}
