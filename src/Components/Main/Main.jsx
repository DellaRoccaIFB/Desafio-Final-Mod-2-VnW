import Lançamentos from "./Popular_Component/Lançamentos"
import EmAlta from "./EmAlta/EmAlta"

import NavGenders from "./NavGenders/NavGenders"
import styled from "styled-components"

const MainContainer = styled.main `
    padding: 0 9.76vw;
`

export default function Main(){
    return(
        <MainContainer>
            <NavGenders/>
            <Lançamentos/>
            <EmAlta/>
        </MainContainer>
    )
}