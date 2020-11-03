import { useSelector } from 'react-redux'
import produce from 'immer'

import { GAME_ACTIONS_TYPES } from '../actions/gameActions'
import initialGameState from '../initialGameState'

const game = produce((state = initialGameState, { type, data }) => {
  switch (type) {
    case GAME_ACTIONS_TYPES.INCREASE_SCORE:
      state.score += 1
      return state

    case GAME_ACTIONS_TYPES.SET_CURRENT_WORD:
      state.currentWord = data
      return state

    case GAME_ACTIONS_TYPES.SET_IS_USER_PLAYING:
      state.isUserPlaying = data
      return state

    case GAME_ACTIONS_TYPES.DECREASE_TIME:
      state.time -= 1
      return state

    case GAME_ACTIONS_TYPES.RESET_TIME:
      state.time = initialGameState.time
      return state

    case GAME_ACTIONS_TYPES.RESET_GAME:
      state = initialGameState
      return state

    default:
      return state
  }
})

export const useGameSelector = () => useSelector((store) => store)

export const useScoreSelector = () => useSelector((store) => store.score)

export const useTimeSelector = () => useSelector((store) => store.time)

export const useIsUserPlayingSelector = () =>
  useSelector((store) => store.isUserPlaying)

export const useCurrentWordSelector = () =>
  useSelector((store) => store.currentWord)

export default game
