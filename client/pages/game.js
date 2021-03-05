import React from 'react'
import styled from 'styled-components'

import GameInput from '@components/GameInput/GameInput'
import GameWord from '@components/GameWord/GameWord'
import GameInfo from '@components/GameInfo/GameInfo'

import { fetchUserData } from '@services/firebaseService'
import Layout from '@components/Layout/Layout'

const GamePage = () => {
  return (
    <Layout>
      <GamePageWrapper>
        <GameWord />
        <GameInput />
        <GameInfo />
      </GamePageWrapper>
    </Layout>
  )
}

const GamePageWrapper = styled.div``

// Add SSR
GamePage.getInitialProps = async (ctx) => {
  const state = ctx.store.getState()
  const userData = await fetchUserData()

  console.log({ userData })

  return { userData }
}

export default GamePage
