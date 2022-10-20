import styled from "styled-components"
export default function ToBar(){
    return(<>
    <NavBar>
        <DivIcon>
            <p>TrackIt</p>
        </DivIcon>
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