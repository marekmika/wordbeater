import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { useIsGameProgress } from '../../hooks/useIsGameInProgress'
import { useScoreSelector, useTimeSelector } from '../../redux/reducers/game'
import {
  decreaseTimeAction,
  setIsUserPlayingAction,
  gameOverAction,
} from '../../redux/actions/gameActions'

const ONE_SECOND = 1000

const GameInfo = () => {
  const dispatch = useDispatch()
  const score = useScoreSelector()
  const time = useTimeSelector()
  const isGameInProgress = useIsGameProgress()

  const [intervalId, setIntervalId] = useState(null)

  const discreaseTime = () => {
    dispatch(decreaseTimeAction())
  }

  useEffect(() => {
    if (!isGameInProgress) {
      clearInterval(intervalId)
      dispatch(setIsUserPlayingAction(false))

      dispatch(gameOverAction())

      return
    }

    setIntervalId(setInterval(discreaseTime, ONE_SECOND))
  }, [isGameInProgress])

  return (
    <GameInfoWrapper>
      <div>
        <h3>Time Left: {time}</h3>
      </div>
      <div>
        <h3>Score: {score}</h3>
      </div>
    </GameInfoWrapper>
  )
}

const GameInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default GameInfo
