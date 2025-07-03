import { authMiddleware } from './middlewares/authMiddleware'
import bodyParser from 'body-parser'
import apiRouter from './apiRouter'
import express from 'express'

const app = express()


app.use(bodyParser.json())
app.use('/api', apiRouter)

export default app