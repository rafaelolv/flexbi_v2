import React from "react";
import { Link } from "react-router-dom";


import style from '../../style/estrutura/NavDashboard.module.css';



const NavLateralDashBoard = ({ carregaDadosDashboardByCSV }) => {


    return (
        <aside className={style.asideMenuDashboard}>
            <nav>
                <ul>
                    <li>
                        item 1
                    </li>
                    <li>
                        {/* <div> */}
                            <section className={style.sectionFormUploadDados}>
                                <div>
                                    <label for="arquivo">
                                        Enviar arquivo
                                    </label>
                                    <input 
                                        type="file"
                                        id="arquivo"
                                        name="arquivo"
                                        // accept=".jpeg, .png, .jpg"
                                        onChange={carregaDadosDashboardByCSV}
                                    />
                                </div>
                            </section>
                        {/* </div> */}
                    </li>
                    <li>
                        <Link to={"/categorias"}>
                            Dashboard Categorias
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default NavLateralDashBoard;