import React, {useState, useEffect} from 'react'

export default function ReactHook() {
    const [cont, setCont] = useState(0)
    const [odd, setOdd] = useState('é impar')

    useEffect(() => {
        cont % 2 === 0 ? setOdd('é par') : setOdd('é impar')
        console.log('----')
    })

    return (
        <div>
            <h2>Hooks</h2>
            <h3>{cont} {odd}</h3>
            <button onClick={() => setCont(cont + 1)} >Incr</button>
            <button onClick={() => setCont(cont - 1)} >Decr</button>
        </div>
    )
}
