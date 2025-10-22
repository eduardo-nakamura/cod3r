import React from 'react'
import { createRoot } from 'react-dom/client';
import First from './components/first'
import Hello from './components/hello'
import { GoodMorning, GoodNight, Multiplos } from './components/multi';
import Salute from './components/salute'
import Parent from './components/parent';
import Child from './components/child';
const container = document.getElementById('root');
const root = createRoot(container);
const nome = "Eduardo"
const type = "Bom Dia"

root.render(
    <div>
        <h1>Exercícios</h1>
        <First />
        <hr />
        <Hello name={nome} />
        <hr />
        <Multiplos />
        <GoodMorning name={nome} />
        <GoodNight name={nome} />
        <hr />
        <Salute name={nome} type={type} />
        <hr />
        <Parent name="Paulo" lastName="Silva" >
            <Child name="Pedro"  />
            <Child name="Carla"  />
        </Parent>
        <hr />
    </div>
)