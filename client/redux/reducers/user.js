import produce from 'immer'
import { useSelector } from 'react-redux'

import { USER_ACTIONS_TYPES } from '../actions/userActions'
import initialGameState from '../initialGameState'

const user = produce((state = initialGameState.user, { type, data }) => {
  switch (type) {
    case USER_ACTIONS_TYPES.SET_USER:
      state = data
      return state

    case USER_ACTIONS_TYPES.SET_USER_BEST_SCORES:
      state.bestScores = data
      return state

    case USER_ACTIONS_TYPES.RESET_USER:
      state = initialGameState.user
      return state

    default:
      return state
  }
})

export const userSelector = () => useSelector((store) => store.user)

export default user
