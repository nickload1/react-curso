import React from 'react'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ =>
    <div id="app">
        <h1>Fundamento React</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Irineu Irinaves"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
