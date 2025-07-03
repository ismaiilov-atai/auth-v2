import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'verysecret'

export function generateJwtToken(email: string): string {
  const payload = { email }
  const iat = Math.floor(Date.now() / 1000) + 2 * 60 * 60
  const token = jwt.sign({ payload, iat }, JWT_SECRET)

  return token
}

export function validateToken(token: string): boolean {
  try {
    jwt.verify(token, JWT_SECRET)
    return true
  } catch (error) {
    return false
  }
}