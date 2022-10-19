import styled from "styled-components"

export default function TelaLogin({icon}){

    return(
        <>
        <Content>
            <Icon>
                <img src={icon} alt="icon" />
            </Icon>
            <DivInput>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="senha"/>
            </DivInput>

            <DivButton>
                <button>ENTRAR</button>
                <p>Não tem uma conta? Cadastre-se!</p>
            </DivButton>

        </Content>
        </>
    )
}

const Content = styled.div`
    width: 375px;
    height: 667px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Icon = styled.div`
    width: 180px;
    height: 178px;
    margin: 160px 0 30px 0;
    background-color: green;
  
`

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    background-color: blue;
    font-family: 'Lexend Deca';
    
    

  & input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
    }
`

const DivButton = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 25px;
}
`



