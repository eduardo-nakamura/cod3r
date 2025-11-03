// Usar Spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.80 }
const clone = {ativo: true, ...funcionario}
console.log(clone)

// Spread com Array
const grupoA = ['Joao', 'Pedro']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)