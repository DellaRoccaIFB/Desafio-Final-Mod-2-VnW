import * as S from "./Styles_PagesButton"

export default function PagesButton() {
    return(
        <S.ContainerButton>
            <S.PageNumber style={{backgroundColor:"#FFF", color:"#000"}}>1</S.PageNumber>
            <S.PageNumber>2</S.PageNumber>
            <S.PageNumber>3</S.PageNumber>
            <S.PageNumber>4</S.PageNumber>
            <S.Reticencias>...</S.Reticencias>
            <S.PageNumber>322</S.PageNumber>
            <S.LastPage>Último</S.LastPage>
        </S.ContainerButton>
    )
}