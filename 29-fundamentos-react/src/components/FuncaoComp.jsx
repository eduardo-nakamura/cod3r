import React from 'react'
const aprovados = ['Paula', 'Roberta', 'Gustavo']

export default function FuncaoComp(props) {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <div>
            <h3>Aprovados</h3>
            <ul>
                {gerarItens(aprovados)}
            </ul>
        </div>
    )
}
