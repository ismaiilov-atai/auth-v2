import { validateUserInput } from 'server/middlewares/validateUserInput'
import { insertUser } from 'server/controllers/insertUser'
import { checkUser } from 'server/controllers/checkUser'
import { userSchema } from '@shared/zod/userSchema'
import { Router } from 'express'

const userRoute = Router()

userRoute.get('/', checkUser)
userRoute.post('/', validateUserInput(userSchema), insertUser)

export default userRoute