import React from "react";


import style from '../../style/estrutura/NavDashboard.module.css';



const NavHeaderDashBoard = () => {


    return (
        <header className={style.headerMenuDashboard}>
            <nav className={style.nav}>
                <p>header com menu superior</p>
            </nav>
        </header>
    )
}

export default NavHeaderDashBoard;