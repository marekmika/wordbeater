import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { useIsGameProgress } from '../../hooks/useIsGameInProgress'
import { useScoreSelector, useTimeSelector } from '../../redux/reducers/game'
import { userSelector } from '../../redux/reducers/user'

import {
  fetchUserDataAction,
  logoutUserAction,
} from '../../redux/actions/userActions'

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
  const user = userSelector()

  const [intervalId, setIntervalId] = useState(null)

  const discreaseTime = () => {
    dispatch(decreaseTimeAction())
  }

  useEffect(() => {
    if (isGameInProgress) {
      setIntervalId(setInterval(discreaseTime, ONE_SECOND))

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

  useEffect(() => {
    dispatch(fetchUserDataAction())
  }, [])

  const logout = async () => dispatch(logoutUserAction())

  return (
    <GameInfoWrapper>
      <div>
        <h3>Time Left: {time}</h3>
      </div>
      <div>
        <h3>Score: {score}</h3>
      </div>
      {user?.email && <button onClick={logout}>Logout</button>}
    </GameInfoWrapper>
  )
}

const GameInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default GameInfo
