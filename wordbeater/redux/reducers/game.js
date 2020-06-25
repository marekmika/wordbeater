import { useSelector } from "react-redux";

import { GAME_ACTIONS_TYPES } from "../actions/gameActions";
import initialGameState from "../initialGameState";

const game = (state = initialGameState, action) => {
  switch (action.type) {
    case GAME_ACTIONS_TYPES.INCREASE_SCORE:
      return { ...state, score: state.score + 1 };
    case GAME_ACTIONS_TYPES.SET_CURRENT_WORD:
      return { ...state, currentWord: action.data };
    default:
      return state;
  }
};

export const useGameSelector = () => useSelector((store) => store);

export default game;
