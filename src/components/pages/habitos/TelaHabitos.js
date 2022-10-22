import styled from "styled-components"
import TopBar from "../TopBar"
import Footer from "../Footer"
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";


export default function TelaHabitos() {
    const { user, setUser } = useContext(AuthContext)
    const { value, setValue } = useContext(AuthContext)
    const { habitos, setHabitos } = useContext(AuthContext)
    const { semanaSel, setSemanaSel } = useState()




    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]

    const [days, setDays] = useState([])
    const [name, setName] = useState('')
    const [addHabitos, setAddHabitos] = useState(false)

    const [semanaSelect, setSemanaSelect] = useState([])

    useEffect(() => {
        const token = user.token
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        axios.get(URL, { headers: { 'Authorization': `Bearer ${token}` } })
            .then((ress) => console.log(ress.data))
            .catch((ress) => console.log(ress.response.data))
    }, [])

    function HabitoDays(a, index) {
        setDays([...days, index])
        if (!days.includes(index)) {
            setDays([...days, index])
        } else {
            const novaLista = days.filter(s => s !== index)
            setDays(novaLista)
        }
    }

    function EnviarHabito() {
        const obj = [{
            name: name,
            days: days,
        }]
        console.log(obj)
    }

    function ListaHabitos(){

        if(habitos.lenght === 0){
            return (<p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
        }else{
            console.log(habitos)
            return (habitos.map((a, index)=> 
            <Habitos key={index}>
                <h1>{a.name}</h1>
               
                {a.days.map((b, index) => <ButtonSemana key={index} >{b}</ButtonSemana>)}
                
            </Habitos>))
        }
    }
    return (<>
        <TopBar />

        <DivContent>
            <MeusHabitos>
                <p>Meus hábitos</p>
                <button
                    type="button"
                    onClick={() => {
                        setAddHabitos(true)
                        setName('')
                        setDays([])
                    }}
                >+</button>
            </MeusHabitos>

            {addHabitos ?
                <AddHabito>
                    <input
                        type="text"
                        placeholder="nome hábito"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form>
                        {semana.map((a, index) =>
                            <ButtonSemana
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
                        onClick={() => setAddHabitos(false)}
                        >
                            Cancelar
                        </ButtonCencelar>

                        <ButtonSalvar 
                        onClick={EnviarHabito}
                        >
                            Salvar
                        </ButtonSalvar>

                    </ButtonDiv>
                </AddHabito>
                : <></>}

            
            <TextoAviso>
               <ListaHabitos />
            </TextoAviso>


        </DivContent>
        <Footer />
    </>)
}


//----------------------------------------------------------------------------------------
const Habitos = styled.div`
    width: 340px;
    height: 91px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
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




/*<ButtonSemana value={"1"} onClick={(e) => setDays(e.target.value)}>
                  D
              </ButtonSemana>
              <ButtonSemana value={2} onClick={Habito}>
                  S
              </ButtonSemana>
              <ButtonSemana value={3}>
                  T
              </ButtonSemana>
              <ButtonSemana value={4}>
                  Q
              </ButtonSemana>
              <ButtonSemana value={5}>
                  Q
              </ButtonSemana>
              <ButtonSemana value={6}>
                  S
              </ButtonSemana>
              <ButtonSemana value={7}>
                  S
              </ButtonSemana>*/