import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'

import game from '@redux/reducers/game'
import user from '@redux/reducers/user'

const getStore = (initialState) => {
  const reducers = combineReducers({
    game,
    user,
  })

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )

  return store
}

export default getStore
