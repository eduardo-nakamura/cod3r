import React from 'react'
import Member from './member'
import { ChildrenWithProps } from '../../utils/reactUtils'

export default function Family(props) {
  return (
    <div>       
      <h2>Família {props.sobrenome}</h2>      
      { ChildrenWithProps(props.children, props)}
    </div>
  )
}
