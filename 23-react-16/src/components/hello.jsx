import React from 'react'

export default function hello(props) {
    return (
        <div>
            <h2>2. Componentes com props</h2>
            <h3>Hello <strong>{props.name}</strong>!</h3>
            <React.Fragment>
            <h3>React Fragment</h3>
            </React.Fragment>
        </div>
    )
}
