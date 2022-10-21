import styled from "styled-components"
import { Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";


export default function TelaLogin({icon}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)

    function Entrar(){
        const obj ={
            password: password,
            email: email
        }
        console.log(obj)
        const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", obj)
        post.then((e) => {
            setUser(e.data)
            navigate("/habitos")
        })
        post.catch(erro => alert(erro.data));
    }
    return(
        <> 
            <Icon>
                <img src={icon} alt="icon" />
            </Icon>
            <DivInput>
                <input
                    name="email"
                    type="text" 
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    name="password"
                    type="text" 
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DivInput>

            <DivButton>
                <button onClick={Entrar}>Entrar</button>
                <Link to={`/cadastro`}>
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



