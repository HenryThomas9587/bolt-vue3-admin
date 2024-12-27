export type OrderStatus = 'completed' | 'processing' | 'rejected'
export type OrderType = 'Electric' | 'Book' | 'Medicine' | 'Mobile' | 'Watch'

export interface Order {
  id: string
  name: string
  address: string
  date: string
  type: OrderType
  status: OrderStatus
}