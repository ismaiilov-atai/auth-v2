import type { UserInsertResponse, UserType } from '@/shared/types/User'
import api from './api'
import axios from 'axios'

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