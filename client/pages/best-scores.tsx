import React from 'react'
import styled from 'styled-components'

import ScoreTable from '@components/ScoreTable/ScoreTable'
import Layout from '@components/Layout/Layout'

import { fetchBestBeginnerGamers, UserData } from '@services/firebaseService'
import { AppProps } from 'next/app'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const BestScoresPage: React.FC<
  AppProps & { bestBeginnerGamers: UserData[] }
> = ({ bestBeginnerGamers }): JSX.Element => {
  if (!bestBeginnerGamers) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Container>
        <ScoreTable rows={bestBeginnerGamers} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const bestBeginnerGamers = await fetchBestBeginnerGamers()

  return { props: { bestBeginnerGamers } }
}

export default BestScoresPage
