import React from "react";
import { useSelector } from "react-redux";

import GraficoDoughnutAndamentoPorcentagem from "../graficos/GraficoDoughnutAndamentoPorcentagem";
import LineAndamentoLucroMes from "../graficos/LineAndamentoLucroMes";

import { geraValorTotalMesByMesAno, calculaValorPorcentagemByTotal } from "../../utils/dashboardFunctions";

import style from "../../style/estrutura/AreaMensalHome.module.css";


const AreaGraficosMes = ({ fileData }) => {

    const metaTesteTemporaria = 50000000;

    console.log("e esse fileData de AreaGraficosMes --->>>");
    console.log(fileData);

    const infosDashboard = useSelector(state => state.dashboard);
    const dadosCsv = useSelector(state => state);

    
    //Função usada para gerar os valores em porcentagem  do quanto falta para atingir a meta e o quanto já foi atingido em relação a meta. 
    const gerarValoresPorcentagemGraficoDoughnut = (valorAndamento, meta) => {

        console.log("----- dadosCsv da AreaGraficosMes ");
        console.log(dadosCsv);

        console.log("---infosDashboard da AreaGraficosMes " + infosDashboard);

        console.log("valorAndamento " + valorAndamento.toFixed(2)  + " meta " + meta)

        const valoresPorcentagem = [];

        const valorAtingidoPorc = calculaValorPorcentagemByTotal(valorAndamento, meta); 

        console.log(valorAtingidoPorc);

        valoresPorcentagem.push(Number(valorAtingidoPorc.toFixed(2)));
        valoresPorcentagem.push(100 - valorAtingidoPorc.toFixed(2));

        console.log("valoresPorcentagem");
        console.log(valoresPorcentagem);

        return valoresPorcentagem;
    }

    const valorAndamentoMes = geraValorTotalMesByMesAno(fileData, infosDashboard, 11, 2016);

    console.log("valorAndamentoMes");
    console.log(valorAndamentoMes);

    const valoresGraficoDoughnut = gerarValoresPorcentagemGraficoDoughnut(valorAndamentoMes, metaTesteTemporaria);


    return (
        <div className={style.boxAreaGraficos}>
            <GraficoDoughnutAndamentoPorcentagem valoresGraficoDoughnut={valoresGraficoDoughnut} valorAndamentoMes={valorAndamentoMes} />
            <LineAndamentoLucroMes meta={metaTesteTemporaria} valorAndamentoMes={valorAndamentoMes} />
        </div>
    )
}

export default AreaGraficosMes;


// 29057332.720003200