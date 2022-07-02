import React from 'react'
import { fetchBestBeginnerGamers, UserData } from '@services/firebaseService'
import { AppProps } from 'next/app'
import BestScoreContainer from './BestScores'

const BestScoresPage: React.FC<
  AppProps & { bestBeginnerGamers: UserData[] }
> = ({ bestBeginnerGamers }): JSX.Element => {
  if (!bestBeginnerGamers) {
    return <div>Loading...</div>
  }

  return <BestScoreContainer bestBeginnerGamers={bestBeginnerGamers} />
}

export async function getStaticProps() {
  const bestBeginnerGamers = await fetchBestBeginnerGamers()

  return { props: { bestBeginnerGamers } }
}

export default BestScoresPage
