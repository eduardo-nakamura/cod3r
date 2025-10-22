import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default function parent(props) {
  return (
    <div>
        <h2>5. Componente Pai e Filho</h2>
        <h3>{props.name} {props.lastName}</h3>
        <h3>Filhos</h3>
        <ul>            
            {childrenWithProps(props)}   
        </ul>
    </div>
  )
}
