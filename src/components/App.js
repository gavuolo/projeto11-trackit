import TelaLogin from "./TelaLogin"
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import icon from "./image/trackit.png"

export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<TelaLogin icon={icon}/>}/>
        </Routes>
    </BrowserRouter>
    )
}

/*<Route path="/cadastro" element={<TelaCadastro/>}/>
<Route path="/habitos" element={<TelaHabitos/>}/>
<Route path="/hoje" element={<TelaHoje/>} />
<Route path="/historico" element={<TelaHistorico/>} />*/