import React, { Component } from 'react'
import nope from '../assets/homelander-nuh-uh.gif'
export default class ClasseComp extends Component {
    state = {
        numero: this.props.numInicial,
        gif: false
    }
    // Solução 1 Contructor
    //   constructor(props){
    //     super(props)
    //     this.mais = this.mais.bind(this)
    //     this.menos = this.menos.bind(this)
    //   }
    //<button onClick={this.mais}>+</button>
    //<button onClick={this.menos}>-</button>

    //   Solução 3 Função Arrow
    //   mais = () =>{
    //     this.setState({ numero: this.state.numero + 1})
    //   }

    mais(val) {
        this.setState({ numero: this.state.numero + val })
        this.setState({ gif: false })
    }

    menos(val) {
        if (this.state.numero - val > 0) {
            this.setState({ numero: this.state.numero - val })
             this.setState({ gif: false })
        } else {
            this.setState({ gif: true })
        }
    }


    render() {
        return (
            <div>
                {this.state.gif === true ? <img src={nope} alt="" srcset="" /> : ''}
                <p>Número: {this.state.numero}</p>                
              
                <div>
                      {/* Solução 2 Arrow Function */}
                    <button onClick={() => this.mais(1)}>+</button>
                    <button onClick={() => this.menos(1)}>-</button>
                       <button onClick={() => this.mais(10)}>+10</button>
                    <button onClick={() => this.menos(10)}>-10</button>
                </div>


            </div>
        )
    }
}
