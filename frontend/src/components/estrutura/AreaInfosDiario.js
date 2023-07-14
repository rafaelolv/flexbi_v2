import React from "react";

import BoxInfoDiario from "./BoxInfoDiario";

import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';


const AreaInfosDiario = () => {


    return (

        <>
            <BoxInfoDiario dataBoxInfo={<ProductionQuantityLimitsOutlinedIcon sx={{ color: '#10AE9D', width: 55, height: 45, border: 7, borderRadius: 2 }} />}  />
            <BoxInfoDiario dataBoxInfo={<ProductionQuantityLimitsOutlinedIcon sx={{ color: '#AF2B53', width: 55, height: 45, border: 7, borderRadius: 2 }} />} />
            {/* <BoxInfoDiario /> */}
        </>
    )
}

export default AreaInfosDiario;