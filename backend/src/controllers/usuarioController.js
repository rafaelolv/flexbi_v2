const Usuario = require("../models/usuarioModel.js");
const Dashboard = require("../models/dashboardModel.js");
const Grafico = require("../models/graficoModel.js")

exports.create = (req, res, next) => {

    // Validação

    console.log("nome " + req.body.nome);
    console.log("nome " + req.body.login);
    console.log("nome " + req.body.password);


    if(!req.body) {
        console.log("ENtrou aqui? controler create teste" + req.body.nome)
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const usuario = new Usuario({
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.password
    });

    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the person."
            });
        });
};


// 
exports.login = (req, res) => {
    console.log("Chegou aqui login controller " + req.body.login + " - " + req.body.password)
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    const userLogin = {
        login: req.body.login,
        senha: req.body.password
    }

    const dadosUsuarioLogado = {
        usuario: {},
        dadosDashboard: {}
    }
    
    // função encarregada de trazer os dados a serem carregados na dashboard, talvez mudar o nome
    Usuario.findByLoginSenha(userLogin)
        .then(dataUserLogin => {
            dadosUsuarioLogado.usuario = {...dataUserLogin};

            console.log("estou aqui hoje " + dataUserLogin.id_usuario);
            console.table(dadosUsuarioLogado.usuario);

            return carregaDadosDashboardByIdUser(dadosUsuarioLogado.usuario.id_usuario)
        })
        .then(dataDashboard => {

            dadosUsuarioLogado.dadosDashboard = {...dataDashboard}

            let data = {...dadosUsuarioLogado};
            
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving user."
            });
        });
}

// 
function carregaDadosDashboardByIdUser(idUser) {
    return new Promise( async (resolve, reject) => {
        try {

            let dataResult = await Dashboard.carregaDadosDashboardByIdUser(idUser);      

            const data = {...dataResult};

            resolve(data);
        } catch (err) {
            reject(err);
        }
    })
}


// 
function carregaDadosHomeUsuario(dataUserLogin) {
    

}