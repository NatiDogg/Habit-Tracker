import {z} from 'zod'
import { config } from 'dotenv'
config()
const envSchema = z.object({
     PORT: z.string().min(2),
     MONGODB_URL: z.string().min(4),
     JWT_ACCESS_TOKEN: z.string().min(5),
     JWT_REFRESH_TOKEN: z.string().min(5)

})

export const env = envSchema.parse(process.env)



