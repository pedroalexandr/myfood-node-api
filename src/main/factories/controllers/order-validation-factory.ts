import {
  ValidationComposite,
  RequiredFieldValidation,
} from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeOrderValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const fields = []
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
