const fabricante = ["Blokees", "Bandai", "Estrela"]

function imprime(nome, indice){
    console.log(`${indice + 1}. ${nome}`)    
}

console.log('----fabricante.forEach(imprime)')
fabricante.forEach(imprime)
console.log('----fabricante.forEach(fabr => console.log(fabr))')
fabricante.forEach(fabr => console.log(fabr))