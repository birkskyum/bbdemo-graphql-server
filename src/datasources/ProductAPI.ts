import { products } from '../data/products'
import { DataSource } from 'apollo-datasource'

export class ProductAPI extends DataSource {
  
  constructor() {
    super()
  }

  getProducts() {
    return products
  }
}

