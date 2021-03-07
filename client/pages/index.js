import React, { useEffect } from 'react'

import GameInput from '@components/GameInput/GameInput'
import GameWord from '@components/GameWord/GameWord'
import GameInfo from '@components/GameInfo/GameInfo'

import { fetchUserData, initializeFirebase } from '@services/firebaseService'
import Layout from '@components/Layout/Layout'

const GamePage = () => {
  useEffect(() => {
    initializeFirebase()
      .auth()
      .onAuthStateChanged((user) => {
        console.log({ User2: user })
      })
  }, [])

  return (
    <Layout>
      <GameWord />
      <GameInput />
      <GameInfo />
    </Layout>
  )
}

// Add SSR
GamePage.getInitialProps = async (ctx) => {
  const state = ctx.store.getState()
  const userData = await fetchUserData()

  console.log({ userData })

  return { userData }
}

export default GamePage
