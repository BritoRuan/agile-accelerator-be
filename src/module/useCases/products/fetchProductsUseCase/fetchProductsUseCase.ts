import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'
import { Product } from '@prisma/client'

interface IFetchProductUseCaseRequest {
  id?: string
  name?: string
}

interface IFetchProductUseCaseResponse {
  product: Product | Product[]
}

export class FetchProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
    name,
  }: IFetchProductUseCaseRequest): Promise<IFetchProductUseCaseResponse> {
    if (!id && !name) {
      throw new Error(
        'Forneça um ID ou um name para realizar a busca do produto',
      )
    }

    const product = id
      ? await this.productsRepository.findProductById(id)
      : await this.productsRepository.findProductByName(name as string)

    if (!product || (Array.isArray(product) && product.length === 0)) {
      throw new Error(
        id
          ? 'Nenhum produto encontrado com ID fornecido'
          : 'Nenhum produto encontrado com o name fornecido',
      )
    }

    return { product }
  }
}
