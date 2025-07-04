import type { SIGN_PAGE_CONTENT, FormData } from '@/types/auth_types'
import { ACCESS_TOKEN, SIGNIN_MESSAGES } from '@/lib/constants'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Card, CardContent } from '@/components/ui/card'
import { authUser, inserUser } from '@/lib/user_helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { userSchema } from '@/shared/zod/userSchema'
import { useMutation } from '@tanstack/react-query'
import SigninCardHeader from './SigninCardHeader'
import { capitalaizeLable } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import { TabsContent } from '../ui/tabs'
import { Button } from '../ui/button'
import AuthInput from './AuthInput'
import { toast } from 'sonner'

interface PageProps {
  contentValue: SIGN_PAGE_CONTENT
}

const Signin = ({ contentValue }: PageProps) => {
  const navigate = useNavigate({ from: '/authorization' })
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
  })

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const userToCreate = {
        email: watch('email'),
        password: watch('password'),
      }

      return contentValue === 'signup'
        ? await inserUser(userToCreate)
        : await authUser(userToCreate)
    },
    onSuccess: (data) => {
      if ('token' in data) {
        localStorage.setItem(ACCESS_TOKEN, data.token)
        navigate({ to: '/' })
        toast.success(SIGNIN_MESSAGES[contentValue].success)
      } else {
        toast.error(
          <>
            <p className="text-sm">{SIGNIN_MESSAGES[contentValue].failure}</p>
            <span>{data.error}</span>
          </>,
        )
      }
    },
  })

  const onSubmit: SubmitHandler<FormData> = async (_, e) => {
    e?.preventDefault()
    mutate()
  }

  return (
    <TabsContent value={contentValue} className=" w-full md:w-[50%] h-full ">
      <Card className=" space-y-10 text-left h-full">
        <SigninCardHeader contentToShow={contentValue} />
        <CardContent className=" relative h-full">
          <form
            className="flex flex-col  h-full gap-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <AuthInput register={register} errors={errors} fieldName="email" />
            <AuthInput
              register={register}
              errors={errors}
              fieldName="password"
            />

            <Button
              className="w-[60%] mx-auto absolute bottom-4 inset-x-0"
              type="submit"
              disabled={!isDirty || !isValid || isPending}
            >
              {capitalaizeLable(contentValue)}
              {isPending && <LoaderCircle className="animate-spin" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default Signin
