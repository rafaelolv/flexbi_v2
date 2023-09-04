import React from "react";
import { useSelector } from "react-redux";

import { getListaValoresVendaPorItem, getListaMaisVendidos, getListaMenosVendidos } from "../../utils/dashboardFunctions";

import BoxInfo from "./BoxInfo";

import style from "../../style/estrutura/AreaMensalHome.module.css";

import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

// sx={{ color: '#FDEE2F' }}


const AreaInfosMes = ({ fileData }) => {

    const infosDashboard = useSelector(state => state.dashboard);

    const styleboxInfoMensal = style.boxInfo;
    let produtos = fileData[infosDashboard.produto].values;

    const listaValoresPorProdutoVendido = getListaValoresVendaPorItem(produtos, fileData, infosDashboard, 11, 2016);


    // Método responsável por retornar o produto mais vendido
    const getProdutoMaisVendido = () => {

        const mapListaValoresPorProdutoVendido = getListaValoresVendaPorItem(produtos, fileData, infosDashboard, 11, 2016);

        const itensValoresDesc = new Map([...mapListaValoresPorProdutoVendido.entries()].sort((a, b) => a[1] - b[1]).reverse());

        const produtoMaisVendido = {
            nome: [...itensValoresDesc][0][0],
            valor: [...itensValoresDesc][0][1],
        }
        
        return produtoMaisVendido;
    }

    const produtoMaisVendido = getProdutoMaisVendido();

    
    // Método responsável por retornar o produto menos vendido
    const getProdutoMenosVendido = () => {

        const mapListaValoresPorProdutoVendido = getListaValoresVendaPorItem(produtos, fileData, infosDashboard, 11, 2016);
        const itensValoresCresc = new Map([...mapListaValoresPorProdutoVendido.entries()].sort((a, b) => a[1] - b[1]));

        const produtoMenosVendido = {
            nome: [...itensValoresCresc][0][0],
            valor: [...itensValoresCresc][0][1],
        }

        return produtoMenosVendido
    }

    const produtoMenosVendido = getProdutoMenosVendido();
    

    return (
        <div className={style.boxInfosMes}>
            <BoxInfo dataBoxInfo={<PriceChangeOutlinedIcon sx={{ color: '#FDEE2F', width: 95, height: 80 }} />} 
                    label={"Ticket médio"} />
            <BoxInfo dataBoxInfo={<ProductionQuantityLimitsOutlinedIcon sx={{ color: '#10AE9D', width: 70, height: 55, border: 7, borderRadius: 2 }} />} 
                    label={"Produto mais vendido"} item={produtoMaisVendido}  />
            <BoxInfo dataBoxInfo={<ProductionQuantityLimitsOutlinedIcon sx={{ color: '#AF2B53', width: 70, height: 55, border: 7, borderRadius: 2 }} />} 
                    label={"Produto menos vendido"} item={produtoMenosVendido} />
        </div>
    )
}

export default AreaInfosMes;