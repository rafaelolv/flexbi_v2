import React, { useState } from "react";
import { useSelector } from "react-redux";

import PieChart from "../graficos/PieChart";
import VisorFaturamentoPeriodo from "./VisorFaturamentoPeriodo";

import { getListaValoresVendaPorItem, geraValorTotalMesByMesAno } from "../../utils/dashboardFunctions";

import style from "../../style/estrutura/AreaMensalHome.module.css";


const AreaDadosGeraisCategoriasProdutos = () => {

    const dadosCsv = useSelector(state => state.dadosCsv);
    const infosDashboard = useSelector(state => state.dashboard);
    let categorias = fileData[infosDashboard.categoria].values;


    const valorTotal = geraValorTotalMesByMesAno(dadosCsv, infosDashboard, 11, 2016);

    // Função que retorna uma lista com os 3 itens (pode ser produtos, categorias, etc) mais vendidos e a soma do restante(com valores relativos) usado no gráfico de pizza 
    // para representar os itens que representam as maiores vendas no período
    function getTopItensMaisVendidosMesValoresRelativos() {
        
       const mapListaValoresPorCategoriaVendida = getListaValoresVendaPorItem(categorias, dadosCsv, infosDashboard, 11, 2016);
       const itensValoresDesc = new Map([...mapListaValoresPorCategoriaVendida.entries()].sort((a, b) => a[1] - b[1]).reverse());

    
    }

    


    return (
        <>
            <div className={style.boxVisorFaturamentoPeriodo}>
                <VisorFaturamentoPeriodo />
            </div>
            <div className={style.boxPieChart}>
                <PieChart />
            </div>
        </>
        
    )
};

export default AreaDadosGeraisCategoriasProdutos;