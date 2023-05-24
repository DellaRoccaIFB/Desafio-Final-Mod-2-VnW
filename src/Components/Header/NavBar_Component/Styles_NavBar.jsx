import styled from "styled-components"

export const NavBar = styled.nav `
    z-index: 2;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(19px);
    -webkit-backdrop-filter: blur(9px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    height: 6.05vw;
    max-height: 62px;
    padding: 0 2vw;
`
export const LogoNavBar = styled.img `
    width: 8.7vw;
    max-width: 89px;
    cursor: pointer;
    transition: all 500ms;
    &:hover{
        transform: scale(1.1);
    }
`

export const ButtonContainer = styled.div `
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0 0.5vw;
`

export const ButtonSeriesAndFilmes = styled.button `
    width: 11.03vw;
    max-width: 113px;
    height: 3.51vw;
    max-height: 36px;
    border-radius: 18px;
    color: white;
    transition: all 500ms;
    font-size: 1.6vw;
    font-size: clamp(10px, 1.6vw, 16px);
    cursor: pointer;
    &:hover{
        background-color: #747474;
        box-shadow: 0px 3px 6px #0000005C;
    }
`

export const SearchAndFilterAndLogin = styled.div `
    display: flex;
    align-items: center;
    gap: 0 2.02vw;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6vw;
        font-size: clamp(10px, 1.6vw, 16px);
        border-radius: 18px;
        color: white;
        width: 6vw;
        max-width: 61px;
        height: 3.51vw;
        max-height: 36px;
        transition: all 500ms;
        &:hover {
            background-color: #747474;
            box-shadow: 0px 3px 6px #0000005C;

        }
    }
`
export const SearchIcon = styled.img `
    cursor: pointer;
    border-radius: 18px;
    transition: all 500ms;
    &:hover{
        background-color: #747474;
        box-shadow: 0px 3px 6px #0000005C;
    }
`

