type PageConfig = {
  title: string
  description: string
}

export type RoutesConfig = {
  signup: PageConfig
  login: PageConfig
}

export type SIGN_PAGE_CONTENT = 'signup' | 'login'
export const AUTH_PAGES = {
  SIGNUP: 'signup',
  LOGIN: 'login',
} as const

type SignMessagesState = {
  success: string
  failure: string
}

export type SignMessagesType = {
  signup: SignMessagesState
  login: SignMessagesState
}

export type FormData = {
  email: string
  password: string
}