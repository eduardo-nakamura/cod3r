const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()