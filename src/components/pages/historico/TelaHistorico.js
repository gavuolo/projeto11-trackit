import styled from "styled-components"
import TopBar from "../TopBar"
import Footer from "../Footer"
export default function TelaHistorico(){
    return(<>
    <TopBar />
    <DivHistorico>
    <h1>Histórico</h1>
    
    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </DivHistorico>
    <Footer />
    </>)
}
const DivHistorico = styled.div`
    width: 375px;
    height: 100%;
    margin-top: 70px;
    background-color: #F2F2F2;
    & h1{
        margin: 28px 0 0 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    & p{
        margin-left: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }

`
