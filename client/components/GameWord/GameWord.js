import React from 'react'
import styled from 'styled-components'

import theme from '@styles/theme'

import { useCurrentWordSelector } from '@redux/reducers/game'

const GameWord = () => {
  const currentWord = useCurrentWordSelector()

  return (
    <GameWordWrapper>
      <WordTypography>{currentWord}</WordTypography>
    </GameWordWrapper>
  )
}

const GameWordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  height: 3rem;
  margin-bottom: 4rem;
`

const WordTypography = styled.span`
  font-weight: bold;
  font-size: clamp(2rem, 5vw, 2.5rem);
`

export default GameWord
