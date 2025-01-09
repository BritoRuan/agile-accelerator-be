import { makeRegisterProductUseCase } from '@/module/useCases/factories/makeRegisterProductUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerProductBodySchema = z.object({
    name: z.string().min(1),
    category: z.string(),
    stockQuantity: z.number().int(),
    price: z.number(),
  })

  const { name, category, stockQuantity, price } =
    registerProductBodySchema.parse(request.body)

  const registerProductUseCase = makeRegisterProductUseCase()

  await registerProductUseCase.execute({
    name,
    category,
    stockQuantity,
    price,
  })

  return reply.status(201).send()
}
