import {z} from 'zod'

export const registerSchema = z.object({
        name: z.string().min(4, 'Name must be at least 4 characters'),
        email: z.email(),
        password: z.string().min(6, 'Password must be at least 6 characters'),
       profile: z.string().min(4).optional(),
        provider: z.string().min(3).optional()
})

export const loginSchema = z.object({
      email: z.email(),
      password: z.string().min(6, 'Password must be at least 6 characters'),
})
export type userRegisterType = z.infer<typeof registerSchema>
export type userLoginType = z.infer<typeof loginSchema>