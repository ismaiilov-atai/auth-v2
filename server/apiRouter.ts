import { JwtPayloadSchema } from '@shared/zod/jwtPayloadSchema'
import { authMiddleware } from './middlewares/authMiddleware'
import userRoute from './routes/user'
import authRoute from './routes/auth'
import { Router } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'verysecret'

const apiRouter = Router()
apiRouter.use(authMiddleware)

apiRouter.get('/', (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const token = authHeader.replace('Bearer ', '')
  const decoded = jwt.verify(token, JWT_SECRET)

  const result = JwtPayloadSchema.safeParse(decoded)
  if (!result.success) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  res.status(200).json({ user: result.data.payload.email })
})

apiRouter.use('/user', userRoute)
apiRouter.use('/user/auth', authRoute)

export default apiRouter