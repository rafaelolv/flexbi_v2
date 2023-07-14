import React from "react";

import LineChart from "../graficos/LineChart"; 

import style from "../../style/estrutura/BoxGraficoMain.module.css";


const BoxGraficoMain = () => {

    const labelsChart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const valuesChart = [50, 85, 73, 69, 87, 39, 14, 68, 97, 59, 44, 39, 60, 73, 89, 35, 58, 29, 44, 77, 98, 40, 50, 56, 67, 89, 45, 78, 70, 70, 63];

    return (
        <div className={style.boxGraficoMain}>
            <div className={style.graficoMain}>
                <LineChart labels={labelsChart} dataValues={valuesChart} />
            </div>
        </div>
    )
}

export default BoxGraficoMain;