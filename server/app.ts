import bodyParser from 'body-parser'
import apiRouter from './apiRouter'
import express from 'express'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: 'http://127.0.0.1:3000',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))


app.use(bodyParser.json())
app.use('/api', apiRouter)

export default app