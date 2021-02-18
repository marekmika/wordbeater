import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import store from '@redux/store'

import GameInput from '@components/GameInput/GameInput'
import GameWord from '@components/GameWord/GameWord'
import Layout from '@components/Layout/Layout'
import GameInfo from '@components/GameInfo/GameInfo'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'

const GamePage = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <GamePageWrapper>
            <GameInfo />
            <GameWord />
            <GameInput />
          </GamePageWrapper>
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

const GamePageWrapper = styled.div``

export default GamePage
