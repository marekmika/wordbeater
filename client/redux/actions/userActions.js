import {
  fetchUserData,
  logoutUser,
  signInWithPopup,
} from '@services/firebaseService'

export const USER_ACTIONS_TYPES = {
  SET_USER: 'SET_USER',
  RESET_USER: 'RESET_USER',
  START_LOGOUT: 'START_LOGOUT',
  END_LOGOUT: 'END_LOGOUT',
  SET_USER_BEST_SCORES: 'SET_USER_BEST_SCORES',
}

// TODO: Delete the duplicity of code for aut().onAuthStateChanged
export const fetchUserDataAction = () => async (dispatch) => {
  let loggedUser = null

  try {
    loggedUser = await fetchUserData()

    dispatch(setUserAction(loggedUser))
  } catch (error) {
    console.log({ error })
  }
}

export const signUserAction = () => async (dispatch) => {
  const loggedUser = await signInWithPopup()

  dispatch(setUserAction(loggedUser))
}

export const logoutUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: USER_ACTIONS_TYPES.START_LOGOUT })

    await logoutUser()
  } catch (error) {
    console.log({ error })
  }

  dispatch(resetUserAction())

  dispatch({ type: USER_ACTIONS_TYPES.END_LOGOUT })
}

export const setUserAction = (user) => ({
  type: USER_ACTIONS_TYPES.SET_USER,
  data: user,
})

export const setUserBestScoresAction = (bestScores) => ({
  type: USER_ACTIONS_TYPES.SET_USER_BEST_SCORES,
  data: bestScores,
})

export const resetUserAction = () => ({
  type: USER_ACTIONS_TYPES.RESET_USER,
})
