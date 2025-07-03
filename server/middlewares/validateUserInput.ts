import { Request, Response, NextFunction } from 'express'
import { z, ZodError } from 'zod'

export function validateUserInput(schema: z.ZodObject<any, any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await schema.safeParseAsync(req.body)
      if (!result.success) throw new ZodError(result.error.issues)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }))
        res.status(400).json({ error: errorMessages.length && errorMessages[0].message, })
      } else {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }
}

