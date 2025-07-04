import { validateUserInput } from '../middlewares/validateUserInput'
import { loginUser } from 'server/controllers/loginUser'
import { userSchema } from '@shared/zod/userSchema'
import { Router } from 'express'

const authRoute = Router()

authRoute.post('/', validateUserInput(userSchema), loginUser)

export default authRoute