import { Host } from '@config'
import http from '@http/fetch'

/**
 * 查询购物车数量
 * @param storeCode
 */
export const queryCartNum = async (storeCode: string) => {
  return http.get<{ cartOneCount: number; returnCode: string }>(
    `${Host.config.CART_URL}/srcb2bcf/cart1/getCartOneCount.tk?storeCode=${storeCode}`
  )
}
