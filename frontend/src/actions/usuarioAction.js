import UsuarioService from "../services/UsuarioService";
import { GET_DADOS_DASHBOARD, GET_INFOS_DASHBOARD } from "./actionTypes/dashboardActionTypes";
import { GET_USER } from "./actionTypes/usuarioActionTypes";


export const createUser = ({nome, login, password}) => async () => {

    // console.log("createUser " + data);

    // console.log(Object.values(data));

    try {
        const res = await UsuarioService.create({ nome, login, password });

        // Para quando for  usar o redux, e coloca dispatch lá no parenteses do async
        // dispatch({
        //     type: CREATE_TUTORIAL,
        //     payload: res.data,
        // });

        return Promise.resolve(res.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const loginUser = (login, password) => async (dispatch) => {
    try {
        const res  = await UsuarioService.login({ login, password });

        console.log("res.data ");
        console.log(res.data);
        console.table(res.data);

        console.log("res.data.dadosDashboard");
        console.log(res.data.dadosDashboard);

        dispatch({
            type: GET_USER,
            payload: res.data.usuario
        });

        console.log("loginUser!!!!");

        dispatch({
            type: GET_INFOS_DASHBOARD,
            payload: res.data.dadosDashboard
        });

        // Aqui coloca os dispatchs para o redux

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}