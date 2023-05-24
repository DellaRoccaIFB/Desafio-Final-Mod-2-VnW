import styled from "styled-components"

export const H3 = styled.h3 `
    margin: 4vw 0 2vw 0;
    color: #FFFFFF;
`

export const ContainerEmAlta = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    `

export const CardsEmAlta = styled.div `
    height: 33.21vw;
    max-height: 340px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 3vw 0;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        transform: scale(1.05);
    }
    
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

export const MovieImg = styled.img `
    width: 19.05vw;
    max-width: 190px;
    height:  27.84vw;
    max-height: 285px;
    opacity: ${(props)=>(props.opacity)};
`

export const MovieTitle = styled.h4 `
    color: #FFFFFF;
    font-size: clamp(1px, 1.17vw, 12px);
    font-weight: 700;
    width: 19.05vw;
    max-width: 190px;

`
export const ReleaseDate = styled.h4 `
    color: #FFFFFF;
    font-size: clamp(1px, 1.17vw, 12px);
    font-weight: 300;
`