import React from 'react'

export default function PropsComp(props) {
  const isLegal = true
  return (
    <div>
        <h2>{props.value}</h2>
        <p>{1 + 1}</p>
        <p>{`Legal? ${isLegal ? 'Sim' : 'Não'}`}</p>
    </div>
  )
}
