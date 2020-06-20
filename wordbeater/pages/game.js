import React from "react";
import GameInput from "../components/GameInput/GameInput";
import Layout from "../components/Layout/Layout";

const GamePage = () => {
  return (
    <Layout>
      <div className="col-lg-8 mx-auto">
        <GameInput
          wordInput={"Test"}
          handleChange={() => console.log("Hello")}
        />
      </div>
    </Layout>
  );
};

export default GamePage;
