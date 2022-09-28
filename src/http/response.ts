export interface BaseResponse<T> {
  code: string
  data: T
  dataList?: Array<T>
  msg: string
}
export interface SuccessResponse<T> extends BaseResponse<T> {
  success: true
  data: T
  dataList?: Array<T>
}
