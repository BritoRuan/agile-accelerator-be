import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'
import { Product } from '@prisma/client'

interface IRegisterProductUseCaseRequest {
  nome: string
  categoria: string
  qtdEstoque: number
  preco: number
}

interface IRegisterProductUseCaseResponse {
  product: Product
}

export class RegisterProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    nome,
    categoria,
    qtdEstoque,
    preco,
  }: IRegisterProductUseCaseRequest): Promise<IRegisterProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      nome,
      categoria,
      qtdEstoque,
      preco,
    })

    return { product }
  }
}
