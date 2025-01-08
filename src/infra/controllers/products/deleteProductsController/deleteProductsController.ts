import { makeDeleteProductsUseCase } from '@/module/useCases/factories/makeDeleteProductsUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deleteProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteProductsParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteProductsParamsSchema.parse(request.params)

  const deleteProductsUseCase = makeDeleteProductsUseCase()

  await deleteProductsUseCase.execute({ id })

  return reply.status(204).send()
}
