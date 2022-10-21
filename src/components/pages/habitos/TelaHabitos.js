import styled from "styled-components"
import TopBar from "../TopBar"
import Footer from "../Footer"
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";

export default function TelaHabitos(){
    const {user, setUser } = useContext(AuthContext)

    function Clicou(){

        console.log(user)
    }

    return(<>
    <TopBar />
    <DivImage src={user.image} alt="icon" />
    <DivContent>
        <MeusHabitos>
            <p>Meus hábitos</p>
            <button type="button" onClick={Clicou}>+</button>
        </MeusHabitos>
    <TextoAviso>
    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
    </TextoAviso>
        

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
const DivImage = styled.img`
    max-width: 51px;
    max-height: 51px;
    border-radius: 100%;
    background-color: #FFFFFF;
    z-index: 1;
    position: absolute;
    left: 1;
    right: 0;
    margin: 9px 18px 10px 0;
`