import { MongoHelper } from '@/infra/db'
import { MakeOrderRepository } from '@/data/protocols'

export class OrderMongoRepository implements MakeOrderRepository {
  async make(
    orderData: MakeOrderRepository.Params
  ): Promise<MakeOrderRepository.Result> {
    const orderCollection = await MongoHelper.getCollection('orders')
    const result = await orderCollection.insertOne(orderData)
    return result.ops[0] !== null
  }
}
