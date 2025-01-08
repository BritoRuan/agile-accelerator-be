import { ProductsPrismaRepository } from '@/module/repositories/contracts/ProductsPrismaRepository'
import { UpdateProductUseCase } from '../products/updateProductsUseCase/updateProductsUseCase'

export function makeUpdateProductsUseCase() {
  const productsRepository = new ProductsPrismaRepository()
  const updateProductUseCase = new UpdateProductUseCase(productsRepository)

  return updateProductUseCase
}
