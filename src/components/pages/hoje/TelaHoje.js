import styled from "styled-components"
import TopBar from "../TopBar"
import Footer from "../Footer"

import React from "react"

export default function TelaHoje(){

    return(<>
    <TopBar /> 
    <DivContent>
    <h1>Segunda, 17/05</h1>
    <p>Nenhum hábito concluído ainda</p>
    <ContainerList>
        <Text>
        <h1>Ler 1 capítulo de livro</h1>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
        </Text>
        <CheckBox>
            <ion-icon name="checkmark-outline"></ion-icon>
        </CheckBox>
    </ContainerList>
    </DivContent>
    <Footer />
    </>)
}

const DivContent = styled.div`
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
const ContainerList = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 10px;

`
const Text = styled.div`

display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: flex-start;
& h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #666666;
} 
& p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #666666;
}

`
const CheckBox = styled.div`
    cursor: pointer;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: /*#EBEBEB*/ #8FC549;
    
    & ion-icon{
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: white;
    }
`