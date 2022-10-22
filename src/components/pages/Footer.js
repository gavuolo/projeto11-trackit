import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {

    const { value, setValue } = useContext(AuthContext)
    const navigate = useNavigate()
    return (<>
        <BottomBar>
            <DivHabitos onClick={() => navigate('/habitos')}>
                <p>Hábitos</p>
            </DivHabitos>

            <DivCirculo onClick={() => navigate('/hoje')}>
                <CircularProgressbar
                    value={value}
                    text={`Hoje`}
                    duration={1.4}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        fontFamily: 'Lexend Deca',
                        fontSize: '18px',
                        pathColor: "#fff",
                        trailColor: "transparent",
                    })}
                />


            </DivCirculo>
              
         


            <DivHistorico onClick={() => navigate('/historico')}>
                <p>Histórico</p>
            </DivHistorico>
        </BottomBar>
    </>)
}

const BottomBar = styled.div`
    width: 375px;
    height: 70px;
    display: flex;
    position: fixed;
    bottom: 0;
    top: 1;

`

const DivHabitos = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 36px;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
    cursor: pointer;
`

const DivHistorico = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 36px;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
    cursor: pointer;
`
const DivCirculo = styled.div`
width: 91px;
height: 91px;
position: absolute;
right: 40%;
bottom: 20%;
cursor: pointer;
`

/*const Circle = styled.div`
position: absolute;
bottom: 0;
left: 37%;
width: 91px;
height: 91px;
border-radius: 50%;
background: #52B6FF;
`*/