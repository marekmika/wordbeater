import React from 'react'
import styled from 'styled-components'

import ScoreTable from '@components/ScoreTable/ScoreTable'
import Layout from '@components/Layout/Layout'

import { fetchBestBeginnerGamers } from '@services/firebaseService'

const BestScoresPage = ({ pageProps }) => {
  const { bestBeginnerGamers } = pageProps

  return (
    <Layout>
      <Container>
        <ScoreTable rows={bestBeginnerGamers} nameLevelKey={'beginner'} />
      </Container>
    </Layout>
  )
}

BestScoresPage.getInitialProps = async (ctx) => {
  const bestBeginnerGamers = await fetchBestBeginnerGamers()

  return { bestBeginnerGamers }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default BestScoresPage
