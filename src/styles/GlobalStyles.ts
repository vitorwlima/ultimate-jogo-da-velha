import { createGlobalStyle } from 'styled-components'
import { colors } from 'src/styles/colors'
import { devices } from './devices'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: Roboto, sans-serif;
  }

  html {
    font-size: 12px;

    @media ${devices.maxWidth.laptopL} {
      font-size: 11px;
    }

    @media ${devices.maxWidth.laptop} {
      font-size: 10px;
    }

    @media ${devices.maxWidth.tablet} {
      font-size: 9px;
    }
  }

  body {
    height: 100vh;
    color: ${colors.black};
    background-color: ${colors.primary};
  }

  h1 {
    font-size: 6rem;
    font-family: Anton, Roboto, sans-serif;

    @media ${devices.maxWidth.laptop} {
      font-size: 4.8rem;
    }

    @media ${devices.maxWidth.mobileL} {
      font-size: 3.2rem;
    }
  }
`
