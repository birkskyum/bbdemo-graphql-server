import { CurrencyAPI } from './CurrencyAPI'
import {ICurrency } from '../data/currencies'
const currencyAPI = new CurrencyAPI() 

test('getCurrencies', ()=>{
  const currencies: ICurrency[] = currencyAPI.getCurrencies()
  expect(currencies.length).toBeGreaterThan(100)
  expect(currencies[0].code.length).toBe(3)
  expect(currencies[0].name.length).toBeGreaterThan(3)
  expect(currencies[0].namePlural.length).toBeGreaterThan(3)
})


test('getExchangeFromOneUSD', async ()=>{
  const exchangeRate = await currencyAPI.getExchangeFromOneUSD('DKK')
  expect(exchangeRate).toBeGreaterThan(5)
  expect(exchangeRate).toBeLessThan(9)
})