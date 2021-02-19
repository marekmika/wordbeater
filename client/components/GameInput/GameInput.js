import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, makeStyles, createStyles } from '@material-ui/core'
import styled from 'styled-components'

import { useCurrentWordSelector } from '@redux/reducers/game'
import { useIsGameProgress } from '@hooks/useIsGameInProgress'
import theme from '@styles/theme'

import {
  increaseScoreAction,
  setIsUserPlayingAction,
  resetTimeAction,
} from '@redux/actions/gameActions'

const GameInput = () => {
  const classes = useStyles()
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
      <TextField
        variant="outlined"
        onChange={(event) => handleChange(event.target.value)}
        value={inputWord}
        classes={{
          root: classes.root,
        }}
        InputProps={{
          classes: {
            input: classes.resize,
          },
        }}
        autoFocus
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

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: '20rem',
      backgroundColor: `${theme.colors.white}`,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: '0',
        },
        '&.Mui-focused fieldset': {
          border: '0',
        },
      },
    },
    resize: {
      color: `${theme.colors.black}`,
      fontSize: '2rem',
      lineHeight: '2.5rem',
      textAlign: 'center',
    },
  })
)

export default GameInput
