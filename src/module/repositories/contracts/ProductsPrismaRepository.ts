import { Prisma, Product } from '@prisma/client'
import { ProductsRepository } from './ProductsRepository'
import { prisma } from '@/lib/prisma'

export class ProductsPrismaRepository implements ProductsRepository {
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const product = await prisma.product.create({
      data,
    })

    return product
  }

  async findMany(): Promise<Product[]> {
    return await prisma.product.findMany()
  }

  async findProductById(id: string): Promise<Product | null> {
    return await prisma.product.findUnique({
      where: {
        id,
      },
    })
  }

  async findProductByName(nome: string): Promise<Product[]> {
    return await prisma.product.findMany({
      where: {
        nome: {
          contains: nome,
          mode: 'insensitive',
        },
      },
    })
  }

  async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data,
    })

    return product
  }

  async delete(id: string): Promise<boolean> {
    try {
      await prisma.product.delete({
        where: {
          id,
        },
      })
      return true
    } catch (error) {
      return false
    }
  }
}
