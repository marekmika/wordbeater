import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'

import game from './reducers/game'

const store = createStore(game, composeWithDevTools(applyMiddleware(thunk)))

export default store
