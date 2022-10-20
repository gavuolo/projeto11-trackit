import styled from "styled-components"
import { Link } from "react-router-dom";


export default function TelaLogin({icon}){

    return(
        <> 
            <Icon>
                <img src={icon} alt="icon" />
            </Icon>
            <DivInput>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="senha"/>
            </DivInput>

            <DivButton>
                <button>Entrar</button>
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
`



