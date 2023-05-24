import styled from "styled-components"

export const ContainerLançamentos = styled.section `
    position: relative;
    cursor: pointer;
`
export const MovieDescription = styled.p `
    padding: 1vw 1vw;
    position: absolute;    
    width: 19.05vw;
    max-width: 195px;
    text-align: justify;
    top: 0;
    left: 0;
    color: white;
    font-size: clamp(1px, 1.03vw, 10.55px);
    visibility: ${(props)=>(props.visibility)};
`


export const H3 = styled.h3 `
    color: #FFFFFF;
    margin: 2vw 0;
`
export const MovieImg = styled.img `
    width: 19.05vw;
    max-width: 195px;
    height:  28.62vw;
    max-height: 293px;
    opacity: ${(props)=>(props.opacity)};
`

export const MovieTitle = styled.h4 `
    color: #FFFFFF;
    font-size: clamp(1px, 1.17vw, 12px);
    font-weight: 700;
    visibility: ${(props)=>{props.visibilityTitle}};
    /* visibility: hidden; */
`
export const ReleaseDate = styled.h4 `
    color: #FFFFFF;
    font-size: clamp(1px, 1.17vw, 12px);
    font-weight: 300;
    visibility: ${(props)=>{props.visibilityTitle}};
`