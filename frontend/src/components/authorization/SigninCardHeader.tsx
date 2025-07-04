import { CardDescription, CardHeader, CardTitle } from '../ui/card'
import type { SIGN_PAGE_CONTENT } from '@/types/auth_types'
import { SIGNUP_HEADER_TEXT_CONTENTS } from '@/lib/constants'

interface PageProps {
  contentToShow: SIGN_PAGE_CONTENT
}

const SigninCardHeader = ({ contentToShow }: PageProps) => {
  return (
    <CardHeader>
      <CardTitle>{SIGNUP_HEADER_TEXT_CONTENTS[contentToShow].title}</CardTitle>
      <CardDescription>
        {SIGNUP_HEADER_TEXT_CONTENTS[contentToShow].description}
      </CardDescription>
    </CardHeader>
  )
}

export default SigninCardHeader
