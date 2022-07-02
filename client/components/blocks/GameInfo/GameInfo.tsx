import React from 'react'
import styled from 'styled-components'

import { desktop } from '@components/shared/utils'

const GameInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  ${desktop`
    margin: 2rem 0;
  `}
`

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  min-width: 6rem;
  margin: 0 3rem;
  font-size: clamp(1.5rem, 5vw, 2.5rem);

  ${desktop`
    margin: 0 10rem;
  `}
`

const StyledTypography = styled.p`
  margin: 1rem 0;
`

type Props = {
  time: number
  score: number
}

const GameInfo = ({ time, score }: Props): JSX.Element => (
  <GameInfoWrapper>
    <GameInfoContainer>
      <StyledTypography>Time</StyledTypography>
      <StyledTypography>{time}</StyledTypography>
    </GameInfoContainer>
    <GameInfoContainer>
      <StyledTypography>Score</StyledTypography>
      <StyledTypography>{score}</StyledTypography>
    </GameInfoContainer>
  </GameInfoWrapper>
)

export default GameInfo
