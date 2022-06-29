import React from 'react'

import GameInput from '@components/GameInput/GameInput'
import GameWord from '@components/GameWord/GameWord'
import GameInfo from '@components/blocks/GameInfo/GameInfo'
import Layout from '@components/Layout/Layout'

const GamePage = () => {
  return (
    <Layout>
      <GameWord />
      <GameInput />
      <GameInfo />
    </Layout>
  )
}

export default GamePage
