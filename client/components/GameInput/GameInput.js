import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

import { useCurrentWordSelector } from '@redux/reducers/game'
import { useIsGameProgress } from '@hooks/useIsGameInProgress'

import {
  increaseScoreAction,
  setIsUserPlayingAction,
  resetTimeAction,
} from '@redux/actions/gameActions'

const INPUT_VALUE_DEFAULT = 'Start typing...'

const GameInput = () => {
  const dispatch = useDispatch()

  const currentWord = useCurrentWordSelector()
  const isGameInProgress = useIsGameProgress()

  const [inputWord, setInputWord] = useState()

  const clearInput = () => {
    setInputWord('')
  }

  const handleChange = async (value) => {
    setInputWord(value)

    const isValueSameCurrentWord = currentWord === value

    if (!isValueSameCurrentWord) {
      return
    }

    clearInput()

    if (!isGameInProgress) {
      dispatch(setIsUserPlayingAction(true))

      return
    }

    dispatch(increaseScoreAction())
    dispatch(resetTimeAction())
  }

  return (
    <GameInputWrapper>
      {/* TODO: Change color of input */}
      <TextField
        autoFocus
        variant="outlined"
        placeholder={INPUT_VALUE_DEFAULT}
        onChange={(event) => handleChange(event.target.value)}
        value={inputWord}
        style={{
          backgroundColor: '#ffffff',
          borderColor: 'black',
        }}
        InputProps={{
          min: 0,
          style: {
            textAlign: 'center',
            color: 'black',
            border: 0,
          },
        }}
      />
    </GameInputWrapper>
  )
}

const GameInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export default GameInput
