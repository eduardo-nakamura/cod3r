import React from 'react'
import Main from "../template/Main";

export default function Home(props) {
    return (
        <Main icon="home" title="Início" subtitle="CRUD" >
            <div className="display-4">
                Bem Vindo
            </div>
            <hr />
            <p className="mb-0">Sistema para exemplificar construção de um cadastro desenvolvido em react</p>
        </Main>
    )
}
