import React from 'react';
import ReactDOM from 'react-dom/client';
import PrimeiroComp from './components/PrimeiroComp';
import ArrowComp from './components/ArrowComp';
import PropsComp from './components/PropsComp';
import { CompA, CompB } from './components/DoisComp';
import MultiElem from './components/MultiElem';
import Familia from './components/Familia';
import PropsChildren from './components/PropsChildren';
import FamiliaMembro from './components/FamiliaMembro';
import FamiliaProps from './components/FamiliaProps'
import FuncaoComp from './components/FuncaoComp';
import BotaoPai from './components/BotaoPai';
import ClasseComp from './components/ClasseComp';
import ReactHooks from './components/ReactHook';
const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);


root.render(
    <React.StrictMode>
        <h1>React</h1>
        <ul>
            <li>1. Criar projeto usando create-react-app</li>
            <li>2. Limpar projeto (Apagar arquivos dentro da pasta src, criar um index.js)</li>
        </ul>
        <hr />
        <PrimeiroComp />
        <hr />
        <ArrowComp />
        <hr />
        <PropsComp value="Componente com Props" />
        <hr />
        <CompA valor="Primeiro" />
        <CompB valor="Segundo" />
        <hr />
        <MultiElem />
        <hr />
        <h2>Família / Membro</h2>
        <Familia sobrenome="Silvas" />
        <hr />       
        <PropsChildren>
            <p>propss</p>
        </PropsChildren>
        <hr />
        <FamiliaProps sobrenome="Pereiraaaa">
            <FamiliaMembro nome="André" />
            <FamiliaMembro nome="ps" />
        </FamiliaProps>
        <hr />
        <h2>Componente Com Função</h2>
        <FuncaoComp />
        <hr />
        <h2>Comunicação Indireta entre 2 componentes</h2>
        <BotaoPai />
        <hr />
        <h2>Componente de Classe</h2>
        <ClasseComp numInicial={0} />
        <hr />
        <h2>React hooks</h2>
        <ReactHooks />
    </React.StrictMode>
);