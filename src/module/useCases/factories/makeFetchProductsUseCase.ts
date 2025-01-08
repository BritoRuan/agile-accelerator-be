import { ProductsPrismaRepository } from '@/module/repositories/contracts/ProductsPrismaRepository'
import { FetchProductUseCase } from '../products/fetchProductsUseCase/fetchProductsUseCase'

export function makeFetchProductsUseCase() {
  const productsRepository = new ProductsPrismaRepository()
  const fetchProductUseCase = new FetchProductUseCase(productsRepository)

  return fetchProductUseCase
}
