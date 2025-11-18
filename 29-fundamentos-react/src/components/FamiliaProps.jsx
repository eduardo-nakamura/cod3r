import React from 'react'

export default function FamiliaProps(props) {
  return (
    <div>
        <h2>Família Props</h2>
          {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome })} */}
          {React.Children.map(props.children, child => React.cloneElement(child, {...props}))}
    </div>
  )
}
