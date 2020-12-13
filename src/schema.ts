import { gql } from 'apollo-server'

export default gql`
  type Query {
    products: [Product],
    currencies: [Currency],
    exchangeFromOneUSD(currencyCode: String!): Float
  }
 
  type Currency {
    name: String!
    symbol: String!
    symbolNative: String!
    decimalDigits: Int!
    rounding: Int!
    code: String!
    namePlural: String!
    countries: [String]!
  }

  type Product {
    id: ID!
    name: String!
    priceUSD: Float!
    # price: String
    photos: [String]!
  }
`