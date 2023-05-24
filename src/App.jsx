import React from "react";
import { createGlobalStyle } from "styled-components"
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0 auto;
    max-width: 1024px;
    font-family: 'Open Sans', sans-serif;
    background-color: #000000;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    background: none;
    border: none;
    text-decoration: none;
    list-style: none;
  }
`

export default function App() {
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </>
  )
}