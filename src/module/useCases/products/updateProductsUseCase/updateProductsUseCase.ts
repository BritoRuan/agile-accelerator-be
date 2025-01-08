import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'
import { Product } from '@prisma/client'

interface IUpdateProductUseCaseRequest {
  id: string
  nome?: string
  categoria?: string
  qtdEstoque?: number
  preco?: number
}

interface IUpdateProductUseCaseResponse {
  product: Product
}

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
    nome,
    categoria,
    qtdEstoque,
    preco,
  }: IUpdateProductUseCaseRequest): Promise<IUpdateProductUseCaseResponse> {
    const findProduct = await this.productsRepository.findProductById(id)

    if (!findProduct) {
      throw new Error('Produto não encontrado.')
    }

    const updatedProduct = await this.productsRepository.update(id, {
      nome: nome ?? findProduct.nome,
      categoria: categoria ?? findProduct.categoria,
      qtdEstoque: qtdEstoque ?? findProduct.qtdEstoque,
      preco: preco ?? findProduct.preco,
    })

    return { product: updatedProduct }
  }
}
