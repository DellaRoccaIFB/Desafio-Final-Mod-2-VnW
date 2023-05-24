import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../../Carousel/CarouselMain";
import * as S from "./Styles_Lançamentos"

export default function Lançamentos() {
  const [filmes, setFilmes] = useState([]);
  const [visibilityDescription, setVisibilityDescription] = useState("hidden")
  const [visibilityTitle, setvisibilityTitle] = useState("visible")
  const [opacity, setOpacity] = useState("1")
  const [ativar, setAtivar] = useState(true)

  const ShowContent = () => {
    visibilityDescription === "hidden" ? setVisibilityDescription("visible") : setVisibilityDescription("hidden");
    visibilityTitle === "visible" ? setvisibilityTitle("hidden") : setvisibilityTitle("visible");
    opacity === "1" ? setOpacity("0.2") : setOpacity("1");
  }
  
  const AtivarConteudo = () => {
    setAtivar(!ativar)
  }

  const ShowTitle = () => {
    return(
      <>
            
      </>
    )
  }

  useEffect(() => {
    getFilmes();
  }, [filmes]);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=3a2aec51c29a648cc42582885c0a795a&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const Api = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          };
        });
        setFilmes(Api);
      })
      .catch((error) => alert(`Falha na requisição ${error}`));
  };

  return (
    <>
    <S.H3>Últimos lançamentos</S.H3>
      <Carousel>
        {filmes.map((item) => (
          <S.ContainerLançamentos onClick={()=>{ShowContent(), AtivarConteudo()}}>
            <S.MovieDescription  visibility={visibilityDescription}><S.MovieTitle>{item.title}</S.MovieTitle> {item.overview}</S.MovieDescription>
            <S.MovieImg opacity={opacity} src={item.image} alt={item.title} />
            {ativar && <>
            <S.MovieTitle visibilityTitle={visibilityTitle}>{item.title}</S.MovieTitle>
            <S.ReleaseDate visibilityDate={visibilityTitle}>{item.release_date.substring(0, 4)}</S.ReleaseDate>
            </>}
          </S.ContainerLançamentos>
        ))}
      </Carousel>
    </>
  );
}
