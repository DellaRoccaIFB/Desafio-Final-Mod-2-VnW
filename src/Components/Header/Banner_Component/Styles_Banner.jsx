import styled from "styled-components";

export const BgImage = styled.div`
  position: relative;
  width: 101vw;
  max-width: 1024px;
  height: 56.4vw;
  max-height: 577.5px;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;
export const BoxInfoMovie = styled.div`
  padding: 0.78vw 0.78vw;
  max-width: 528px;
  width: 51.5625vw;
  position: absolute;
  bottom: 5vw;
  left: 9vw;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1vw 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ReleaseDate = styled.p`
  font-size: clamp(10px, 1vw, 12px);
`;

export const MovieTitle = styled.h3`
  font-size: clamp(10px, 2.63vw, 27px);
`;

export const MovieRateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1vw;
`;

export const VoteAverage = styled.p`
  font-size: clamp(10px, 2.05vw, 21px);
  &:after {
    content: "  /10";
    font-size: clamp(5px, 0.98vw, 10px);
  }
`;

export const MovieDescription = styled.p`
  text-align: justify;
  font-weight: 300;
  font-size: clamp(10px, 1.36vw, 14px);
`;

export const ButtonsContainer = styled.div `
    display: flex;
    justify-content: center;
    gap: 0 3vw;
`
export const Button = styled.button `
    width: 16.8vw;
    max-width: 172px;
    height: 3.9vw;
    max-height: 40px;
    background-color: ${(props)=>(props.bgColor)};
    color: #FFF;
    font-weight: 700;
    border-radius: 21px;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        transform: scale(1.03);
    }
`