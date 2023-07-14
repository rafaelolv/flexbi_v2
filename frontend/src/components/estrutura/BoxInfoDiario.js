import { React } from 'react';

import style from "../../style/estrutura/BoxAreaDiario.module.css";


const BoxInfoDiario = ({ dataBoxInfo }) => {



    return (
        <div className={style.boxInfo}>
            <header>
                { dataBoxInfo }
                <h4>Produto mais vendido</h4>
            </header>
            <div>
                <h3>R$ 110,00</h3>
            </div>
        </div>
    )
}

export default BoxInfoDiario;