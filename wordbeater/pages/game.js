import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import store from "../redux/store";

import GameInput from "../components/GameInput/GameInput";
import Layout from "../components/Layout/Layout";
import GameInfo from "../components/GameInfo/GameInfo";

const GamePage = () => {
  return (
    <Provider store={store}>
      <Layout>
        <GamePageWrapper>
          <GameInfo />
          <GameInput
            wordInput={"Test"}
            handleChange={() => console.log("Hello")}
          />
        </GamePageWrapper>
      </Layout>
    </Provider>
  );
};

const GamePageWrapper = styled.div``;

export default GamePage;
