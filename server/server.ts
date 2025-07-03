import { connectToDB } from './db/mongoose'
import app from './app'


const port = process.env.PORT || 3000

async function startServer() {
  await connectToDB()

  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`)
  })
}

startServer()