import { makeSignUpValidation } from '@/main/factories'
import {
  ValidationComposite,
  RequiredFieldValidation,
  CompareFieldsValidation,
  EmailValidation,
} from '@/validation/validators'
import { Validation } from '@/presentation/protocols'
import { EmailValidatorAdapter } from '@/infra/validators'

jest.mock('@/validation/validators/validation-composite')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    const fields = [
      'name',
      'email',
      'cardNumber',
      'cardHolder',
      'expirationDate',
      'cvv',
      'street',
      'housenumber',
      'neighborghood',
      'city',
      'state',
      'password',
      'passwordConfirmation',
    ]
    for (const field of fields) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(
      new CompareFieldsValidation('password', 'passwordConfirmation')
    )
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
