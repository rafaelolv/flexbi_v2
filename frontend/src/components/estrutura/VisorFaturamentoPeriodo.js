import { React } from 'react';

import style from  '../../style/CategoriaDashboard.module.css';


const VisorFaturamentoPeriodo = () => {



    return (
        <div className={style.visorFaturamentoPeriodo}>
            <h4>
                Faturamento total no mês
            </h4>
            <h3>
                R$ 530,00
            </h3>
        </div>
    )
}

export default  VisorFaturamentoPeriodo;