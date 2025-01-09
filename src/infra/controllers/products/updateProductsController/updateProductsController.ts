import { makeUpdateProductsUseCase } from '@/module/useCases/factories/makeUpdateProductsUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function updateProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateProductParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const updateProductBodySchema = z.object({
    name: z.string().min(1).optional(),
    category: z.string().optional(),
    stockQuantity: z.number().int().optional(),
    price: z.number().optional(),
  })

  const { id } = updateProductParamsSchema.parse(request.params)
  const updatedProduct = updateProductBodySchema.parse(request.body)

  const updateProductUseCase = makeUpdateProductsUseCase()

  const { product } = await updateProductUseCase.execute({
    id,
    ...updatedProduct,
  })

  return reply.status(200).send({
    message: 'Produto atualizado!',
    product,
  })
}
