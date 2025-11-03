const notas = [10.0, 7.0, 6.5, 5.2, 3.4, 1.3]

// sem callback
let notasBaixas = []
for(let i in notas){
    if (notas[i] < 3) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixasCallback = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixasCallback)

// callback Arrow Function
const notasBaixasCallbackArrow = notas.filter(nota => nota < 6)
console.log(notasBaixasCallbackArrow)