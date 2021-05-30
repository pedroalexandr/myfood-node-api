import { adaptRoute } from '@/main/adapters'
import { makeOrderController } from '@/main/factories'
import { auth } from '@/main/middlewares'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/order', auth, adaptRoute(makeOrderController()))
}
