import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createUser, loginUser } from "../../actions/usuarioAction";

import FormPanelChart from "../../pages/FormPanelChart";

import style from '../../style/Login.module.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styleMui = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const FormUserRegister = ({ nomeBotao, isRegister }) => {

    console.log("Chegou?");
    let navigate = useNavigate();

    const initialDadosUserRegister = {
        nome: "",
        login: "",
        password: ""
    }

    const [dadosUserRegister, setDadosUserRegister] = useState(initialDadosUserRegister);
    const [isLogin, setIsLogin] = useState(isRegister);

    // Estados do modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // openModal(handleOpen);

    // 
    // useEffect(() => {
    //     openModal(handleOpen);
    // }, []);

    const dispatch = useDispatch();


    const handleInputChangeDadosUserRegister = event => {
        const { name, value } = event.target;
        setDadosUserRegister({ ...dadosUserRegister, [name]: value });
    };

    
    //Método responsável por realizar o cadastro de usuários
    const efetuarCadastro = () => {
        setIsLogin(false);

        const {nome, login, password} = dadosUserRegister;
        
        console.log("efetuarCadastro " + dadosUserRegister.nome);

        dispatch(createUser({nome, login, password}))
            .then(data => {

                console.log("resposta then " + nome);
                console.log(data.nome);
            })
            .catch(e => {
                console.log("ERRO: " + e);
            });

        navigate("/formChart");
    }


    // Método encarregado de efetuar o login de usuários
    const efetuarLogin = () => {
        setIsLogin(true);

        console.log("Entrou login");

        const {login, password} = dadosUserRegister;

        dispatch(loginUser(login, password))
            .then(data => {
                console.log("Login efetuado com sucesso ");
                console.table(data);

                navigate("/home");
            })
            .catch(e => {
                console.log("ERRO: usuário não foi encontrado (não foi possível efetuar o login) " + e);
            })
    }

    
    return (
        <>
            <Button onClick={handleOpen}>{nomeBotao}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
        
                <Box sx={styleMui}>
                    <form>
                        {!isLogin ? (
                            <div>
                                <input type="text" id="nome" label="Nome" placeholder="Nome" name="nome" required value={dadosUserRegister.nome} onChange={handleInputChangeDadosUserRegister} />
                            </div>
                        ) : <></>}
                        <div>
                            <input type="text" id="login" label="Login" placeholder="Login" name="login" required value={dadosUserRegister.login} onChange={handleInputChangeDadosUserRegister} />
                        </div>
                        <div>
                            <input 
                                type="text" id="password" label="Senha" placeholder="Senha" name="password" required value={dadosUserRegister.password} onChange={handleInputChangeDadosUserRegister} />
                        </div>
                        <div className={style.boxEntrarCriarButton}>
                            <button type="button" className={style.loginButton} onClick={isRegister ? efetuarLogin : efetuarCadastro}>
                                {isRegister ? "Login" : "Cadastrar"}
                            </button>
                            <button type="button" onClick={efetuarCadastro}>
                                Criar nova conta
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
};

export default FormUserRegister; 