import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family sobrenome="Silva">   
            <Member nome="João" />
            <Member nome="Rafael" />
            <Member nome="Julia" />
        </Family>
    </div>

, document.getElementById('app'))