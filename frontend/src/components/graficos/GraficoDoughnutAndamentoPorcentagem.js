import { React } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import VisorAreaMensal from '../estrutura/VisorAreaMensal';

import style from '../../style/graficos/GraficosHome.module.css';


ChartJS.register(ArcElement, Tooltip, Legend);


const GraficoDoughnutAndamentoPorcentagem = () => {


    const labels = [];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Meta a ser batida no mês',
                data: [60, 40],
                backgroundColor: [
                    // 5c2092
                    '#00C5E0',
                    '#E3347B'
                ],
                hoverOffset: 4,
                borderWidth: 4,
                borderColor: "lightgray"
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            // title: {
            //     display: true,
            //     text: 'Andamento do mês',
            // },
        }
    };


    return (
        <div className={style.graficoDoughnutAndamentoPorcentagem}>
            <Doughnut options={options} data={data} />
            <VisorAreaMensal />
        </div>
    )
}

export default GraficoDoughnutAndamentoPorcentagem;