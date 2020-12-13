import { ApolloServer } from 'apollo-server'

import resolvers from './resolvers'
import typeDefs from './schema' 
import { ProductAPI } from './datasources/ProductAPI'
import { CurrencyAPI } from './datasources/CurrencyAPI'

const dataSources = () => ({
  productAPI: new ProductAPI(),
  currencyAPI: new CurrencyAPI(),
});

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  dataSources,
  introspection:true,
  playground: true,
})

server.listen({port: 8000}).then((url)=>{
  console.log('Current url: ', url)
})