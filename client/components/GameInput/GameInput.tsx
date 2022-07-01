import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import {
  increaseScore,
  resetTime,
  setCurrentWord,
  setIsUserPlaying,
} from '@redux/slices/game'
import { AppState } from '@redux/store'
import { updateUserScore } from '@services/firebaseService'
import TextField from '@components/elements/TextField/TextField'

const GameInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

const GameInput: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const { currentWord, score } = useSelector((state: AppState) => state.game)
  const isGameInProgress = useSelector(
    (state: AppState) => state.game.isUserPlaying
  )
  const user = useSelector((state: AppState) => state.user)
  const [inputWord, setInputWord] = useState<string>()

  const clearInput = useCallback(() => {
    setInputWord('')
  }, [])

  const handleChange = useCallback(
    async (value: string) => {
      setInputWord(value)
      const isValueSameCurrentWord = currentWord === value

      if (!isValueSameCurrentWord) {
        return
      }

      await updateUserScore(user, score)
      clearInput()
      dispatch(setCurrentWord())

      if (!isGameInProgress) {
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
    ]
  )

  return (
    <GameInputWrapper>
      <TextField handleChange={handleChange} value={inputWord} />
    </GameInputWrapper>
  )
}

export default GameInput
