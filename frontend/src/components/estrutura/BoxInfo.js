import React from "react";

import style from '../../style/estrutura/AreaMensalHome.module.css';



const BoxInfo = ({ styleBoxInfo, dataBoxInfo, label, item }) => {


    return (
        <div className={style.boxInfo}>
            <header>
                <div className={style.estiloIconeBoxinfo}>
                    {dataBoxInfo}
                </div>
                <div>
                    <h4>{label}</h4>
                </div>
            </header>
            <div>
                <h3>R$ 355,00</h3>
            </div>
        </div>
    )
}

export default BoxInfo;