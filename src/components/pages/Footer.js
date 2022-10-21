import styled from "styled-components"
export default function Footer(){
    return(<>
    <BottomBar>
        <DivHabitos>
            <p>Hábitos</p>
        </DivHabitos>
        <Circle/>
        <DivHistorico>
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

const Circle = styled.div`
position: absolute;
bottom: 0;
left: 37%;
width: 91px;
height: 91px;
border-radius: 50%;
background: #52B6FF;
`