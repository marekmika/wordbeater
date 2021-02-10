import { fetchUserData, updateUserScore } from '../../services/firebaseService'
import { setUserBestScoresAction } from './userActions'

export const GAME_ACTIONS_TYPES = {
  INCREASE_SCORE: 'INCREASE_SCORE',
  SET_CURRENT_WORD: 'SET_CURRENT_WORD',
  RESET_TIME: 'RESET_TIME',
  DECREASE_TIME: 'DECREASE_TIME',
  SET_IS_USER_PLAYING: 'SET_IS_USER_PLAYING',
  RESET_GAME: 'RESET_GAME',
  START_UPDATE_SCORE: 'START_UPDATE_SCORE',
  SUCCESSFUL_UPDATE_SCORE: 'SUCCESSFUL_UPDATE_SCORE',
}

export const increaseScoreAction = () => ({
  type: GAME_ACTIONS_TYPES.INCREASE_SCORE,
})

export const setIsUserPlayingAction = (data) => ({
  type: GAME_ACTIONS_TYPES.SET_IS_USER_PLAYING,
  data,
})

export const resetTimeAction = (seconds) => ({
  type: GAME_ACTIONS_TYPES.RESET_TIME,
  data: seconds,
})

export const reseScoreAction = (seconds) => ({
  type: GAME_ACTIONS_TYPES.RESET_TIME,
  data: seconds,
})

export const resetGameAction = () => ({
  type: GAME_ACTIONS_TYPES.RESET_GAME,
})

export const decreaseTimeAction = () => ({
  type: GAME_ACTIONS_TYPES.DECREASE_TIME,
})

export const gameOverAction = () => {
  return async (dispatch, getState) => {
    const state = getState()

    const { game } = state
    const { score } = game

    const fetchedUser = await fetchUserData()

    const { beginner } = fetchedUser.bestScores

    if (score > beginner) {
      dispatch({
        type: GAME_ACTIONS_TYPES.START_UPDATE_SCORE,
      })

      await updateUserScore(fetchedUser, score)

      dispatch({
        type: GAME_ACTIONS_TYPES.SUCCESSFUL_UPDATE_SCORE,
      })

      dispatch(setUserBestScoresAction({ beginner: score }))
    }

    dispatch(resetGameAction())
  }
}

export const setCurrentWordAction = (word) => ({
  type: GAME_ACTIONS_TYPES.SET_CURRENT_WORD,
  data: word,
})
