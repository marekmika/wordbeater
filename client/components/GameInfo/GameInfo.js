import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { desktop } from '@components/shared/utils'

import { useIsGameProgress } from '@hooks/useIsGameInProgress'
import { useScoreSelector, useTimeSelector } from '@redux/reducers/game'

import {
  decreaseTimeAction,
  setIsUserPlayingAction,
  gameOverAction,
} from '@redux/actions/gameActions'

const ONE_SECOND = 1000

const GameInfo = () => {
  const dispatch = useDispatch()
  const score = useScoreSelector()
  const time = useTimeSelector()
  const isGameInProgress = useIsGameProgress()

  const [intervalId, setIntervalId] = useState(null)

  const decreaseTime = () => {
    dispatch(decreaseTimeAction())
  }

  useEffect(() => {
    if (isGameInProgress) {
      setIntervalId(setInterval(decreaseTime, ONE_SECOND))

      return
    }
  }, [isGameInProgress])

  useEffect(() => {
    if (time !== 0) {
      return
    }

    clearInterval(intervalId)
    dispatch(setIsUserPlayingAction(false))

    dispatch(gameOverAction())
  }, [time])

  return (
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
}

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

export default GameInfo
