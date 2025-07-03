import userRoute from './routes/user'
import authRoute from './routes/auth'
import { Router } from 'express'
import { authMiddleware } from './middlewares/authMiddleware'

const apiRouter = Router()
apiRouter.use(authMiddleware)

apiRouter.get('/', (req, res) => {
  res.send('Welcome to the Auth API')
})

apiRouter.use('/user', userRoute)
apiRouter.use('/user/auth', authRoute)

export default apiRouter