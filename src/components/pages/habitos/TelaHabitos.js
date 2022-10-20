import styled from "styled-components"
import TopBar from "../TopBar"
import Footer from "../Footer"

export default function TelaHabitos(){
    return(<>
    <TopBar/>
    <DivContent>
        <MeusHabitos>
            <p>Meus hábitos</p>
            <button type="button">+</button>
        </MeusHabitos>
    <TextoAviso>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextoAviso>
        

    </DivContent>
    <Footer />
    </>)
}

const TextoAviso = styled.div`
    margin: 28px 17px 28px 17px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

color: #666666;
`
const DivContent = styled.div`
    width: 375px;
    height: 100%;
    margin-top: 70px;
    background-color: #F2F2F2;
    margin-bottom: 70px;
`

const MeusHabitos = styled.div`
    margin: 28px 17px 28px 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #126BA5;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    & button{
        width: 40px;
        height: 35px;
        font-weight: 400;
        text-align: center;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
        background-color: #52B6FF;
        border-radius: 4px;
        cursor: pointer;
    }

`