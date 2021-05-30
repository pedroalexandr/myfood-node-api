import { AddAccount, Authentication } from '@/domain/usecases'

import faker from 'faker'

export const mockAddAccountParams = (): AddAccount.Params => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  cardNumber: faker.finance.creditCardNumber(),
  cardHolder: faker.name.findName(),
  expirationDate: '11/30',
  cvv: faker.finance.creditCardCVV(),
  street: faker.address.streetName(),
  housenumber: faker.random.word(),
  neighborghood: faker.random.word(),
  city: faker.address.city(),
  state: faker.address.stateAbbr(),
  password: faker.internet.password(),
})

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})
