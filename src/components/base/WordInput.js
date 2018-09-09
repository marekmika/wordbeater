import React, { Component } from "react";
import { showWord } from "./WordGenerator";
import GameInfo from "./GameInfo";
import GameInput from "./GameInput";
import HighScoreComponent from "./HighScoreComponent";
import LevelSelection from "./LevelSelection";
import GivenWord from "./GivenWord";
import Overview from "./Overview";

class WordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordInput: "",
      message: "",
      selectedLevel: "Beginner",
      currentSelectedLevel: "Beginner",
      currentLevelSeconds: 5,
      currentWord: showWord(),
      messageCorrect: "Correct!",
      messageWrong: "Game over! For restart game type the word.",
      begginer: "Beginner",
      advanced: "Advanced",
      insame: "Insame"
    };

    this.seconds = 5;
    this.score = 0;
    this.currentScore = 0;
    this.highestScores = [];
  }

  /**
   * Gets selected level from LevelSelection component
   */
  callBackLevel = levelFromLevelSelection => {
    this.setState({ selectedLevel: levelFromLevelSelection });
  };

  /**
   * Follow method is called each onChange event of input
   * @param event
   */
  handleChange = event => {
    const {
      currentWord,
      currentLevelSeconds,
      selectedLevel,
      messageCorrect,
      begginer,
      advanced,
      insame
    } = this.state;
    this.setState({ [event.target.name]: event.target.value });

    if (event.target.value.toLowerCase() === currentWord) {
      this.setState({ message: messageCorrect });
      this.setState({ [event.target.name]: "" });

      switch (selectedLevel) {
        case begginer:
          this.setState({
            currentLevelSeconds: 5,
            currentSelectedLevel: begginer
          });
          this.seconds = currentLevelSeconds;
          break;
        case advanced:
          this.setState({
            currentLevelSeconds: 3,
            currentSelectedLevel: advanced
          });
          this.seconds = currentLevelSeconds;
          break;
        case insame:
          this.setState({
            currentLevelSeconds: 2,
            currentSelectedLevel: insame
          });
          this.seconds = currentLevelSeconds;
          break;
        default:
          break;
      }

      this.seconds = currentLevelSeconds;
      this.setState({ score: this.score++ });
      this.setState({ currentWord: showWord() });
    }
  };

  /**
   * Check state of game
   * @param isPlaying
   */
  checkStatus = isPlaying => {
    const { messageWrong } = this.state;
    if (!isPlaying) {
      this.setState({
        message: messageWrong
      });
      this.currentScore = this.score;
      if (this.currentScore !== 0 && this.currentScore !== -1) {
        this.isHighestScore(this.currentScore);
      }
      this.score = -1;
      this.setState({ score: this.score });
    }
  };

  /**
   * Execute timer after component is mounted
   */
  componentDidMount = () => {
    setInterval(this.countdown, 1000);
  };

  /**
   * Countdown of players time
   */
  countdown = () => {
    if (this.seconds > 0) {
      this.setState({ seconds: this.seconds-- });
    } else if (this.seconds === 0) {
      this.checkStatus(false);
      this.setState({ seconds: this.seconds });
    }
  };

  /**
   * Consider if the given score is higher than some scores in highestScores array. If yes is added with selected level
   * @param score
   */
  isHighestScore = score => {
    const { highestScores } = this;
    const { currentSelectedLevel } = this.state;

    if (
      (highestScores.length === 0 && score !== 0) ||
      this.lowestScore(highestScores) < score
    ) {
      highestScores.push({ scoreArray: score, level: currentSelectedLevel });
      highestScores.sort((a, b) => {
        return b.scoreArray - a.scoreArray;
      });
    }
  };

  /**
   * Find lowest score in array of objects
   * @param scores
   */
  lowestScore = scores => {
    let lowest = Number.POSITIVE_INFINITY;

    scores.map(score => {
      if (score.scoreArray < lowest) {
        lowest = score.scoreArray;
      }
      return lowest;
    });

    return lowest;
  };

  render() {
    const {
      message,
      currentWord,
      wordInput,
      currentLevelSeconds,
      currentSelectedLevel
    } = this.state;
    const { seconds, score, handleChange, highestScores } = this;

    return (
      <div className="col-lg-8 mx-auto">
        <Overview currentLevelSeconds={currentLevelSeconds} message={message} />
        <GivenWord currentWord={currentWord} />
        <GameInput wordInput={wordInput} handleChange={handleChange} />
        <GameInfo seconds={seconds} score={score} />
        <LevelSelection callBackLevel={this.callBackLevel} />
        <HighScoreComponent
          highestScores={highestScores}
          selectedLevel={currentSelectedLevel}
        />
      </div>
    );
  }
}

export default WordInput;
