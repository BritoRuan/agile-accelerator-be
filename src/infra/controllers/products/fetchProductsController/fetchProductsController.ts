import { makeFetchProductsUseCase } from '@/module/useCases/factories/makeFetchProductsUseCase'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function fetchProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchProductParamsSchema = z.object({
    id: z.string().uuid().optional(),
    name: z.string().optional(),
  })

  const { id, name } = fetchProductParamsSchema.parse(request.params)

  const fetchProductUseCase = makeFetchProductsUseCase()

  const { product } = await fetchProductUseCase.execute({ id, name })

  return reply.status(200).send({
    product,
  })
}
