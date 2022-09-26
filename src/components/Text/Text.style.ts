import styled from "styled-components"
import { TextProps } from './Text'

const StyledText = styled.p<TextProps>`
    font-family: sans-serif;
    font-size: 16px;
    background: #FFF;
    color: #333;
  line-height: 1.2;
`

export { StyledText }
