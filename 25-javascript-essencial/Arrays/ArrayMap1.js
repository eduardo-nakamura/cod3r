const nums = [1,2,3,4,5]

let resultado1 = nums.map(i => i * 2)
console.log(resultado1) 

const soma10 = e => e + 10;
const triplo = e => e * 3;
const formatDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
let resultado2 = nums.map(soma10).map(triplo).map(formatDinheiro)
console.log(resultado2)