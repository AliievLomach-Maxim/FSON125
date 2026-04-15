/**
 * - Union
 * - Літеральні типи
 */

/***************** 1 *****************/
// "pending", "shipped", "delivered", "canceled"

type orderStatus = 'pending' | 'shipped' | 'delivered' | 'canceled'

let status: orderStatus = 'pending'
status = 'canceled'

console.log('status', status)
/***************** 2 *****************/
// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"
type OrderDelivery = 'drone' | 'courier' | 'pickup'
type OrderDeliveryTime = 'morning' | 'afternoon' | 'evening'
interface Order {
  username: string
  email: string
  total: number
  delivery: OrderDelivery
  deliveryTime: OrderDeliveryTime
  status: string
}
const order: Order = {
  username: 'Jacob',
  email: 'j.mercer@mail.com',
  total: 120,
  delivery: 'courier',
  deliveryTime: 'afternoon',
  status: 'shipped',
}

console.log(order)
