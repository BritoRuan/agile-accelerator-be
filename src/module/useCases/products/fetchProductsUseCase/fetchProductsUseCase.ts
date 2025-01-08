import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'
import { Product } from '@prisma/client'

interface IFetchProductUseCaseRequest {
  id?: string
  nome?: string
}

interface IFetchProductUseCaseResponse {
  product: Product | Product[]
}

export class FetchProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
    nome,
  }: IFetchProductUseCaseRequest): Promise<IFetchProductUseCaseResponse> {
    if (!id && !nome) {
      throw new Error(
        'Forneça um ID ou um nome para realizar a busca do produto',
      )
    }

    const product = id
      ? await this.productsRepository.findProductById(id)
      : await this.productsRepository.findProductByName(nome as string)

    if (!product || (Array.isArray(product) && product.length === 0)) {
      throw new Error(
        id
          ? 'Nenhum produto encontrado com ID fornecido'
          : 'Nenhum produto encontrado com o nome fornecido',
      )
    }

    return { product }
  }
}
