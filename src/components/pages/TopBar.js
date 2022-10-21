import styled from "styled-components"
import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

export default function ToBar(){
    const {user, setUser } = useContext(AuthContext)

    return(<>
    <NavBar>
        <DivIcon>
            <p>TrackIt</p>
        </DivIcon>
        <DivImage src={user.image} alt="icon" />
    </NavBar>
   
    </>)
}

const NavBar = styled.div`
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    bottom: 1;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    
`
const DivIcon = styled.div`
& p{
    margin: 10px 16px 11px 16px;
    color: #FFFFFF;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
}
`

const DivImage = styled.img`
    max-width: 51px;
    max-height: 51px;
    border-radius: 100%;
    background-color: #FFFFFF;
    z-index: 1;
    position: absolute;
    right: 0;
    top: 0;
    margin: 9px 18px 10px 0;
`