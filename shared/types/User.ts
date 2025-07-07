export interface UserType {
  email: string
  password: string
}

export type UserInsertResponse = { token: string } | { error: string }
export type UserCheckResponse = { user: string } | { error: string }