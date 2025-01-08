import { ProductsRepository } from '@/module/repositories/contracts/ProductsRepository'

interface IDeleteProductUseCaseRequest {
  id: string
}

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ id }: IDeleteProductUseCaseRequest) {
    const findProduct = await this.productsRepository.findProductById(id)

    if (!findProduct) {
      throw new Error('Produto não encontrado.')
    }

    const exclusionProcess = await this.productsRepository.delete(id)

    if (!exclusionProcess) {
      throw new Error('Erro ao excluir o produto.')
    }
  }
}
