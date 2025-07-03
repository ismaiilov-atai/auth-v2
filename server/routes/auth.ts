import { validateUserInput } from '../middlewares/validateUserInput'
import { UserModel, IUser } from '../models/userSchema'
import { userSchema } from '@shared/zod/userSchema'
import { compareSync } from 'bcrypt-ts'
import { Router } from 'express'
import { generateJwtToken } from 'server/utils/JWT'

const authRoute = Router()

authRoute.post('/', validateUserInput(userSchema), async (req, res) => {
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
})

export default authRoute