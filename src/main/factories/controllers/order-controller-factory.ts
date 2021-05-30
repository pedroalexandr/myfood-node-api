import {
  makeOrderValidation,
  makeLogControllerDecorator,
  makeDbMakeOrder,
} from '@/main/factories'
import { OrderController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeOrderController = (): Controller => {
  const controller = new OrderController(
    makeDbMakeOrder(),
    makeOrderValidation()
  )
  return makeLogControllerDecorator(controller)
}
