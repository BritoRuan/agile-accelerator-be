import { FastifyInstance } from 'fastify'
import { register } from './registerProductController/registerProductController'
import { getProducts } from './getProductsController/getProductsController'
import { fetchProduct } from './fetchProductsController/fetchProductsController'
import { deleteProduct } from './deleteProductsController/deleteProductsController'
import { updateProduct } from './updateProductsController/updateProductsController'

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products', getProducts)
  app.post('/products', register)
  app.get('/products/:id', fetchProduct)
  app.delete('/products/:id', deleteProduct)
  app.put('/products/:id', updateProduct)
}
