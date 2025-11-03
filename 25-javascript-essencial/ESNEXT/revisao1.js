{
    var a = 2
    let b = 3
    console.log(b) // 3
}
// console.log(a, b) // b is not defined

// Template string
const produto = 'iPad'
console.log(`${produto} é caro.
Outra Linha.`)

// Destructuring
const [e, d, u, ...tras] = "eduardo"
console.log(e,d,u, tras) //e d u [ 'a', 'r', 'd', 'o' ]

const [ x, y] = [1,2,3]
console.log(x,y) //1 2

const [ f, , g] = [1,2,3]
console.log(f,g) // 1 3

const { idade: i, nome} = {nome: "Ana", idade:20}
console.log(i, nome) //20 Ana