import { IUser, UserModel } from 'server/models/userSchema'
import { generateJwtToken } from 'server/utils/JWT'
import { Request, Response } from 'express'
import { compareSync } from 'bcrypt-ts'

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user: IUser | null = await UserModel.findOne({ email })
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const isMatch = compareSync(password, user.password)

  if (!isMatch) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  const token = generateJwtToken(user.email)
  res.json({ token })
}