import React from "react";
import * as S from "./Styles_NavBar";
import Logo from "../../../assets/Dell-Movies@2x.png";
import SearchIcon from "../../../assets/Search-icon.svg"

export default function NavBar() {

    function inputOn () {
        return (
            <input type="text"/>
        )
    }

  return (
    <S.NavBar>
      <S.LogoNavBar src={Logo} alt="Logo Dell Movies" />
      <S.ButtonContainer>
        <S.ButtonSeriesAndFilmes>Séries</S.ButtonSeriesAndFilmes>
        <S.ButtonSeriesAndFilmes>Filmes</S.ButtonSeriesAndFilmes>
      </S.ButtonContainer>
        <S.SearchAndFilterAndLogin>
            <S.SearchIcon onClick={inputOn} src={SearchIcon} alt="" />
            <a href="">Filtro</a>
            <a href="">Login</a>
        </S.SearchAndFilterAndLogin>
    </S.NavBar>
  );
}
