import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './componente'

ReactDOM.render(
    <div>
        <Primeiro value='teste' />
        <Segundo value="teste" />
    </div>

, document.getElementById('app'))