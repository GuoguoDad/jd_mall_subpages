import { Dimensions, PixelRatio } from 'react-native'

//UI主色
//const brand-theme = '#f23030';//换肤色
const brandPrimary = '#5491de'
const brandPrimaryTap = '#487FCA'
const brandPrimaryLighter = '#d5e8ff'

//屏幕宽高
const deviceWidth = Dimensions.get('window').width //屏幕可视宽度
const deviceHeight = Dimensions.get('window').height //屏幕可视高度

const navigationBarHeight = 45 //顶部导航高度

//UI主COLOR基调
const colors = {
  // 全局/品牌色
  brandPrimary: brandPrimary, //主色/按钮选中、tabs选中、选中文字、链接
  brandPrimaryTap: brandPrimaryTap, //主色按下时状态、主色加深 *
  brandPrimaryLighter: brandPrimaryLighter, //主色变浅 *
  brandAssist: '#ff0000', //主按钮／状态 换肤也不能变的颜色
  brandSecondary: '#323641', //辅助色--用于工作台、发现、我的title bar等
  brandHot: '#f43530', //用于推荐/促销/折扣 价格、删除、徽章
  brandImportant: '#f43530', //用于小红点
  brandSuccess: '#09bb07', //成功
  brandWarning: '#ffbe00', //警告
  brandError: '#f76260', //错误

  //文字色
  textBase: '#666', //基本、常规文字颜色，主要用于副标题及内容文字
  textBaseInverse: '#fff', //基本 - 反色
  textSecondary: '#333', //辅助色、重要文字颜色，主要用于主标题、主界面的模块文字
  textSecondaryUnActive: '#7F8389',
  textThird: '#ACACAC',
  textFour: '#434343',
  textPlaceholder: '#999', //提示类文字，主要用于完善个人信息页面、输入框的提示说明
  textDisabled: '#ccc', //失效、禁用文字，主要用于按钮的禁用状态等
  textCaption: '#999', //辅助描述
  textDescription: '#1E1E1E', //描述说明
  textParagraph: '#666', //段落
  textHighlight: brandPrimary, //用于需要作出提示的文字，页面选中文字、数字文字
  textLink: brandPrimary, //链接
  hrefLink: '#5466EF',
  iconBase: '#999', //小图标的背景，比如一些小圆点，加减号 *

  // 阴影色
  shadow: 'rgba(0, 0, 0, .21)', //阴影色

  // 背景色
  fillBody: '#f4f5f7', //页面背景
  fillBase: '#fff', //组件默认背景
  fillBaseLight: '#f4f5f7', //组件套装背景
  fillTap: '#f9f9f9', //组件默认背景 _ 按下 *
  fillDisabled: '#b8b8b8', //通用失效背景
  fillMask: 'rgba(0, 0, 0, .5)', //遮罩背景
  fillOverlayInverse: 'rgba(0, 0, 0, .7)', //浮层背景，用于轻提示

  // 透明度
  opacityDisabled: 0.6, // switch checkbox radio 等组件禁用的透明度
  topBackgroundColor: '#2b3643',
  // 边框色
  borderBase: '#d9d9d9', //按钮边框色
  borderSplit: '#eee' //分隔线颜色
}

//字体
const font = {
  // 字体家族
  familyBase:
    '_apple_system,"SF UI Text",Roboto,Noto,"Helvetica Neue",`elvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans_serif',
  familyCode: 'Consolas,Menlo,Courier,monospace',

  // 字体尺寸
  textBase: 12,
  sizeXs: 10, //小号字体 底部导航字
  sizeDefault: 12, //基础字体大小 提示字号
  sizeCaptionSm: 13, //小号说明文字、描述文字
  sizeBase: 14, //基本 段落、搜索、筛选、商品名
  sizeSecondary: 15, //辅助字号，用于表单标题文字，tabs文字
  sizeSubhead: 15, //副标题
  sizeCaption: 16, //大号说明文字 弹出式菜单文字、多列选择器文字
  sizeHeading: 18, //导航标题
  sizeSm: 18,
  sizeMd: 21,
  sizeLg: 24,
  sizeXl: 30,

  //背景
  fillBase: 'transparent' //rn的text默认带有白底
}

//边框
const border = {
  // 圆角
  radiusXs: 2, //用于按钮等
  radiusSm: 4,
  radiusMd: 10,

  // 边框尺寸
  widthSm: 1 / PixelRatio.get(),
  widthMd: 2 / PixelRatio.get(),
  widthLg: 4 / PixelRatio.get(),

  //边框颜色
  color: colors.borderBase,
  split: colors.borderSplit
}

// 间距
const spacing = {
  default: 15, //页面边距
  // 水平间距
  horizontalXs: 2,
  horizontalSm: 5,
  horizontalMd: 10,
  horizontalLg: 15,

  // 垂直间距
  verticalXs: 2,
  verticalSm: 5,
  verticalMd: 10,
  verticalLg: 15,
  verticalXl: 20,
  verticalXxl: 30
}

// 字体图标大小
const icon = {
  sizeXxs: 14,
  sizeXs: 16,
  sizeSm: 18,
  sizeMd: 22,
  sizeLg: 36
}

