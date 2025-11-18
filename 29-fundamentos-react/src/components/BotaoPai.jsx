import React from 'react'
import BotaoFilho from './BotaoFilho'

export default function BotaoPai() {
    const notificarSaidaConst = lugar => alert(`Liberado para sair para ${lugar}`)
    return (
        <div>
            <BotaoFilho notificarSaida={notificarSaidaConst} />
        </div>
    )
}
