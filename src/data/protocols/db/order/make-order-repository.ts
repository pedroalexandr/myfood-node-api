import { MakeOrder } from '@/domain/usecases'

export interface MakeOrderRepository {
  make: (orderData: MakeOrder.Params) => Promise<MakeOrder.Result>
}

export namespace MakeOrderRepository {
  export type Params = MakeOrder.Params
  export type Result = MakeOrder.Result
}
