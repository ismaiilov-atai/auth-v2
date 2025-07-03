export interface UserType {
  email: string
  password: string
}

export type UserInsertResponse = { token: string } | { error: string }