import { Schema, model, Document } from 'mongoose'
import { UserType } from '@shared/types/User'

export type IUser = UserType & Document

const userSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

export const UserModel = model<IUser>('User', userSchema)