import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db'

import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import request from 'supertest'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Usuario Teste',
          email: 'usuariotestedev@gmail.com',
          cardNumber: '5162098767873153',
          cardHolder: 'USUARIO A E TESTE',
          expirationDate: '11/40',
          cvv: '218',
          street: 'Rua das Cajazeiras Pálidas',
          housenumber: '192',
          neighborghood: 'Parangaba',
          city: 'Fortaleza',
          state: 'CE',
          password: 'senhaforte123',
          passwordConfirmation: 'senhaforte123',
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Usuario Teste',
          email: 'usuariotestedev@gmail.com',
          cardNumber: '5162098767873153',
          cardHolder: 'USUARIO A E TESTE',
          expirationDate: '11/40',
          cvv: '218',
          street: 'Rua das Cajazeiras Pálidas',
          housenumber: '192',
          neighborghood: 'Parangaba',
          city: 'Fortaleza',
          state: 'CE',
          password: 'senhaforte123',
          passwordConfirmation: 'senhaforte123',
        })
        .expect(403)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Alexandre',
        email: 'alexdevcoder@gmail.com',
        password,
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'alexdevcoder@gmail.com',
          password: '123',
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'alexdevcoder@gmail.com',
          password: '123',
        })
        .expect(401)
    })
  })
})
