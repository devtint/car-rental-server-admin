// 《请求模块》
// 加载 request 模块
import { request } from '@/utils'
// export const hello = () => {
//   return requestHello({
//     method: 'GET',
//     url: '/hello/hello'
//   })
// }
// (查询运动商家本月及当日收入)querySportBusinessIncome
export const getIncome = params => {
  return request({
    method: 'GET',
    url: '/search/querySportBusinessIncome',
    params,
  })
}

// (查询运动商家全部订单)querySportBusinessOrders
export const getAllOrder = params => {
  return request({
    method: 'GET',
    url: '/search/querySportBusinessOrders',
    params,
  })
}

// (查询运动商家已预约订单)querySportBusinessReseOrders
export const getWaitOrder = params => {
  return request({
    method: 'GET',
    url: '/search/querySportBusinessReseOrders',
    params,
  })
}

// (查询运动商家已取消订单)querySportBusinessCancOrders
export const getCancOrder = params => {
  return request({
    method: 'GET',
    url: '/search/querySportBusinessCancOrders',
    params,
  })
}

// (取消已付款订单)CGbtnCancelPaidOrder
export const cancelTheOrderOfPayment = data => {
  return request({
    method: 'POST',
    url: '/insertReturn/CGbtnCancelPaidOrder',
    data,
  })
}

// (取消未付款订单)CGbtnCancelUnPaidOrder
export const cancelTheOrderOfUnPayment = data => {
  return request({
    method: 'POST',
    url: '/insertReturn/CGbtnCancelUnPaidOrder',
    data,
  })
}
// (置等待使用订单为已使用)CGbtnSetOrderStatusToUsed
export const CGbtnSetOrderStatusToUsed = data => {
  return request({
    method: 'POST',
    url: '/insertReturn/CGbtnSetOrderStatusToUsed',
    data,
  })
}

// (查询运动商家全部线下订单)querySportBusinessOfflineOrders
export const getAllOfflineOrder = params => {
  return request({
    method: 'GET',
    url: '/search/querySportBusinessOfflineOrders',
    params,
  })
}

// (查询运动商家线下已完成订单)querySportBusiOfflineCompletedOrders
export const getAllOfflineCompletedOrder = params => {
  return request({
    method: 'GET',
    url: '/search/querySportBusiOfflineCompletedOrders',
    params,
  })
}

// (查询运动商家线下已取消订单)querySportBusinessOfflineCancOrders
export const getAllOfflineCancOrder = params => {
  return request({
    method: 'GET',
    url: '/search/querySportBusinessOfflineCancOrders',
    params,
  })
}

// (扫码支付订单退款)CGbtnCodeScanPayOrderRefund
export const cancelTheOrderOfOffline = data => {
  return request({
    method: 'POST',
    url: '/insertReturn/CGbtnCodeScanPayOrderRefund',
    data,
  })
}
