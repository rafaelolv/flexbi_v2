import React, {useState} from "react";

import AreaGraficosMes from "../graficos/AreaGraficosMes";
import GraficoDoughnutAndamentoPorcentagem from "../graficos/GraficoDoughnutAndamentoPorcentagem";
import BoxGraficoDoughnutDiario from "./BoxGraficoDoughnutDiario";
import BarraProgresso from "../graficos/BarraProgresso";
import AreaInfosDiario from "./AreaInfosDiario";


import style from "../../style/estrutura/BoxAreaDiario.module.css";
import styleGraficos from "../../style/graficos/GraficosHome.module.css";



const BoxAreaDiario = () => {

    

    return (
        <div className={style.boxAreaDiario}>

            <BoxGraficoDoughnutDiario />
            
            <div className={styleGraficos.boxLineAndamentoDiario}>
                <p>R$ 789,00</p>
                <BarraProgresso />
            </div>    
            <div className={style.boxInfoDiario}>
                <AreaInfosDiario />
            </div>
        </div>
    )
}

export default BoxAreaDiario;