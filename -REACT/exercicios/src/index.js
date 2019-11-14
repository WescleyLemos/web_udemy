import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'





ReactDOM.render(
    <div>
        <Pai nome="João" sobrenome=" Silva">
        {/* Como passo os componentes FIlhos aqui?  */}
            <Filho nome="Pedro"  />
            <Filho nome="Pedro"  />
            <Filho nome="Pedro"  />
            
        </Pai>
    </div>
    , document.getElementById('root'))