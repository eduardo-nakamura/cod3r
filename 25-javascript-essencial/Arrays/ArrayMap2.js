const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Array apenas com preços
let teste = carrinho.map(function (e) {
    let line = JSON.parse(e)
    return line.preco
})
console.log(teste)