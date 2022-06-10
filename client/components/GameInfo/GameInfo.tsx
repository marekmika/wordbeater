import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { desktop } from '@components/shared/utils'

import { resetGame, setIsUserPlaying, decreaseTime } from '@redux/slices/game'
import { AppState } from '@redux/store'
import { updateUserScore } from '@services/firebaseService'

const ONE_SECOND = 1000

const GameInfo: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const { score, time, isUserPlaying } = useSelector(
    (state: AppState) => state.game
  )

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const onDecreaseTime = useCallback(async () => {
    dispatch(decreaseTime())
  }, [])

  useEffect(() => {
    if (isUserPlaying) {
      setIntervalId(setInterval(onDecreaseTime, ONE_SECOND))

      return
    }
  }, [isUserPlaying])

  useEffect(() => {
    if (time !== 0 || !intervalId) {
      return
    }

    clearInterval(intervalId)
    dispatch(setIsUserPlaying(false))

    dispatch(resetGame())
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
