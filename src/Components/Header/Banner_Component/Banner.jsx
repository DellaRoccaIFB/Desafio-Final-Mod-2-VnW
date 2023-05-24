import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CarouselBanner from "../../Carousel/CarouselBanner";
import * as S from "./Styles_Banner";
import Estrela from "../../../assets/Estrela.svg";
import IMDB from "../../../assets/IMDB.png";

export default function Banner() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes();
  }, [filmes]);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3a2aec51c29a648cc42582885c0a795a&language=pt-BR&page=1"
      )
      .then((resposta) => {
        const Api = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
          };
        });
        setFilmes(Api);
      })
      .catch((error) => alert(`Falha na requisição ${error}`));
  };

  return (
    <CarouselBanner>
      {filmes.map((item) => (
        <>
          {/* <img style={{width: "100%"}} src={item.image} alt={item.title} /> */}
          <S.BgImage style={{ backgroundImage: `url(${item.image})` }}>
            <S.BoxInfoMovie>
              <S.MovieTitle style={{ color: "white" }}>
                {item.title}
              </S.MovieTitle>
                <S.ReleaseDate>
                  {item.release_date.substring(0, 4)}
                </S.ReleaseDate>
              <S.MovieRateBox>
                <img src={Estrela} alt="" />
                <S.VoteAverage>{item.vote_average}</S.VoteAverage>
                <img src={IMDB} alt="" style={{width:"4vw", maxWidth:"41px" , height:"80%"}}/>
              </S.MovieRateBox>
              <S.MovieDescription>
                {item.overview}
              </S.MovieDescription>
              <S.ButtonsContainer>
                <S.Button bgColor={"#D53A00"}>Assistir agora</S.Button>
                <S.Button bgColor={"#717171"}>Trailer</S.Button>
              </S.ButtonsContainer>
            </S.BoxInfoMovie>
          </S.BgImage>
        </>
      ))}
    </CarouselBanner>
  );
}
