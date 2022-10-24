import styled from "styled-components"
import TopBar from "../TopBar"
import Footer from "../Footer"
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'


export default function TelaHabitos() {
    //Contextos
    const { user, setUser } = useContext(AuthContext)
    const { value, setValue } = useContext(AuthContext)
    const { habitos, setHabitos } = useContext(AuthContext)
    //Estados
    const [days, setDays] = useState([])
    const [name, setName] = useState('')
    const [addHabitos, setAddHabitos] = useState(false)
    const [carregando, setCarregando] = useState(false)

    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const token = user.token
    const headers = { headers: { Authorization: `Bearer ${token}` } }

    useEffect(() => {
        const token = user.token
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        axios.get(URL, headers)
            .then((ress) => setHabitos(ress.data))
            .catch((ress) => console.log(ress.response.data.message))
    }, [addHabitos, carregando, habitos])

    function HabitoDays(a, index) {
        setDays([...days, index])
        if (!days.includes(index)) {
            setDays([...days, index])
        } else {
            const novaLista = days.filter(d => d !== index)
            setDays(novaLista)
        }
    }

    function EnviarHabito() {
        setCarregando(true)
        const obj = {
            name: name,
            days: days,
        }

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const post = axios.post(URL, obj, headers)

        post.then(() => {
            setCarregando(false)
            setAddHabitos(false)
        })
        post.catch(erro => alert(erro.response.data.message))

    }

    function DeletarHabito(a) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${a}`
        
        if(window.confirm("Quer mesmo deletar este hábito") === true){
            const del = axios.delete(URL, headers)
            del.then(res => console.log('oi'))
            del.catch(erro => alert(erro.respnse.data.mesage))
        }
        
    }

    function ListaHabitos() {
        console.log(habitos)

        return (
            (habitos.map((a, index) =>
                <Habitos
                    key={index}
                    data-identifier="habit-name"
                >
                    <Block>
                        <h1>{a.name}</h1>
                        <Semana>
                            {semana.map((b, index) => 
                            <ButtonSemana
                            cor={a.days.includes(index) ? '#DBDBDB' : '#FFFFFF'}
                            letra={a.days.includes(index) ? '#FFFFFF' : '#DBDBDB'}
                            key={index}
                            >
                                {b}
                            </ButtonSemana>
                            )}
                        </Semana>
                    </Block>
                    <Trash
                        onClick={() => DeletarHabito(a.id)}
                    >
                        <ion-icon name="trash-outline"></ion-icon>
                    </Trash>
                </Habitos>)
            )
        )
    }

    return (<>
        <TopBar />

        <DivContent>
            <MeusHabitos>
                <p>Meus hábitos</p>
                <button
                    data-identifier="create-habit-btn"
                    type="button"
                    onClick={() => {
                        setAddHabitos(true)
                        setName('')
                        setDays([])
                    }}
                >
                    +
                </button>
            </MeusHabitos>
            {addHabitos ?
                <AddHabito>
                    <input
                        data-identifier="input-habit-name"
                        type="text"
                        placeholder="nome hábito"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form>
                        {semana.map((a, index) =>
                            <ButtonSemana
                                data-identifier="week-day-btn"
                                cor={days.includes(index) ? '#DBDBDB' : '#FFFFFF'}
                                letra={days.includes(index) ? '#FFFFFF' : '#DBDBDB'}
                                key={index}
                                onClick={() => HabitoDays(a, index)}>
                                {a}
                            </ButtonSemana>
                        )}

                    </Form>
                    <ButtonDiv>
                        <ButtonCencelar
                            data-identifier="cancel-habit-create-btn"
                            onClick={() => setAddHabitos(false)}
                        >
                            Cancelar
                        </ButtonCencelar>

                        {carregando ?
                            <ButtonSalvar data-identifier="save-habit-create-btn">
                                <ThreeDots
                                    height="20"
                                    width="40"
                                    radius="9"
                                    color="white"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                            </ButtonSalvar>
                            :
                            <ButtonSalvar
                                onClick={EnviarHabito}
                            >
                                Salvar
                            </ButtonSalvar>
                        }

                    </ButtonDiv>
                </AddHabito>
                : <></>}
            <TextoAviso data-identifier="no-habit-message">
                {habitos.length === 0 ?
                    <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    :
                    <ListaHabitos />
                }

            </TextoAviso>
        </DivContent>
        <Footer />
    </>)
}


//----------------------------------------------------------------------------------------

const Semana = styled.div`
    margin-top: 5px;
    display: flex;
`
const Trash = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
`
const Habitos = styled.div`
    width: 340px;
    height: 91px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 15px;
    & h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
`
const ButtonSemana = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.letra};
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5 ;
    background: ${props => props.cor};
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
`
const ButtonCencelar = styled.button`
    width: 84px;
    height: 35px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
`
const ButtonSalvar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    border-radius: 5px;
    background: #52B6FF;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`
const ButtonDiv = styled.div`
    height: 60px;
    display: flex;
    justify-content: end;
    align-items: end;
`
const Form = styled.div`
    margin-top: 8px;
    display: flex;
`
const AddHabito = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto;
    padding: 18px;
    & input{
        width: 303px;
        height: 45px;
        color: #DBDBDB;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
    }

`
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
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    & button{
        width: 40px;
        height: 35px;
        font-weight: 400;
        text-align: center;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
        border: none;
        background-color: #52B6FF;
        border-radius: 4px;
        cursor: pointer;
    }

`