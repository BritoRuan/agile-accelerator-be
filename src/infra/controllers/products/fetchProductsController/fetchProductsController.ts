import { makeFetchProductsUseCase } from '@/module/useCases/factories/makeFetchProductsUseCase'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function fetchProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchProductParamsSchema = z.object({
    id: z.string().uuid().optional(),
    nome: z.string().optional(),
  })

  const { id, nome } = fetchProductParamsSchema.parse(request.params)

  const fetchProductUseCase = makeFetchProductsUseCase()

  const { product } = await fetchProductUseCase.execute({ id, nome })

  return reply.status(200).send({
    product,
  })
}
