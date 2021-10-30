import { createGlobalStyle } from 'styled-components'
import { colors } from 'src/styles/colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    height: 100vh;
    color: ${colors.black};
    background-color: ${colors.primary};
  }
`
