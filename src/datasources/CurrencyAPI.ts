import { currencies } from '../data/currencies'
import { DataSource } from 'apollo-datasource'
import axios from 'axios'

export class CurrencyAPI extends DataSource {
  
  constructor() {
    super()
  }

  getCurrencies() {

    currencies.map((currency)=>{
      if (currency.code == "ZMK") {
        currency.code = "ZMW"
      }
    })

    return currencies

  }

  async getExchangeFromOneUSD(currencyCode: string) {
    
    const exchange = await axios.get([
        'http://data.fixer.io/api/latest',
        '?access_key=bbd02ced40a48846160e0b8cb46ec8e8',
        '&base=EUR', // TODO: Paid plan can set this to USD
        '&symbols=USD,',
        currencyCode].join(''))
        .then((result)=>{
          return result.data
        })

    const exchangeFromOneUSD = exchange.rates[currencyCode.toUpperCase()] / exchange.rates.USD
    console.log(exchangeFromOneUSD)
    return exchangeFromOneUSD
  }
}


