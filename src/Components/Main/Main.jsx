import NavGenders from "./NavGenders/NavGenders"
import Lançamentos from "./Popular_Component/Lançamentos"
import EmAlta from "./EmAlta/EmAlta"
import PagesButton from "./PagesButton/PagesButton"
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
            <PagesButton/>
        </MainContainer>
    )
}