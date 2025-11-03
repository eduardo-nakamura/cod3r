const carrinho = [
    { nome: "Notebook", preco: 2499.45 , fragil: true},
    { nome: "Ipad", preco: 4799.00, fragil: true },
    { nome: "Copo de Vidro", preco: 13.45, fragil: true },
    { nome: "Borracha", preco: 2.50, fragil: false },
]
const preco = produto => produto.preco < 500
const fragil = produto => produto.fragil === true

console.log(carrinho.filter(e => e.fragil === true))
// console.log(carrinho.filter(e => e.preco > 1000))
console.log(carrinho.filter(preco).filter(fragil))