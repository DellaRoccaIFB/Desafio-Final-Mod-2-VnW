import { styled } from "styled-components";

export const ContainerButton = styled.div `
    margin: 5vw 0 7vw 0;
    display: flex;
    justify-content: center;
    gap: 0 1vw;
    `
export const PageNumber = styled.button `
    width: 3.62vw;
    max-width: 37px;
    height: 3.62vw;
    max-height: 37px;
    border: solid 2px #FFF;
    border-radius: 50px;
    color: #FFF;
    cursor: pointer;
    transition: all 500ms;
    &:hover{
        background-color: #FFF;
        color: #000;
    }
`
export const LastPage = styled.button `
    width: 5.86vw;
    max-width: 60px;
    height: 3.62vw;
    max-height: 37px;
    border: solid 2px #FFF;
    border-radius: 5px;
    color: #FFF;
    transition: all 500ms;
    cursor: pointer;
    &:hover{
        background-color: #FFF;
        color: #000;
    }
`

export const Reticencias = styled.p `
    padding: 1.5vw 0 0 0;
    color: #FFF;
`