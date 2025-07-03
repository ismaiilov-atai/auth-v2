import { validateUserInput } from 'server/middlewares/validateUserInput'
import { insertUser } from 'server/controllers/insertUser'
import { userSchema } from '@shared/zod/userSchema'
import { Router } from 'express'

const userRoute = Router()

userRoute.get('/', (req, res) => {
  res.json({ message: 'Get all users' })
})

userRoute.post('/', validateUserInput(userSchema), insertUser)

export default userRoute