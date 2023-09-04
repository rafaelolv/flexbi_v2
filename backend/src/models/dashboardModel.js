const sql = require("../config/db.js");

// constructor
const Dashboard = function(dadosDashboard) {
    this.produto = dadosDashboard.produto;
    this.categoria = dadosDashboard.categoria;
    this.data = dadosDashboard.data;
    this.filtros = dadosDashboard.filtros;
    this.id_usuario = dadosDashboard.id_usuario
};


// 
Dashboard.create = (dadosDashboard) => {

    console.log("model de dashboard");
    // const {nome, login, senha} = newUsuario;

    return new Promise (async (resolve, reject) => {
        try {

            const queryCreateDadosDashboard = 'INSERT INTO dados_dashboard SET ?';
            const {produto, categoria, data, filtros, id_usuario} = dadosDashboard;

            console.log(produto + " " + id_usuario);

            const resultDadosDashboard = await executeQuery(sql, queryCreateDadosDashboard, {produto, categoria, data, id_usuario});

            console.log("chega aqui??? ");
            let filtrosInseridos = [];
            const queryInsertFiltrosDadosDashboard = 'INSERT INTO filtros SET ?';

            console.log("resultDadosDashboard.insertId " + resultDadosDashboard.insertId);
            const id_dadosDashboard = resultDadosDashboard.insertId;

            dadosDashboard.filtros.forEach((filtro) => {
                filtrosInseridos.push({nome_filtro: filtro, id_dados_dashboard: resultDadosDashboard.insertId});
            })

            const resultInsertFiltrosDadosDashboard = await executeQueryWithList(sql, queryInsertFiltrosDadosDashboard, filtrosInseridos);
              
            const data_dashboard = {...dadosDashboard, id_dadosDashboard: resultDadosDashboard.insertId, filtros: resultInsertFiltrosDadosDashboard};

            resolve(data_dashboard);

        } catch (err) {
            reject(err);
        }
    });
}


// 
Dashboard.findDashboard = (idUser) => {

    console.log("chegou aqui findDashboard ????");

    return new Promise(async (resolve, reject) => {
        try {
            const queryFindDashboard = 'select * from dashboard where (id_usuario = ?)';
            const result = await executeQuery(sql, queryFindDashboard, idUser);
            const data = result[0];

            console.log("data  " + data);
            console.table(data);

            resolve(data);
        } catch (err) {
            reject(err);
        }
    })
}


Dashboard.carregaDadosDashboardByIdUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {

            console.log("idUser " + idUser);

            const queryCarregaDadosDashboard = 'select * from dados_dashboard where (id_usuario = ?)';
            
            // const queryDashboard = 


            const result = await executeQuery(sql, queryCarregaDadosDashboard, idUser);
            const data = result[0];

            console.table(data);
            console.log(data);


            resolve(data);
        } catch (err) {
            reject(err);
        }
    })
}

// 
const executeQueryWithList = async (con, query, list) => {

    console.log("list");
    console.log(list);

    return new Promise ((resolve, reject) => {
        list.forEach((params) => {
            con.query(query, params, (err, res) => {
                if(err) {
                    return reject(err);
                }
                // console.log(Object.values(res));
                return resolve(res);
            });
            
        })
    });
}


// 
const executeQuery = async (con, query, params) => {
    return new Promise ((resolve, reject) => {
        con.query(query, params, (err, res) => {
            if(err) {
                return reject(err);
            }
            // console.log(Object.values(res));
            return resolve(res);
        });
    });
}

module.exports = Dashboard;