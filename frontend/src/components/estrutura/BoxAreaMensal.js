import React from "react";

import style from "../../style/estrutura/AreaMensalHome.module.css";

import AreaGraficosMes from "../graficos/AreaGraficosMes";
import AreaInfosMes from "./AreaInfosMes";

const BoxAreaMensal = ({ fileData }) => {

    console.log("fileData");
    console.log(fileData);


    return (
        <div className={style.boxAreaMensal}>
            <AreaGraficosMes fileData={fileData} />
            <AreaInfosMes fileData={fileData} />
            
            {/* <div></div> */}
        </div>
    )
}

export default BoxAreaMensal;