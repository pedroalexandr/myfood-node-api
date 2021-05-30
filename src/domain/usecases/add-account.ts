export interface AddAccount {
  add: (account: AddAccount.Params) => Promise<AddAccount.Result>
}

export namespace AddAccount {
  export type Params = {
    name: string
    email: string
    cardNumber: string
    cardHolder: string
    expirationDate: string
    cvv: string
    street: string
    housenumber: string
    neighborghood: string
    city: string
    state: string
    password: string
  }

  export type Result = boolean
}
