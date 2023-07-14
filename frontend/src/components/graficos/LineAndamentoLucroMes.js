import React from "react";

import BarraProgresso from "./BarraProgresso";

import style from "../../style/estrutura/AreaMensalHome.module.css";


const LineAndamentoLucroMes = () => {


    return (
        <div className={style.boxLineAndamentoMes}>
            <p>R$ 789,00</p>
            <BarraProgresso />
            
        </div>
    )
}

export default LineAndamentoLucroMes;