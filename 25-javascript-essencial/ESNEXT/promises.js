function falarDepoiDe(frase,segundos = 1 ){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            // reject('Erro')
        }, segundos * 1000)
    })
}

falarDepoiDe('teste')
    .then(frase => frase.concat(' ?!?'))
    .then(outrafrase => console.log(outrafrase))
    .catch( e => console.log(e)) // reject
