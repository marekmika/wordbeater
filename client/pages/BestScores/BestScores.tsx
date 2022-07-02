import React from 'react'
import styled from 'styled-components'

import ScoreTable from '@components/ScoreTable/ScoreTable'
import Layout from 'Layout/Layout'

import { UserData } from '@services/firebaseService'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const BestScores: React.FC<{ bestBeginnerGamers: UserData[] }> = ({
  bestBeginnerGamers,
}): JSX.Element => {
  return (
    <Layout>
      <Container>
        <ScoreTable rows={bestBeginnerGamers} />
      </Container>
    </Layout>
  )
}

export default BestScores
