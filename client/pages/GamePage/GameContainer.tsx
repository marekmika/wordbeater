import {
  decreaseTime,
  increaseScore,
  resetGame,
  resetTime,
  setCurrentWord,
  setIsUserPlaying,
} from '@redux/slices/game'
import { updateUserScoreAction } from '@redux/slices/user'
import { AppState } from '@redux/store'
import { updateUserScore } from '@services/firebaseService'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Game from './Game'

export default function GameContainer(): JSX.Element {
  const dispatch = useDispatch()
  const [inputWord, setInputWord] = useState<string>()
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const user = useSelector((state: AppState) => state.user)
  const { currentWord, score, time, isUserPlaying } = useSelector(
    (state: AppState) => state.game
  )

  const clearInput = useCallback(() => {
    setInputWord('')
  }, [])

  const handleChange = useCallback(
    async (value: string) => {
      setInputWord(value)
      if (currentWord !== value) {
        return
      }

      await updateUserScore(user, score)
      clearInput()
      dispatch(setCurrentWord())

      if (!isUserPlaying) {
        dispatch(setIsUserPlaying(true))

        return
      }

      dispatch(increaseScore())
      dispatch(resetTime())
    },
    [
      setInputWord,
      updateUserScore,
      clearInput,
      setCurrentWord,
      setIsUserPlaying,
      currentWord,
      user,
      score,
      isUserPlaying,
    ]
  )

  useEffect(() => {
    dispatch(setCurrentWord())
  }, [])

  const onDecreaseTime = useCallback(async () => {
    dispatch(decreaseTime())
  }, [])

  useEffect(() => {
    if (isUserPlaying) {
      setIntervalId(setInterval(onDecreaseTime, 1000))

      return
    }
  }, [isUserPlaying])

  // TODO: Better handling of decreasing time??
  useEffect(() => {
    if (time !== 0 || !intervalId) {
      return
    }

    clearInterval(intervalId)
    dispatch(setIsUserPlaying(false))
    dispatch(updateUserScoreAction())
    dispatch(resetGame())
  }, [time])

  return (
    <Game
      gameWord={currentWord}
      score={score}
      time={time}
      onInputChange={handleChange}
      gameInputValue={inputWord}
    />
  )
}
