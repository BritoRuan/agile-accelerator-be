import { ProductsPrismaRepository } from '@/module/repositories/contracts/ProductsPrismaRepository'
import { DeleteProductUseCase } from '../products/deleteProductsUseCase/deleteProductsUseCase'

export function makeDeleteProductsUseCase() {
  const productsRepository = new ProductsPrismaRepository()
  const deleteProductUseCase = new DeleteProductUseCase(productsRepository)

  return deleteProductUseCase
}
