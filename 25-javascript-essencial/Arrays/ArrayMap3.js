Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Array apenas com preços
const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.preco
let teste = carrinho.map2(paraObjeto).map2(preco)
console.log(carrinho.map2(paraObjeto).map2(preco))