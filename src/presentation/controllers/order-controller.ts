import { MakeOrder } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers'

export class OrderController implements Controller {
  constructor(
    private readonly makeOrder: MakeOrder,
    private readonly validation: Validation
  ) {}

  async handle(request: OrderController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)

      if (error) {
        return badRequest(error)
      }

      const { accountId, subtotals } = request

      const orderData = {
        accountId,
        orderTotalValue: subtotals.reduce((total, value) => total + value),
        ordered_at: Date.now(),
      }

      const success = await this.makeOrder.make(orderData)

      if (!success) return serverError(new Error('Internal server error'))

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace OrderController {
  export type Request = {
    accountId: string
    subtotals: number[]
  }
}
