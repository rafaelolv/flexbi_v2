import React from "react";

import BoxInfo from "./BoxInfo";

import style from "../../style/estrutura/AreaMensalHome.module.css";

import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

// sx={{ color: '#FDEE2F' }}


const AreaInfosMes = () => {


    const styleboxInfoMensal = style.boxInfo;

    return (
        <div className={style.boxInfosMes}>
            {/* <BoxInfo styleboxInfoMensal={styleboxInfoMensal}  />
            <BoxInfo styleboxInfoMensal={styleboxInfoMensal} />
            <BoxInfo styleboxInfoMensal={styleboxInfoMensal} /> */}

            <BoxInfo dataBoxInfo={<PriceChangeOutlinedIcon sx={{ color: '#FDEE2F', width: 95, height: 80 }} />}   />
            <BoxInfo dataBoxInfo={<ProductionQuantityLimitsOutlinedIcon sx={{ color: '#10AE9D', width: 70, height: 55, border: 7, borderRadius: 2 }} />}  />
            <BoxInfo dataBoxInfo={<ProductionQuantityLimitsOutlinedIcon sx={{ color: '#AF2B53', width: 70, height: 55, border: 7, borderRadius: 2 }} />} />
        </div>
    )
}

export default AreaInfosMes;