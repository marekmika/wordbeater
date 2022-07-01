import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getRandomWord } from '@utils/WordGenerator'

export interface CounterState {
  score: number
  currentWord: string
  isUserPlaying: boolean
  time: number
}

const initialState: CounterState = {
  score: 0,
  currentWord: '',
  isUserPlaying: false,
  time: 5,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increaseScore: (state) => {
      state.score += 1
    },
    setCurrentWord: (state) => {
      state.currentWord = getRandomWord()
    },
    setIsUserPlaying: (state, action: PayloadAction<boolean>) => {
      state.isUserPlaying = action.payload
    },
    resetTime: (state) => {
      state.time = initialState.time
    },
    resetGame: (state) => {
      state = initialState
      return state
    },
    decreaseTime: (state) => {
      state.time -= 1
    },
  },
})

export const {
  increaseScore,
  setCurrentWord,
  setIsUserPlaying,
  resetTime,
  resetGame,
  decreaseTime,
} = gameSlice.actions

export default gameSlice.reducer
