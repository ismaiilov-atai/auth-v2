import { authMiddleware } from './middlewares/authMiddleware'
import userRoute from './routes/user'
import authRoute from './routes/auth'
import { Router } from 'express'


const apiRouter = Router()
apiRouter.use(authMiddleware)

apiRouter.use('/user', userRoute)
apiRouter.use('/user/auth', authRoute)

export default apiRouter