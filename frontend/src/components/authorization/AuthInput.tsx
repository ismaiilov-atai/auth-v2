import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { UserType } from '../../../../shared/types/User'

import { capitalaizeLable } from '@/lib/utils'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

interface PageProps {
  register: UseFormRegister<UserType>
  fieldName: 'email' | 'password'
  errors: FieldErrors<UserType>
}

const AuthInput = ({ register, fieldName, errors }: PageProps) => {
  return (
    <section className="space-y-2">
      <Label htmlFor={fieldName}> {capitalaizeLable(fieldName)}</Label>
      <Input
        id={fieldName}
        type={fieldName}
        autoComplete={fieldName}
        {...register(fieldName)}
      />
      {errors.email && (
        <p className="text-red-500 text-[10px] text-left">
          {errors[fieldName]?.message}
        </p>
      )}
    </section>
  )
}

export default AuthInput
