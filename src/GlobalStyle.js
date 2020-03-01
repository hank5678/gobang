import { createGlobalStyle } from "styled-components"
import bg from "./bg.png"
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC&display=swap');

  body {
    background-image: url(${bg});
  }
  p {
    font-family: 'Noto Serif TC';
  }
`
