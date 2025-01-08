import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'
import { Product } from '@prisma/client'

interface IGetProductUseCaseResponse {
  products: Product[]
}

export class GetProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<IGetProductUseCaseResponse> {
    const products = await this.productsRepository.findMany()

    return { products }
  }
}
