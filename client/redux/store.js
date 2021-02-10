import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'

import game from './reducers/game'
import user from './reducers/user'

const reducers = combineReducers({
  game,
  user,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
