import { NextFunction, Request, Response } from 'express'
import { validateToken } from '../utils/JWT'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {

  if (req.path === '/user' || req.path === '/user/auth') {
    next()
    return
  }

  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  const token = authHeader.replace('Bearer ', '')
  const isValid = validateToken(token)
  if (!isValid) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  next()
}

