import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CREATE_DADOSCSV, GET_DADOSCSV } from '../actions/actionTypes/dadosCsvActionTypes';

import { Series, Dt } from "danfojs/dist/danfojs-base";
import * as dfd from "danfojs";

import BoxAreaMensal from "../components/estrutura/BoxAreaMensal";
import BoxAreaDiario from "../components/estrutura/BoxAreaDiario";
import BoxGraficoMain from "../components/estrutura/BoxGraficoMain";
import NavHeaderDashBoard from "../components/estrutura/NavHeaderDashboard";
import NavLateralDashBoard from "../components/estrutura/NavLateralDashboard";
import ButtonMenu from "../components/estrutura/ButtonMenu";

import style from "../style/UserDashboard.module.css";


// Página inicial quando o usuário efetua o login, dashboard principal
const UserDashboard = () => {

    // Os dadosDashboard vindos do banco ao se logar serão passados aqui(através do redux) para o método encarregado de trazer os dados(de acordo com os dadosDashboard) do csv anexado. 

    const arrayLabelMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const [isViewMenu, setViewMenu] = useState(false);
    const [mainStyle, setMainStyle] = useState(style.main);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [fileData, setFileData] = useState(null);

    // let mainStyle = style.main;

    const dispatch = useDispatch();
    const infosDashboard = useSelector(state => state.dashboard);

    useEffect(() => {
        viewMenu(isShowMenu);
    }, [isShowMenu]);



    // Função que retorna uma lista ordenada do mais vendido para o menos vendido;  getListaMaisVendidos
    const getProdutoMaisVendido = (listaValoresProdutosVendidos) => {
        const produtosValoresDesc = listaValoresProdutosVendidos.sort((a, b) => b - a);

        console.log("produtosValoresDesc");
        console.log(produtosValoresDesc);

        return produtosValoresDesc;
    }

    
    // Função que retorna uma lista ordenada do menos vendido para o mais vendido;  getListaMenosVendidos
    const getProdutoMenosVendido = (listaValoresProdutosVendidos) => {
        const produtosValoresAsc = listaValoresProdutosVendidos.sort((a, b) => a - b);

        console.log("produtosValoresAsc");
        console.log(produtosValoresAsc);

        return produtosValoresAsc;
    }


    // Função resposável por gerar uma lista dos produtos vendidos até o momento levando em consideração o mês e ano;   getListaVendaPorItem
    const getListaProdutosVendidos = (dataFrame, mesSelecionado) => {
        let defaultMonthValue = 0;
        let mes = mesSelecionado != null ? mesSelecionado : defaultMonthValue;

        let datas = dataFrame[infosDashboard.data].values;
        let valoresVendidos = dataFrame[infosDashboard.valor].values;
        let produtos = dataFrame[infosDashboard.produto].values;

        const mapProdutos = new Map();

        produtos.forEach((produto, index) => {
            if(new(datas[index]).getMonth() === mes) {
                if(mapProdutos.has(produto)) {
                    mapProdutos.set(mapProdutos.get(produto) + valoresVendidos[index]);
                } else {
                    mapProdutos.set(produto, 0);
                }
            }
        })
        return mapProdutos;
    }


    // Função responsável por gerar o ticket médio do mês 
    const gerarTicketMedioByMesAno = (dataFrame, mesSelecionado) => {

    }
    

    // Função encarregada de pegar os dados em um arquivo csv
    function carregaDadosDashboardByCSV(event) {

        console.log("------------------dashboardStore");
        console.log(infosDashboard);

        console.log(event.target.files[0]);

        dfd.readCSV(event.target.files[0])
            .then(df => {

                let produtos = df[infosDashboard.produto].values;

                const mapProdutos = new Set(produtos);

                console.log(mapProdutos);

                console.log("----testeValues");
                let testeValues = df.loc({columns: [infosDashboard.data, infosDashboard.categoria, infosDashboard.produto, infosDashboard.valor]});

                console.log(testeValues);
                console.table(testeValues);

                let arrayDatas = df[infosDashboard.data].values;
                console.log("----arrayDatas");
                console.log(arrayDatas);

                // let testeDadosEmJson = new dfd.DataFrame(testeValues);

                // const datajson = testeDadosEmJson.toJSON();

                const datajson = dfd.toJSON(testeValues, {format: 'row'});

                console.log("---- df: " + df);

                setFileData(df);

                console.log("fileData ---- > ");
                console.log(fileData);


                dispatch({
                    type: GET_DADOSCSV,
                    payload: df,
                });

            }).catch(err => {
                console.log(err);
            })
    }


    // Método que quando acionado pelo botão "abrirFecharMenu", indica que o menu da dashboard deve aparecer ou nao, alterando seu estilo
    const showMenu = () => {
        setIsShowMenu(!isShowMenu);
    }


    // 
    const viewMenu = () => {

        if(isShowMenu === true) {
            setMainStyle(style.mainWithNav);
        } else {
            setMainStyle(style.main);
        }
    }


    return  (
        <>
            
            <NavHeaderDashBoard />
            <NavLateralDashBoard carregaDadosDashboardByCSV={carregaDadosDashboardByCSV} />
            <main className={mainStyle}>
                <ButtonMenu abrirFecharMenu={showMenu} />
                {fileData ? (
                    <>
                        <BoxAreaMensal fileData={fileData} />
                        <BoxGraficoMain fileData={fileData} />
                        <BoxAreaDiario />   
                    </>
                ) : (
                    <h1>Não encontrado!</h1>
                )}
                

                {/* <h1>Dashboard do usuário: {dashboard.nome}</h1> */}
            </main>
        </>
    )
}

export default UserDashboard;