import React from "react"
import NavBar from "./NavBar_Component/NavBar"
import Banner from "./Banner_Component/Banner"
import styled from "styled-components"

const HeaderContainer = styled.header `
    overflow-x: hidden;
`

export default function Header() {
    return(
        <HeaderContainer>
            <NavBar/>
            <Banner/>
        </HeaderContainer>
    )
}