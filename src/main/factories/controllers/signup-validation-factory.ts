import {
  ValidationComposite,
  RequiredFieldValidation,
  CompareFieldsValidation,
  EmailValidation,
} from '@/validation/validators'
import { Validation } from '@/presentation/protocols'
import { EmailValidatorAdapter } from '@/infra/validators'

export const makeSignUpValidation = (): ValidationComposite => {
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
  return new ValidationComposite(validations)
}
