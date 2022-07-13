import React from 'react'
import styled from 'styled-components'
import getConfig from 'next/config'

import theme from '@styles/theme'

const { publicRuntimeConfig } = getConfig()
const { NODE_ENV } = publicRuntimeConfig
const isDevelopment = NODE_ENV === 'development'

const GameWordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  height: 3rem;
  margin-bottom: 4rem;
`

const WordTypography = styled.span<{ isDevelopment: boolean }>`
  font-weight: bold;
  font-size: clamp(2rem, 5vw, 2.5rem);

  ${({ isDevelopment }) =>
    !isDevelopment &&
    `-webkit-user-select: none;  
    -moz-user-select: none;     
    -ms-user-select: none;      
    user-select: none;
  `}
`

type Props = {
  word: string
}

const GameWord = ({ word }: Props): JSX.Element => (
  <GameWordWrapper>
    <WordTypography isDevelopment={isDevelopment}>{word}</WordTypography>
  </GameWordWrapper>
)

export default GameWord
