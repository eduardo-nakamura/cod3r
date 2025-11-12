import React from 'react'
import Member from './member'

export default function Family(props) {
  return (
    <div>
      <Member nome="João" sobrenome="Silva" />
      <Member nome="Maria" sobrenome="Silva" />
      <Member nome="Jose" sobrenome="Silva" />
      <Member nome="Pedro" sobrenome="Silva" />
    </div>
  )
}
