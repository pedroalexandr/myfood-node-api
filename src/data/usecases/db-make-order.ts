import { MakeOrder } from '@/domain/usecases'
import { MakeOrderRepository } from '@/data/protocols'

export class DbMakeOrder implements MakeOrder {
  constructor(private readonly makeOrderRepository: MakeOrderRepository) {}
  async make(orderData: MakeOrder.Params): Promise<MakeOrder.Result> {
    return await this.makeOrderRepository.make(orderData)
  }
}
