import { ProductsPrismaRepository } from '@/module/repositories/contracts/ProductsPrismaRepository'
import { GetProductsUseCase } from '../products/getProductsUseCase/getProductsUseCase'

export function makeGetProductsUseCase() {
  const productsRepository = new ProductsPrismaRepository()
  const getProductsUseCase = new GetProductsUseCase(productsRepository)

  return getProductsUseCase
}
