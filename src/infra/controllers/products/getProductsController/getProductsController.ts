import { makeGetProductsUseCase } from '@/module/useCases/factories/makeGetProductsUseCase'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function getProducts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getProductsUseCase = makeGetProductsUseCase()

  const { products } = await getProductsUseCase.execute()

  return reply.status(200).send({
    products,
  })
}
