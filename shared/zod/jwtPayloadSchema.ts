import z from 'zod'

export const JwtPayloadSchema = z.object({
  payload: z.object({
    email: z.string().email()
  }),
  iat: z.number()
})

export type JwtPayload = z.infer<typeof JwtPayloadSchema>