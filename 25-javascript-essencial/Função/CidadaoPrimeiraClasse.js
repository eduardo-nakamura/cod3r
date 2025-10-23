// Função em JS é First-Class Object
function function1() { }

// Armazenar em uma variável
const function2 = function () {}

// Armazenar em um arrray
const array = [function (a,b) { return a+b}, function1, function2]

console.log(array)
console.log(array[0](2,3))

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () { return 'Fala!'}
console.log(obj.falar())

// Passar funcção como param
function run(func){
    func()
}

run(function () { console.log('Executando...') })

// Função pode Retornar/Conter uma função

function soma(a,b){
    return function(c){
        console.log(`${a} + ${b} + ${c} = ${a+b+c}`)
    }
}

soma(1,2)(3)
const cincoMais = soma(2,3)
cincoMais(4)