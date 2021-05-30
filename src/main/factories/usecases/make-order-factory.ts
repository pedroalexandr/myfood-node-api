import { MakeOrder } from '@/domain/usecases'
import { DbMakeOrder } from '@/data/usecases/db-make-order'
import { OrderMongoRepository } from '@/infra/db'

export const makeDbMakeOrder = (): MakeOrder => {
  const orderMongoRepository = new OrderMongoRepository()
  return new DbMakeOrder(orderMongoRepository)
}
