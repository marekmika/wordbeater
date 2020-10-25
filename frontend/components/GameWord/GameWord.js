import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getRandomWord } from '../../utils/WordGenerator'
import theme from '../../styles/theme'

import { setCurrentWordAction } from '../../redux/actions/gameActions'

import {
  useCurrentWordSelector,
  useScoreSelector,
} from '../../redux/reducers/game'

const GameWord = () => {
  const dispatch = useDispatch()

  const currentWord = useCurrentWordSelector()
  const score = useScoreSelector()

  useEffect(() => {
    const currentWord = getRandomWord()

    dispatch(setCurrentWordAction(currentWord))
  }, [score])

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
  background-color: ${theme.colors.primaryBlue};
  height: 3rem;
`

const WordTypography = styled.span`
  font-size: 1.5rem;
`

export default GameWord
