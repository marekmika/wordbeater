import { useSelector } from "react-redux";

import { SETTINGS_ACTIONS_TYPES } from "../actions/gameActions";
import initialGameState from "../initialGameState";

const settings = produce((state = initialGameState, { type, data }) => {
  switch (type) {
    default:
      return state;
  }
});

export default settings;
