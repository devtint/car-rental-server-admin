// 《出车请求模块》
// 加载 request 模块
import { request } from '@/utils'
// export const hello = () => {
//   return requestHello({
//     method: 'GET',
//     url: '/hello/hello'
//   })
// }
// 查询可派司机
export const getAvailableDriver = params => {
  return request({
    method: 'GET',
    url: '/search/queryAvailableDriver',
    params,
  })
}
// 查询可派车辆
export const getAvailableCar = params => {
  return request({
    method: 'GET',
    url: '/search/queryAvailableCarsNumber',
    params,
  })
}

// 指派代驾车辆
export const assignSubstituteCar = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnAssignSubstituteCar',
    params,
  })
}

//指派代驾司机
export const assignSubstituteDriver = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnAssignSubstituteDriver',
    params,
  })
}

// 租车单位自行提车
export const assignCarOfSelf = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnCarSelfWthdrawal',
    params,
  })
}

// (指派上门送车人员)ZCbtnCarDeliveryDriver
export const assignCarDeliveryDriver = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnCarDeliveryDriver',
    params,
  })
}

// (指派上门送车车辆)ZCbtnCarDeliveryCar
export const assignCarDeliveryCar = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnCarDeliveryCar',
    params,
  })
}

// (指派上门收车人员)ZCbtnCarCollectDriver
export const assignCarCollectDriver = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnCarCollectDriver',
    params,
  })
}

// (租车方已收车)ZCbtnCarRentalCollectedCar
export const assignCarRentalCollectedCar = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnCarRentalCollectedCar',
    params,
  })
}

// (租车单位自行还车)ZCbtnReturnCarBySelf
export const assignReturnCarBySelf = params => {
  return request({
    method: 'get',
    url: '/insertReturn/ZCbtnReturnCarBySelf',
    params,
  })
}
