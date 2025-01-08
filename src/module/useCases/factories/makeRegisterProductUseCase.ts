import { ProductsPrismaRepository } from '@/module/repositories/contracts/ProductsPrismaRepository'
import { RegisterProductUseCase } from '../products/registerProductsUseCase/registerProductsUseCase'

export function makeRegisterProductUseCase() {
  const productsRepository = new ProductsPrismaRepository()
  const registerProductUseCase = new RegisterProductUseCase(productsRepository)

  return registerProductUseCase
}
