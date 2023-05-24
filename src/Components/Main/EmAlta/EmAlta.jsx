import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Styles_EmAlta";

export default function EmAlta() {
  const [filmes, setFilmes] = useState([]);
  const [visibility, setVisibility] = useState("hidden");
  const [opacity, setOpacity] = useState("1");
  const [ativar, setAtivar] = useState(true);

  const ShowContent = () => {
    visibility === "hidden"
      ? setVisibility("visible")
      : setVisibility("hidden");
    opacity === "1" ? setOpacity("0.2") : setOpacity("1");
    setAtivar(!ativar);
  };

  useEffect(() => {
    getFilmes();
  }, [filmes]);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3a2aec51c29a648cc42582885c0a795a&language=pt-BR&page=1"
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
      <S.H3>Em Alta</S.H3>
      <S.ContainerEmAlta>
        {filmes.map((item) => (
          <>
            <S.CardsEmAlta
              onClick={() => {
                ShowContent();
              }}
            >
              <S.MovieDescription visibility={visibility}>
                <S.MovieTitle>{item.title}</S.MovieTitle>
                {item.overview}
              </S.MovieDescription >
              <S.MovieImg opacity={opacity} src={item.image} alt={item.title} />
              {ativar && (
                <>
                  <S.MovieTitle>{item.title}</S.MovieTitle>
                  <S.ReleaseDate>
                    {item.release_date.substring(0, 4)}
                  </S.ReleaseDate>
                </>
              )}
            </S.CardsEmAlta>
          </>
        ))}
      </S.ContainerEmAlta>
    </>
  );
}
