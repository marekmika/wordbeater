import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, makeStyles, createStyles } from '@material-ui/core'
import styled from 'styled-components'

import theme from '@styles/theme'
import { getRandomWord } from '@utils/WordGenerator'

import { useCurrentWordSelector } from '@redux/reducers/game'
import { useIsGameProgress } from '@hooks/useIsGameInProgress'
import { setCurrentWordAction } from '@redux/actions/gameActions'

import {
  increaseScoreAction,
  setIsUserPlayingAction,
  resetTimeAction,
} from '@redux/actions/gameActions'

const GameInput: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const currentWord = useCurrentWordSelector()
  const isGameInProgress = useIsGameProgress()

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

    clearInput()

    const nextWord = getRandomWord()

    dispatch(setCurrentWordAction(nextWord))

    if (!isGameInProgress) {
      dispatch(setIsUserPlayingAction(true))

      return
    }

    dispatch(increaseScoreAction())
    dispatch(resetTimeAction())
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
