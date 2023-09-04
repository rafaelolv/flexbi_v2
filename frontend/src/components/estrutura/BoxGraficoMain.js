import React from "react";
import { useSelector } from "react-redux";

import LineChart from "../graficos/LineChart"; 

import style from "../../style/estrutura/BoxGraficoMain.module.css";


const BoxGraficoMain = ({ fileData }) => {

    const infosDashboard = useSelector(state => state.dashboard);

    const dadosLineChart = {
        labelsChart: [],
        valuesChart: [],
    } 

    const labelsChart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const valuesChart = [50, 85, 73, 69, 87, 39, 14, 68, 97, 59, 44, 39, 60, 73, 89, 35, 58, 29, 44, 77, 98, 40, 50, 56, 67, 89, 45, 78, 70, 70, 63];


    // Função responsável por gerar os valores totais de vendas de cada dia de um mês
    const gerarValorTotalDiasByMesAno = (dataFrame, infosDasboard, mesSelecionado, anoSelecionado) => {
        // let defaultMonthValue = 0;
        let arrayDiasMes = [];
        // let mes = mesSelecionado != null ? mesSelecionado : defaultMonthValue;

        let datas = dataFrame[infosDashboard.data].values;
        let valoresVendidos = dataFrame[infosDashboard.valor].values;

        if(mesSelecionado !== null) {
            datas.forEach((data, index) => {

                const date = new Date(data);

                if(date.getMonth() === mesSelecionado && date.getFullYear() === anoSelecionado) {
                    arrayDiasMes[date.getDate() - 1] = arrayDiasMes[date.getDate() - 1] + valoresVendidos[index];
                }
            })
            return arrayDiasMes;

        } else {
            const dataCorrente = new Date();

            datas.forEach((data, index) => {

                const dataCorrente = new Date();

                if(data.getMonth() === dataCorrente.getMonth() && dataCorrente.getFullYear() === anoSelecionado) {
                    arrayDiasMes[data.getDate() - 1] = arrayDiasMes[data.getDate() - 1] + valoresVendidos[index];
                }
            })
            return arrayDiasMes;
        }
    }


    const getDadosLineChart = () => {
        dadosLineChart.valuesChart = [gerarValorTotalDiasByMesAno(fileData, infosDashboard, 11, 2016)];

        dadosLineChart.labelsChart = dadosLineChart.valuesChart.map((index) => {
            return index + 1;
        })

        return dadosLineChart;
    }



    return (
        <div className={style.boxGraficoMain}>
            <div className={style.graficoMain}>
                <LineChart labels={labelsChart} dataValues={valuesChart} />
            </div>
        </div>
    )
}

export default BoxGraficoMain;