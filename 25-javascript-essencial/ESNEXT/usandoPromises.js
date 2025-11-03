const http = require('http')
const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra.toUpperCase()}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('a').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     console.log(nomes)
//     getTurma('b').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         console.log(nomes)
//         getTurma('c').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('a'), getTurma('b'), getTurma('c')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => `${aluno.id} ${aluno.nome}`))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))

getTurma('d').catch(e => console.log(e))