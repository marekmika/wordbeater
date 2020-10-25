import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import game from "./reducers/game";

const store = createStore(game, composeWithDevTools(applyMiddleware()));

export default store;
