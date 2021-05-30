import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, ok, forbidden } from '@/presentation/helpers'
import { EmailInUseError } from '@/presentation/errors'
import { AddAccount, Authentication } from '@/domain/usecases'

export class SignUpController implements Controller {
  constructor(
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle(request: SignUpController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const {
        name,
        email,
        cardNumber,
        cardHolder,
        expirationDate,
        cvv,
        street,
        housenumber,
        neighborghood,
        city,
        state,
        password,
      } = request
      const isValid = await this.addAccount.add({
        name,
        email,
        cardNumber,
        cardHolder,
        expirationDate,
        cvv,
        street,
        housenumber,
        neighborghood,
        city,
        state,
        password,
      })
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
      const authenticationModel = await this.authentication.auth({
        email,
        password,
      })
      return ok(authenticationModel)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace SignUpController {
  export type Request = {
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
    passwordConfirmation: string
  }
}
