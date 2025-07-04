import type { UserInsertResponse, UserType } from '@/shared/types/User'
import axios from 'axios'
import api from './api'

export const inserUser = async (body: UserType): Promise<UserInsertResponse> => {
  try {
    const response = await api.post('/user', body)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data
    } else {
      return { error: (error as Error).message }
    }
  }
}

export const authUser = async (body: UserType): Promise<UserInsertResponse> => {
  const response = await api.post('/user/auth', body)
  return response.data
}

export const checkUser = async (): Promise<{ user: string }> => {
  const response = await api.get('/user')
  return response.data
}