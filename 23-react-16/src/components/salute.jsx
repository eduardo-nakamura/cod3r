import React, { Component } from 'react'

export default class salute extends Component {

    
    constructor(props){
        super(props)

        this.setType = this.setType.bind(this)
        this.setName = this.setName.bind(this)
    }
    
    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType(e) {
        this.setState({ type: e.target.value})
    }

    setName(e) {
        this.setState({ name: e.target.value})
    }

    render() {
        const { type, name } = this.state
        return (
            <div>
                <h2>4. Componente de Classe</h2>
                <h3>{type} {name}</h3>

                <input type="text" placeholder='Tipo...' value={type} onChange={this.setType} />
                <input type="text" placeholder='Nome...' value={name} onChange={this.setName} />
            </div>
        )
    }
}
