import TelaLogin from "./pages/login/TelaLogin"
import TelaCadastro from "./pages/cadastro/TelaCadastro"
import TelaHabitos from "./pages/habitos/TelaHabitos";
import TelaHistorico from "./pages/historico/TelaHistorico";
import TelaHoje from "./pages/hoje/TelaHoje";
import GlobalStyle from "./GlobalStyle";

import styled from "styled-components"
import React, {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import icon from "./image/trackit.png"

import AuthProvider from "./pages/contexts/AuthContext";
import { AuthContext } from "./pages/contexts/AuthContext";

export default function App(){
    return(
    <BrowserRouter>
        <GlobalStyle/>
        <Content>
            
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<TelaLogin icon={icon}/>}/>
                    <Route path="/cadastro" element={<TelaCadastro icon={icon}/>}/>
                        <Route path="/habitos" element={<TelaHabitos icon={icon}/>}/>
                        <Route path="/hoje" element={<TelaHoje/>} />
                        <Route path="/historico" element={<TelaHistorico/>}/>
                </Routes>
            </AuthProvider>
          
        </Content>
    </BrowserRouter>
    )
}

const Content = styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
