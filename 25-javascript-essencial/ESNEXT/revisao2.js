// Object.value/Object.entries
const obj = { a:1, b:2, c:3}
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const nome = "Zé"

const pessoa = {
    nome,
    ola() {
        return `Olá, me chamo ${nome}`
    }
}

console.log(pessoa.ola())

// CLasse
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au'
    }
}
const fido = new Cachorro()
console.log(fido.falar())