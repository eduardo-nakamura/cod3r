import React, { useState } from 'react'

export default function BotaoFilho(props) {
  const [local, setLocal] = useState('praia')  
  const handleChange = (event) => { 
    setLocal(event.target.value);
  };
  return (
    <div>
      <input type="text" value={local} onChange={handleChange} />
      <button style={{marginLeft:'10px'}} onClick={() => props.notificarSaida(local)}>Vou sair para o/a {local}</button>
    </div>
  )
}
