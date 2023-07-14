import React from "react";

import style from "../../style/estrutura/AreaMensalHome.module.css";


import AreaGraficosMes from "../graficos/AreaGraficosMes";
import AreaInfosMes from "./AreaInfosMes";

const BoxAreaMensal = () => {



    return (
        <div className={style.boxAreaMensal}>
            <AreaGraficosMes />
            <AreaInfosMes/>
            
            {/* <div></div> */}
        </div>
    )
}

export default BoxAreaMensal;