export enum AppType {
  /**
   * 表示小店掌柜app
   */
  fmcg = 'fmcg',
  /**
   * 表示家乐福app
   */
  carrefour = 'carrefour'
}

/**
 * 事件枚举
 */
export enum MsgEnum {
  cartNum = 'SellingListCartNum',
  list2top = 'List2Top'
}

/**
 * 标题栏状态枚举
 * 1-透明模式  2-白色模式
 */
export enum HeaderThemeEnum {
  transparent = 1,
  white = 2
}
