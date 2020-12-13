export default {
  Query: {
    products: (parent, args, {dataSources}, info) => {
      return dataSources.productAPI.getProducts()
    },
    currencies: (parent, args, {dataSources}, info) => {
      return dataSources.currencyAPI.getCurrencies()
    },
    exchangeFromOneUSD: (parent, args, {dataSources}, info) => {
      return dataSources.currencyAPI.getExchangeFromOneUSD(args.currencyCode)
    }
  }
}