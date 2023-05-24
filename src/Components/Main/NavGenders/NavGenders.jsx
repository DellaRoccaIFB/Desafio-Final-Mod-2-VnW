import * as S from "./Styles_NavGenders"
import SearchIcon from "../../../assets/Icon ionic-ios-search.svg"

export default function NavGenders() {
    return(
        <S.NavGenders>
            <S.UlNavGender style={{color:"white",}}>
                <li>Popular</li>
                <li>Drama</li>
                <li>Ação</li>
                <li>Aventura</li>
                <li>Comédia</li>
                <li>Crime</li>
                <li>Fantasia</li>
                <li>Família</li>
                <img src={SearchIcon} alt="" />
            </S.UlNavGender>
        </S.NavGenders>
    )
}