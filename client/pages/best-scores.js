import React from 'react'

import ScoreTable from '@components/ScoreTable/ScoreTable'
import Layout from '@components/Layout/Layout'

import { fetchBestBeginnerGamers } from '@services/firebaseService'

const BestScoresPage = ({ pageProps }) => {
  const { bestBeginnerGamers } = pageProps

  return (
    <Layout>
      <ScoreTable rows={bestBeginnerGamers} nameLevelKey={'beginner'} />
    </Layout>
  )
}

BestScoresPage.getInitialProps = async (ctx) => {
  const bestBeginnerGamers = await fetchBestBeginnerGamers()

  return { bestBeginnerGamers }
}

export default BestScoresPage
