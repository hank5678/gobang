import React from "react"
import Game from "component/Game"
import StyleReset from "./StyleReset"
import GlobalStyle from "./GlobalStyle"
export default function App() {
  return (
    <>
      <StyleReset />
      <GlobalStyle />
      <Game />
    </>
  )
}
