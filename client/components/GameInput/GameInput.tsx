import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, makeStyles, createStyles } from '@material-ui/core'
import styled from 'styled-components'

import theme from '@styles/theme'

import {
  increaseScore,
  resetTime,
  setCurrentWord,
  setIsUserPlaying,
} from '@redux/slices/game'
import { AppState } from '@redux/store'
import { updateUserScore } from '@services/firebaseService'

const GameInput: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { currentWord, score } = useSelector((state: AppState) => state.game)
  const isGameInProgress = useSelector(
    (state: AppState) => state.game.isUserPlaying
  )
  const user = useSelector((state: AppState) => state.user)

  const [inputWord, setInputWord] = useState<string>()

  const clearInput = () => {
    setInputWord('')
  }

  const handleChange = async (value: string) => {
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
  }

  return (
    <GameInputWrapper>
      <StyledTextField
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

const StyledTextField = styled(TextField)`
  width: clamp(10rem, 50%, 20rem);
`

const useStyles = makeStyles(() =>
  createStyles({
    root: {
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
      textAlign: 'center',
    },
  })
)

export default GameInput
