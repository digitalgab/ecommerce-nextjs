import {z} from 'zod'

console.log(process.env)

const envVariablesSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
})

const parseResult = envVariablesSchema.safeParse(process.env)

if (!parseResult.success) {
  const errors = parseResult.error.flatten().fieldErrors

  throw new Error(`Invalid environment variables: ${Object.keys(errors).join(', ')}`)
}

export const env = parseResult.data

