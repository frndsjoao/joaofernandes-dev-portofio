import { createGlobalStyle } from 'styled-components';
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
    font-family: sans-serif;
    font-size: 16px;
    background: #FFF;
    color: #333;
  }
`

export default GlobalStyle