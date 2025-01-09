import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'
import { Product } from '@prisma/client'

interface IUpdateProductUseCaseRequest {
  id: string
  name?: string
  category?: string
  stockQuantity?: number
  price?: number
}

interface IUpdateProductUseCaseResponse {
  product: Product
}

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
    name,
    category,
    stockQuantity,
    price,
  }: IUpdateProductUseCaseRequest): Promise<IUpdateProductUseCaseResponse> {
    const findProduct = await this.productsRepository.findProductById(id)

    if (!findProduct) {
      throw new Error('Produto não encontrado.')
    }

    const updatedProduct = await this.productsRepository.update(id, {
      name: name ?? findProduct.name,
      category: category ?? findProduct.category,
      stockQuantity: stockQuantity ?? findProduct.stockQuantity,
      price: price ?? findProduct.price,
    })

    return { product: updatedProduct }
  }
}