//按钮Button
const button = {
  height: 44, //默认按钮高度
  fontSize: 17, //默认按钮字体大小
  spacing: 15,

  heightMd: 35, //中号按钮高度
  fontSizeMd: 16, //中号按钮字体大小
  spacingMd: 15,

  heightSm: 30, //小号按钮高度
  fontSizeSm: 13, //小号按钮字体大小
  spacingSm: 15,

  primaryFill: brandPrimary, //主色按钮背景
  primaryFillTap: brandPrimaryTap, //主色按钮按下时背景

  ghostColor: brandPrimary, //幽灵按钮，同时应用于文字颜色、边框色
  ghostColorTap: brandPrimaryTap, //幽灵按钮按下时，同时应用于文字颜色、边框色

  defaultColor: colors.borderBase,
  defaultFillTap: '#ddd',

  linkFontColor: brandPrimary,
  linkFontSize: font.sizeBase
}

//输入框TextInput
const inputItem = {
  height: 50,
  labelWidth: 85, //InputItem、TextareaItem 文字长度基础值
  fontSize: font.sizeSecondary,
  fontExtraSize: font.sizeSecondary,
  textColor: colors.textSecondary,
  iconColor: '#999',
  extraColor: colors.textSecondary
}

//searchBar
const searchBar = {
  height: 36,
  fontSize: font.sizeBase
}

//dropDown
const dropDown = {
  height: 44,
  horizontalSpacing: 15,
  fontSize: font.sizeBase,
  textColor: colors.textBase,
  textSelectedColor: colors.textSecondary
}

//TabBarIOS
const tabBar = {
  height: 44, //底部tabBar高度
  fontColor: colors.textSecondary, //对应TabBarIOS中unselectedTintColor的值，未选中的文字颜色
  fontColorSelected: brandPrimary, //对应TabBarIOS中tintColor的值，选中的文字颜色
  fill: '#ebeeef'
}

//tabs
const tabs = {
  height: 44,
  fontSize: font.sizeSecondary
}

//tag
const tag = {
  height: 32,
  fontSize: font.sizeBase,
  borderRadius: border.radiusSm,

  heightMd: 28,
  fontSizeMd: font.sizeDefault,

  heightSm: 18,
  fontSizeSm: font.sizeDefault,

  defaultFill: colors.fillBody,
  defaultBorderColor: colors.fillBody,
  defaultTextColor: colors.textBase,

  primaryFill: colors.brandPrimary,
  primaryBorderColor: colors.brandPrimary,
  primaryTextColor: colors.textBaseInverse,

  hotFill: colors.brandHot,
  hotBorderColor: colors.brandHot,
  hotTextColor: colors.textBaseInverse,

  warningFill: colors.brandWarning,
  warningBorderColor: colors.brandWarning,
  warningTextColor: colors.textBaseInverse,

  successFill: colors.brandSuccess,
  successBorderColor: colors.brandSuccess,
  successTextColor: colors.textBaseInverse,

  color: brandPrimary
}

//noticeBar，如：公告
const noticeBar = {
  height: 36,
  fill: brandPrimaryLighter,
  color: brandPrimary
}

//segmentedControl，如：商品详情中图文详情和属性参数切换
const segmentedControl = {
  height: 40,
  fontColor: '#fff',
  fill: brandPrimary,
  borderColor: brandPrimary
}

const list = {
  lineHeight: 22, //列表标题行高
  briefLineHeight: 18,
  textSizeSmall: 13,
  textSizeBase: 15, //列表头尾、标题、extra文字大小
  textBaseColor: colors.textSecondary, //列表标题颜色
  textExtraColor: '#999', //列表extra文字颜色
  textCaptionColor: colors.textCaption, //列表头尾文字颜色、辅助描述 item副标题颜色，表单头尾文字颜色
  fillTap: colors.fillTap, // 组件默认背景_按下
  verticalSpacing: 10,
  horizontalSpacing: 15,
  listItemHeight: 50,
  briefHeight: 10
}

const modal = {
  zindex: 999,
  borderRadius: 5,
  borderWidth: border.widthSm,
  borderColor: border.split,
  vSpacingMd: 10,
  vSpacingLg: 15,
  vSpacingXl: 20,
  hSpacingSm: 5,
  hSpacingLg: 15,
  hSpacingXl: 20,
  fontSizeHeading: 17,
  fontSizeBase: font.sizeBase,
  colorBase: colors.textSecondary,
  colorLink: colors.brandPrimary,
  colorCaption: colors.textCaption
}

//通用属性值
const values = {
  //navigationBar
  navigationBarHeight: navigationBarHeight,

  //device
  deviceWidth: deviceWidth,
  deviceHeight: deviceHeight
}

const pages = {
  content_default_bg: '#f9f9f9',
  separate_line: '#eaeaea' // 分割线
}

export default {
  border,
  button,
  colors,
  dropDown,
  font,
  list,
  modal,
  icon,
  inputItem,
  noticeBar,
  searchBar,
  segmentedControl,
  spacing,
  tabBar,
  tabs,
  tag,
  values,
  pages
}
