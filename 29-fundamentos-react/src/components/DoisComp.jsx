import React from 'react'

const CompA = props => (
<div>
    <h2>Dois Componentes</h2>
    <p>{`Primeiro diz: ${props.valor}`}</p>
</div>
)

const CompB = props => <p>{`Segundo diz: ${props.valor}`}</p>

export { CompA,CompB }