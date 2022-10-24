import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { ThreeDots } from 'react-loader-spinner'

export default function TelaLogin({ icon }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)

    function Entrar() {
        setCarregando(true)

        const obj = {
            password: password,
            email: email
        }
        console.log(obj)
        const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", obj)
        post.then((e) => {
            setUser(e.data)
            navigate("/hoje")
        })
        post.catch(erro => {
            if (erro.response.status == 422) {
                alert("Usuário não existente. Por favor, faça o cadastro.")
            }
            window.location.reload();
        })

    }
    return (
        <>
            <Icon>
                <img src={icon} alt="icon" />
            </Icon>
            <DivInput>
                <input
                    data-identifier="input-email"
                    name="email"
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    data-identifier="input-password"
                    name="password"
                    type="text"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DivInput>

            <DivButton>

                {carregando ?
                    <button disabled={true}>
                        <DivLoadding>
                            <ThreeDots
                                height="30"
                                width="80"
                                radius="9"
                                color="white"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </DivLoadding>
                    </button>
                    :
                    <button data-identifier="login-btn" onClick={Entrar}>
                        Entrar
                    </button>
                }

                <Link data-identifier="sign-up-action" to={`/cadastro`}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </DivButton>
        </>
    )
}


const Icon = styled.div`
    width: 180px;
    height: 178px;
    margin: 68px 0 30px 0;
  
`
const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    & input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
    }
`
const DivButton = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    margin: 0 auto;
    & button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 25px;
        color: #FFFFFF;
        font-size: 21px;
    }
    & p{
        cursor: pointer
    }
`
const DivLoadding = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`