const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const bolsista = [
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const naoBolsista = [
    { nome: 'João', nota: 7.3, bolsista: false},    
    { nome: 'Pedro', nota: 9.8, bolsista: false},    
]

// Tedos os alunos são bolsistas
const isBolsista = (resultado, bolsista) => resultado && bolsista

const resultado = alunos.map(a => a.bolsista).reduce(isBolsista)
console.log(resultado)
// Algum aluno é bolsista
const anyBolsista = (resultado, bolsista) => resultado || bolsista

const resultado2 = alunos.map(a => a.bolsista).reduce(anyBolsista)
console.log(resultado2)
