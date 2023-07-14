import React from "react";

import GraficoDoughnutAndamentoPorcentagem from "../graficos/GraficoDoughnutAndamentoPorcentagem";
import LineAndamentoLucroMes from "../graficos/LineAndamentoLucroMes";

import style from "../../style/estrutura/AreaMensalHome.module.css";


const AreaGraficosMes = () => {


    return (
        <div className={style.boxAreaGraficos}>
            <GraficoDoughnutAndamentoPorcentagem />
            <LineAndamentoLucroMes />
        </div>
    )
}

export default AreaGraficosMes;