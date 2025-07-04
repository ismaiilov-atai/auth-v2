import type { RoutesConfig, SignMessagesType } from '@/types/auth_types'
import appCss from '../styles.css?url'
export const ACCESS_TOKEN = 'access_token' as const

export const SIGNUP_HEADER_TEXT_CONTENTS: RoutesConfig = {
  signup: {
    title: 'Signup',
    description: 'Create an account to unlock full benefits',
  },
  login: {
    title: 'Login',
    description: 'Welcome back, please provide your credentials',
  },
} as const


export const SIGNIN_MESSAGES: SignMessagesType = {
  signup: {
    success: 'User created successfully!',
    failure: 'Failed to create'
  },
  login: {
    success: 'You are in, welcome back!',
    failure: 'Login failed'
  }
} as const

export const META_DATA = {
  meta: [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'Auth V2',
    },
  ],
  links: [
    {
      rel: 'icon',
      href: '/task.svg',
    },
    {
      rel: 'stylesheet',
      href: appCss,
    },
  ],
}