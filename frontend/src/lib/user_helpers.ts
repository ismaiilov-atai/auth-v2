import type { UserType } from '@/shared/types/User'
import axios from 'axios'
import api from './api'

export const apiUser = async <T>(endpoint: string, body?: UserType,): Promise<T> => {
  try {
    const response = body ? await api.post(endpoint, body) : await api.get(endpoint)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data as T
    } else {
      return { error: (error as Error).message } as T
    }
  }
}