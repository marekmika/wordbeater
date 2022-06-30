import { AppState } from '@redux/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import {
  fetchUserData,
  logoutUser,
  signInWithPopup,
  updateUserScore,
} from '@services/firebaseService'

export interface UserState {
  uid?: string | null
  email: string | null
  bestScores: { beginner: number } | null
  photoUrl?: string
}

const initialState: UserState = {
  uid: null,
  email: null,
  bestScores: null,
}

export const fetchUserDataAction = createAsyncThunk(
  'fetchUserDataAction',
  async () => {
    try {
      return fetchUserData()
    } catch (error) {
      console.error({ error })
    }
  }
)

export const logoutUserAction = createAsyncThunk(
  'logoutUserAction',
  async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.error({ error })
    }
  }
)

export const signUserAction = createAsyncThunk('signUserAction', async () => {
  try {
    return signInWithPopup()
  } catch (error) {
    console.error({ error })
  }
})

export const updateUserScoreAction = createAsyncThunk(
  'updateUserScoreAction',
  async (arg, { getState }) => {
    try {
      const state = getState() as AppState

      return updateUserScore(state.user, state.game.score)
    } catch (error) {
      console.error({ error })
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload

      return state
    },
    // setUserBestScore: (state, action: PayloadAction<number>) => {
    //   state.bestScores = action.payload
    // },
    // resetUser: (state) => {
    //   state = initialState
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDataAction.fulfilled, (state, action) => {
      state = action.payload
    })
    builder.addCase(logoutUserAction.fulfilled, (state, action) => {
      state = initialState
      return state
    })
    builder.addCase(signUserAction.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
