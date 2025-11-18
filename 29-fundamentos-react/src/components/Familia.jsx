import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default function Familia(props) {
  return (
    <div>
        <FamiliaMembro nome="João" sobrenome={props.sobrenome} />
        <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
        <FamiliaMembro nome="Maria" sobrenome={props.sobrenome} />
    </div>
  )
}
