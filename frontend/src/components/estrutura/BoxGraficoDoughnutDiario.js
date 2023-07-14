import React from "react"

import ChartDoughnutAndamentoPorcentagem from "../graficos/ChartDoughnutAndamentoPorcentagem";

import style from "../../style/graficos/GraficosHome.module.css"; 


const BoxGraficoDoughnutDiario = () => {


    return (
        <div className={style.boxGraficoDoughnutDiario}>
            <ChartDoughnutAndamentoPorcentagem />
        </div>
    )
}

export default BoxGraficoDoughnutDiario;