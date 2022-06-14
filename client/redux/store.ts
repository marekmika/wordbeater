import {
  combineReducers,
  configureStore,
  Store,
  ThunkAction,
} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { Action } from 'redux'

import gameReducer from './slices/game'
import userReducer from './slices/user'

const combinedReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
})

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  })

export type AppState = ReturnType<typeof combinedReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  any,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<Store<any>>(makeStore, { debug: true })
