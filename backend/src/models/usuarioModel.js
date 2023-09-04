const sql = require("../config/db.js");



// constructor
const Usuario = function(usuario) {
    this.nome = usuario.nome;
    this.login = usuario.login;
    this.senha = usuario.senha;
  };

Usuario.create = (newUsuario) => {

    // const {nome, login, senha} = newUsuario;

    return new Promise (async (resolve, reject) => {
        try {
            //-Pessoa e contato-------------------------------COMUM A TODOS
            const queryCreateUsuario = 'INSERT INTO usuario SET ?';
            const {nome, login, senha} = newUsuario;

            console.log(nome + " " + login);

            const resultUsuario = await executeQuery(sql, queryCreateUsuario, {nome, login, senha});
            const data = {...newUsuario, id_usuario: resultUsuario.insertId};

            resolve(data);

        } catch (err) {
            reject(err);
        }
    });
}


Usuario.findByLoginSenha = (userLogin) => {
    // posso tentar fazer aqui um select aninhado, o primeiro buscando o id atraves do login e senha passados, se encontrar faz um select trazendo todos os dados
    // necessarios para colocar na sua página. 
    return new Promise(async (resolve, reject) => {
        try {
            const {login, senha} = userLogin;

            console.log(login + " ---- " + senha);

            const queryLogin = 'select * from usuario where (login = ? AND senha = ?)';
            const resultUsuario = await executeQuery(sql, queryLogin, [login, senha]);

            const data = resultUsuario[0];

            console.log("resultUsuario model " + data.login);

            resolve(data);
        } catch (err) {
            reject(err);
        }
    })
}




const executeQuery = async (con, query, params) => {

    return new Promise ((resolve, reject) => {
        con.query(query, params, (err, res) => {
            if(err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
}

module.exports = Usuario;