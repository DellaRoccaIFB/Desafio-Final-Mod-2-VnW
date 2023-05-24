import styled from "styled-components"

export const NavGenders = styled.nav `
    margin: 1vw 0 7vw 0;
`
export const UlNavGender = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center;        
    overflow: hidden;
    li {
        cursor: pointer;
        transition: all 300ms;
        font-size: clamp(1px, 1.171875vw, 12px);
        font-weight: 200;
        &:hover {
            transform: scale(1.1);
        }
    }
    img:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`