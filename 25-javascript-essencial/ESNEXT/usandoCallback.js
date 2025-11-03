const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('a', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('b', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
        getTurma('c', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
