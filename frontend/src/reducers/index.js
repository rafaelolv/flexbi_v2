// import painelReducer from "./painelReducer";
// import relatorios from "./relatorioSatisfacaoReducer";
// import produtos from "./produtoReducer";
import dashboardReducer from "./dashboardReducer";
import usuarioReducer from "./usuarioReducer";
import dadosCsvReducer from "./dadosCsvReducer";

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    // painelReducer: painelReducer,
    // relatorios: relatorios,
    // produtos: produtos,

    dashboard: dashboardReducer,
    usuario: usuarioReducer,
    dadosCsv: dadosCsvReducer,
});