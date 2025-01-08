import fastify from 'fastify'
import { productsRoutes } from './infra/controllers/products/routesProducts'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(productsRoutes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    reply.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (error instanceof Error) {
    return reply.status(404).send({
      message: error.message,
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.log(error)
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
