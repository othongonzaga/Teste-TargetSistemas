const data = require('./dados.json')

let lowerBilling = data.reduce((lower, billing) => {
  if (billing.valor == 0) return lower
  if (billing.valor < lower) lower = billing.valor
  return lower
}, Infinity)
console.log(lowerBilling) 

let higherBilling = data.reduce((lower, billing) => {
  if (billing.valor > lower) lower = billing.valor
  return lower
}, 0)
console.log(higherBilling)