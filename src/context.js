import React, { Component } from 'react';
import { showWord } from './components/base/WordGenerator';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'COUNTDOWN':
            if (!state.isPlaying) {
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    seconds: state.seconds - 1
                };
            }

        case 'CHECKSTATUS':
            if (!action.isPlaying) {
                let lowest = Number.POSITIVE_INFINITY;

                state.highestScores.map(score => {
                    if (score.scoreArray < lowest) {
                        lowest = score.scoreArray;
                    }
                    return lowest;
                });

                if (
                    (state.score !== 0 && state.score !== -1) ||
                    lowest < state.score
                ) {
                    if (lowest !== state.score) {
                        state.highestScores.push({
                            scoreArray: state.score,
                            level: state.currentSelectedLevel
                        });
                        state.highestScores.sort((a, b) => {
                            return b.scoreArray - a.scoreArray;
                        });
                    }
                }

                return {
                    ...state,
                    message: state.messageWrong,
                    editableLevelSelection: false,
                    currentScore: state.score,
                    score: -1,
                    seconds: state.currentLevelSeconds,
                    isPlaying: false
                };
            } else {
                return {
                    ...state,
                    editableLevelSelection: true
                };
            }
        case 'CHANGELEVEL':
            switch (action.currentLevel) {
                case state.begginer:
                    return {
                        ...state,
                        currentLevelSeconds: state.beginnerSeconds,
                        currentSelectedLevel: state.begginer,
                        seconds: state.beginnerSeconds,
                        isPlaying: false
                    };
                case state.advanced:
                    return {
                        ...state,
                        currentLevelSeconds: state.advancedSeconds,
                        currentSelectedLevel: state.advanced,
                        seconds: state.advancedSeconds,
                        isPlaying: false
                    };
                case state.insame:
                    return {
                        ...state,
                        currentLevelSeconds: state.insameSeconds,
                        currentSelectedLevel: state.insame,
                        seconds: state.insameSeconds,
                        isPlaying: false
                    };
                default:
                    break;
            }
            break;
        case 'WORDMATCH':
            return {
                ...state,
                message: state.messageCorrect,
                currentScore: state.score,
                seconds: state.currentLevelSeconds,
                score: state.score + 1,
                currentWord: showWord(),
                isPlaying: true,
                editableLevelSelection: true
            };
        default:
            return state;
    }
};

// isHighestScore = score => {
//     if (
//         (state.highestScores.length === 0 && state.score !== 0) ||
//         this.lowestScore(state.highestScores) < state.score
//     ) {
//         highestScores.push({
//             scoreArray: score,
//             level: currentSelectedLevel
//         });
//         highestScores.sort((a, b) => {
//             return b.scoreArray - a.scoreArray;
//         });
//     }
// };

// /**
//  * Find lowest score in array of objects
//  * @param scores
//  */
// lowestScore = scores => {
//     let lowest = Number.POSITIVE_INFINITY;

//     scores.map(score => {
//         if (score.scoreArray < lowest) {
//             lowest = score.scoreArray;
//         }
//         return lowest;
//     });

//     return lowest;
// };

export class Provider extends Component {
    state = {
        wordInput: '',
        message: '',
        selectedLevel: 'Beginner',
        currentSelectedLevel: 'Beginner',
        currentLevelSeconds: 5,
        currentWord: showWord(),
        messageCorrect: 'Correct!',
        messageWrong: 'Game over! For restart game type the word.',
        begginer: 'Beginner',
        advanced: 'Advanced',
        insame: 'Insame',
        editableLevelSelection: true,
        beginnerSeconds: 5,
        advancedSeconds: 3,
        insameSeconds: 2,
        seconds: 5,
        score: 0,
        currentScore: 0,
        highestScores: [],
        isPlaying: true,
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
