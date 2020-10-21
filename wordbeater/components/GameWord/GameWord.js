import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useCurrentWordSelector } from "../../redux/reducers/game";
import { getRandomWord } from "../../utils/WordGenerator";
import { setCurrentWord } from "../../redux/actions/gameActions";

const GameWord = () => {
  const dispatch = useDispatch();
  const currentWord = useCurrentWordSelector();

  useEffect(() => {
    const currentWord = getRandomWord();

    dispatch(setCurrentWord(currentWord));
  }, []);

  return <GameWordWrapper>{currentWord}</GameWordWrapper>;
};

const GameWordWrapper = styled.div`
  color: #f8f9fa;
  background-color: #343a40;
  height: 50px;
`;

export default GameWord;
