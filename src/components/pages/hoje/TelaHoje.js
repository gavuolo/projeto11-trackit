import styled from "styled-components"
import TopBar from "../TopBar"
import Footer from "../Footer"
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { Loading } from 'react-loading-dot'

export default function TelaHoje() {

    const { user, setUser } = useContext(AuthContext)
    const { value, setValue } = useContext(AuthContext)
    const { habitos, setHabitos } = useContext(AuthContext)

    const [habitosHoje, setHabitosHoje] = useState([])
    const token = user.token
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    const [check, setCheck] = useState([])

    let p = ((check.length) / (habitosHoje.length) * 100).toFixed(0)
    setValue(p)

    //const navigate = useNavigate()
    //console.log(habitos) 
    //testar dayjs
    //const dayjs = require('dayjs')
    //let dia = dayjs().format('dddd, DD/MM')
    //console.log(dia)

    useEffect(() => {

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const get = axios.get(URL, headers)
        get.then((res) => {
            setHabitosHoje(res.data)
        })
        get.catch((err) => console.log(err.response.data.message))
    }, []
    )

    function ClickCheck(a) {
        setCheck([...check, a])

        if (!check.includes(a)) {
            setCheck([...check, a])
        } else {
            const novaLista = check.filter(d => d !== a)
            setCheck(novaLista)
        }
    }
    function HojeHabitos() {
        if (habitosHoje !== 0) {
            return (
                <>
                    {value > 0 ?
                        <h9>{value}% dos hábitos concluídos</h9>
                        :
                        <p>Nenhum hábito concluído ainda</p>
                    }

                    {habitosHoje.map((a) =>
                        <ContainerList
                            data-identifier="today-infos"
                            key={a.id}
                        >
                            <Text>
                                <h4>{a.name}</h4>
                                <h2>Sequência atual: {a.currentSequence} dias</h2>
                                <h2>Seu recorde: {a.highestSequence} dias</h2>
                            </Text>
                            <CheckBox
                                data-identifier="done-habit-btn"
                                cor={check.includes(a) ? '#8FC549' : '#EBEBEB'}
                                onClick={() => ClickCheck(a)}
                            >
                                <ion-icon name="checkmark-outline"></ion-icon>
                            </CheckBox>
                        </ContainerList>)}
                </>
            )
        } else {
            return (
                <Loading
                    size="1rem"
                    margin="0rem"
                    duration="0.5s"
                    background="black"
                />)
        }
    }
    return (<>
        <TopBar />
        <DivContent>
            <h1>Segunda, 17/05</h1>
            <HojeHabitos

            />
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
    & h9{
        margin-left: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #8FC549;
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
    & h4{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #666666;
    } 
    & h2{
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
    background: ${props => props.cor};
    
    & ion-icon{
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: white;
    }
`
