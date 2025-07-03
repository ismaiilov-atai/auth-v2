import { Schema, model } from 'mongoose'

export interface IUser extends Document {
  email: string
  password: string
}

const userSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

export const UserModel = model<IUser>('User', userSchema)