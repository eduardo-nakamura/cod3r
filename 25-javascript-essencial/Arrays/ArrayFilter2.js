Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])          
        }
    }
    return newArray
}

const carrinho = [
    { nome: "Notebook", preco: 2499.45 , fragil: true},
    { nome: "Ipad", preco: 4799.00, fragil: true },
    { nome: "Copo de Vidro", preco: 13.45, fragil: true },
    { nome: "Borracha", preco: 2.50, fragil: false },
]
const preco = produto => produto.preco < 500
const fragil = produto => produto.fragil === true

console.log(carrinho.filter2(e => e.fragil === true))
console.log(carrinho.filter2(preco).filter2(fragil))