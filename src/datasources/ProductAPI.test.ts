import { ProductAPI } from './ProductAPI'
import { IProduct } from '../data/products'
const currencyAPI = new ProductAPI() 

test('getProducts', ()=>{
  const products: IProduct[] = currencyAPI.getProducts()
  expect(products.length).toBeGreaterThan(2)
  expect(products[0].priceUSD).toBeGreaterThan(1)
  expect(products[0].name.length).toBeGreaterThan(3)
  expect(products[0].photos.length).toBeGreaterThan(0)
})
