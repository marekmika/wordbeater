export const GAME_ACTIONS_TYPES = {
  INCREASE_SCORE: "INCREASE_SCORE",
  SET_CURRENT_WORD: "SET_CURRENT_WORD",
};

export const increaseScore = () => ({
  type: GAME_ACTIONS_TYPES.INCREASE_SCORE,
});

export const setCurrentWord = word => ({
  type: GAME_ACTIONS_TYPES.SET_CURRENT_WORD,
  data: word
});
