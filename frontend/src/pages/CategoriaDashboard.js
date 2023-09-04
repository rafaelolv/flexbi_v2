import React, { useState } from "react";
import { useSelector } from "react-redux";

import style from  '../style/CategoriaDashboard.module.css';

import AreaDadosGeraisCategoriasProdutos from '../components/estrutura/AreaDadosGeraisCategoriasProdutos';
import BarChart from '../components/graficos/BarChart';
import MultiAxisLineChart from '../components/graficos/MultiAxisLineChart';


const CategoriaDashboard = () => {

    const [fileData, setFileData] = useState(null);

    const dadosCsv = useSelector(state => state);

    console.log("----- dadosCsv:");
    console.log(dadosCsv);


    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const values = [46, 78, 90, 25, 50, 57, 89, 33, 17, 67]




    // 
    function getListaTopMaisVendidosNoMes() {

    }


    return (
        <main>
            <div className={style.boxSuperiorCategoriaDashboard}>
                <div>
                    <AreaDadosGeraisCategoriasProdutos />
                </div>
                <div className={style.barChartPeriodo}>
                    <div>
                        <BarChart labels={labels} values={values} />
                    </div>
                </div>
            </div>
            <div className={style.boxInferiorCategoriaDashboard}>
                <div className={style.areaTops}>
                    <MultiAxisLineChart />
                </div>
                <div className={style.areaGraficoCategoriasProdutosMes}>
                    <div>
                        <BarChart labels={labels} values={values} />
                    </div>
                </div>
            </div>
        </main>

    )
};

export default CategoriaDashboard;