import React, { useState } from "react";
import { useDispatch } from "react-redux";

import BarChart from "../components/graficos/BarChart";
import ModalFormDashboard from '../components/form/ModalFormDashboard';
import FormUploadDadosCSV from "../components/form/FormUploadDadosCSV";
import InputFiltros from "../components/form/InputFiltros";

import imgGraficoBarrasHorizontal from '../images/imgGraficobarrashori.PNG';
import imgGraficoBarline from '../images/imgGraficoBarLine.PNG';

import { enviarDados } from "../actions/dashboardAction";

import style from '../style/FormPanelChart.module.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const styleMui = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


// Página de cadastro de gráficos que aparecerão na dashboard do usuário
const FormPanelChart = () => {


    // Dados que serão inseridos de acordo com os dados vindos de cada cliente(empresa)
    const initialStateDadosDashboard = {
        produto: "",
        categoria: "",
        data: "",
        valor: "",
        filtros: [],
    }

    //Para cadastro dos dados a serem usados nas dashboards
    const [dadosDashboard, setDadosDashboard] = useState(initialStateDadosDashboard);

    // A idéia é que sirva para setar os dados extraidos do CSV, ainda ver isso
    const [dadosApiCSV, setDadosApiCSV] = useState("");

    const dispatch = useDispatch();

        
    // Método que captura a entrada(o que é inserido) no input de dados 
    const handleInputChangeDadosDashboard = event => {
        const { name, value } = event.target;
        setDadosDashboard({ ...dadosDashboard, [name]: value });
    };

    // Método encarregado de setar os dados do input filtros no state dadosDashboard
    const handleInputChangeFiltros = (listFiltros) => {
        
        setDadosDashboard({...dadosDashboard, filtros: [...dadosDashboard.filtros, ...listFiltros]});
    }


    // Método usado para pegar e retornar uma dashboard
    function getDashboard(dashboard) {
        return dashboard;
    }


    // Método utilizado para cadastrar os dados a serem usados nas dashboards de determinado cliente
    const cadastrarDadosDashboard = () => {

        console.log("cadastrarDadosDashboard");
        console.table(dadosDashboard);


        dispatch(enviarDados(dadosDashboard))
            .then(data => {
                console.log("data");
                console.log(data);
                // setDadosDashboard(data);

            })
            .catch(e => {
                console.log("ERRO: " + e);
            });

            setDadosDashboard(initialStateDadosDashboard);
    }

    // 
    const recebeDadosFromApiCSV = (dados) => {
        setDadosApiCSV(dados);
    }



    return (
        <section className={style.box}>
            <form>
                <input type="text"
                    id="produto"
                    name="produto"
                    placeholder="produto/serviço"
                    required
                    value={dadosDashboard.produto}
                    onChange={handleInputChangeDadosDashboard}
                />
                <input type="text"
                    id="categoria"
                    name="categoria"
                    placeholder="Categoria"
                    required
                    value={dadosDashboard.categoria}
                    onChange={handleInputChangeDadosDashboard}
                />
                <input type="text"
                    id="data"
                    name="data"
                    placeholder="Data"
                    required
                    value={dadosDashboard.data}
                    onChange={handleInputChangeDadosDashboard}
                />
                <input type="text"
                    id="data"
                    name="valor"
                    placeholder="Valor"
                    required
                    value={dadosDashboard.valor}
                    onChange={handleInputChangeDadosDashboard}
                />
                <InputFiltros handleInputChangeFiltros={handleInputChangeFiltros} />
            </form>
            <button type="submit" onClick={cadastrarDadosDashboard}>
                Cadastrar
            </button>
        </section>
    )
};

export default FormPanelChart;