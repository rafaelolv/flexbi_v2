import { React } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import style from '../../style/estrutura/NavDashboard.module.css';
import Button from '@mui/material/Button';


const ButtonMenu = ({ abrirFecharMenu }) => {


    return (
        <button onClick={abrirFecharMenu} className={style.buttonMenu} sx={{borderRadius: 25}} ><MenuIcon sx={{ fontSize: 25, color: '#ce8b54', borderRadius: 25, backgroundColor:'#ffea00' }} /> </button>
    )
}

export default  ButtonMenu;



{/* <Button onClick={handleOpen} sx={{borderRadius: 25}}>
    <PersonAddAlt1RoundedIcon sx={{ fontSize: 50, color: '#ffea00', border: 4, borderRadius: 25 }} />
</Button> */}