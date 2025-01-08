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
    nome: z.string().min(1).optional(),
    categoria: z.string().optional(),
    qtdEstoque: z.number().int().optional(),
    preco: z.number().optional(),
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
