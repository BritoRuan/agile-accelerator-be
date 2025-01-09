import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'
import { Product } from '@prisma/client'

interface IRegisterProductUseCaseRequest {
  name: string
  category: string
  stockQuantity: number
  price: number
}

interface IRegisterProductUseCaseResponse {
  product: Product
}

export class RegisterProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    category,
    stockQuantity,
    price,
  }: IRegisterProductUseCaseRequest): Promise<IRegisterProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      name,
      category,
      stockQuantity,
      price,
    })

    return { product }
  }
}
