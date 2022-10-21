import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React, { useContext } from 'react';
import axios from "axios";



export default function TelaCadastro({icon}){
    const [form, setForm] = useState({email: "", name: "", image: "", password:""});
    
    const navigate = useNavigate("/")
    

    function Confirmacao(){
        
        const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", form)
        post.then(() => {
            console.log("FUNCIONOU")
            navigate("/")
        })
        post.catch(erro => alert(erro.response.data));
        
    }

    function Formulario(e){
        const {name, value} = e.target
        setForm({...form, [name]: value })
        console.log(form)
    }
        return(
            <>
                <Icon>
                    <img src={icon} alt="icon" />
                </Icon>
                <DivInput>
                    <input
                        name="email"
                        type="text" 
                        placeholder="email" 
                        value={form.email} 
                        onChange={Formulario} 
                    />
                    <input
                        name="password"
                        type="text" 
                        placeholder="senha"
                        value={form.password}
                        onChange={Formulario}
                    />
                    <input
                        name="name"
                        type="text" 
                        placeholder="nome"
                        value={form.name}
                        onChange={Formulario}
                    />
                    <input
                        name="image"
                        type="text" 
                        placeholder="foto"
                        value={form.image}
                        onChange={Formulario}
                    />
                </DivInput>
    
                <DivButton>
                    <button onClick={Confirmacao}>Cadastrar</button>
                    <Link to={`/`}>
                    <p>Já tem uma conta? Faça login!</p>
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
        & p{
        cursor: pointer
        }
    `
    