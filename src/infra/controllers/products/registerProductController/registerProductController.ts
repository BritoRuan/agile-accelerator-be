import { makeRegisterProductUseCase } from '@/module/useCases/factories/makeRegisterProductUseCase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerProductBodySchema = z.object({
    nome: z.string().min(1),
    categoria: z.string(),
    qtdEstoque: z.number().int(),
    preco: z.number(),
  })

  const { nome, categoria, qtdEstoque, preco } =
    registerProductBodySchema.parse(request.body)

  const registerProductUseCase = makeRegisterProductUseCase()

  await registerProductUseCase.execute({
    nome,
    categoria,
    qtdEstoque,
    preco,
  })

  return reply.status(201).send()
}
