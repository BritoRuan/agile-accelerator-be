import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
  findMany(): Promise<Product[]>
  update(id: string, data: Prisma.ProductUpdateInput): Promise<Product>
  delete(id: string): Promise<boolean>
  findProductById(id: string): Promise<Product | null>
  findProductByName(name: string): Promise<Product[]>
}
