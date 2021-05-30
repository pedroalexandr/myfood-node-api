export interface MakeOrder {
  make: (orderData: MakeOrder.Params) => Promise<MakeOrder.Result>
}

export namespace MakeOrder {
  export type Params = {
    accountId: string
    orderTotalValue: number
    ordered_at: number
  }
  export type Result = boolean
}
