import { validateUserInput } from 'server/middlewares/validateUserInput'
import { insertUser } from 'server/controllers/insertUser'
import { userSchema } from '@shared/zod/userSchema'
import { Router } from 'express'

const userRoute = Router()

userRoute.get('/', (req, res) => {
  res.json({ message: 'Get all users' })
})

// Example: Get user by ID
userRoute.get('/:id', (req, res) => {
  const { id } = req.params
  // Replace with actual logic to fetch user by ID
  res.json({ message: `Get user with ID ${id}` })
})

// Example: Create a new user
userRoute.post('/', validateUserInput(userSchema), insertUser)


userRoute.put('/:id', (req, res) => {
  const { id } = req.params
  // Replace with actual logic to update user by ID
  res.json({ message: `Update user with ID ${id}` })
})

// Example: Delete user by ID
userRoute.delete('/:id', (req, res) => {
  const { id } = req.params
  // Replace with actual logic to delete user by ID
  res.json({ message: `Delete user with ID ${id}` })
})

export default userRoute