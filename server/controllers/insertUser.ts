import { generateJwtToken } from 'server/utils/JWT'
import { genSaltSync, hashSync } from "bcrypt-ts"
import { UserModel } from '../models/userSchema'
import { Request, Response } from 'express'

export const insertUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const existingUser = await UserModel.findOne({ email })

    if (existingUser) {
      res.status(409).json({ message: 'User already exists' })
      return
    }

    const salt = genSaltSync(Number(process.env.BCRYPT_SALT_ROUNDS))
    const hashedPassword = hashSync(password, salt)
    const newUser = new UserModel({ email, password: hashedPassword })
    await newUser.save()

    const token = generateJwtToken(newUser.email)

    res.status(201).json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: (error as Error).message })
  }
}