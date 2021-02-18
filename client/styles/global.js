import { createGlobalStyle } from 'styled-components'

import theme from '@styles/theme'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    letter-spacing: 0.5px;
    font-family: Montserrat;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primaryBlack};
  }
`
