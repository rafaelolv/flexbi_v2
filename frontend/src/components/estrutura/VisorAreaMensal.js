import { React } from 'react';


import style from '../../style/estrutura/AreaMensalHome.module.css';


const VisorAreaMensal = () => {


    return (
        <div className={style.boxVisorAreaMensal}>
            <h4>Valor alcançado no mês</h4>
            <h1>R$ 824</h1>
        </div>
    )
}

export default VisorAreaMensal;