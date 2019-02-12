import { showWord } from '../components/base/WordGenerator';
import {
    COUNTDOWN,
    CHECKSTATUS,
    CHANGELEVEL,
    WORDMATCH
} from '../actions/types';

const initialState = {
    message: '',
    selectedLevel: 'Beginner',
    currentSelectedLevel: 'Beginner',
    currentLevelSeconds: 5,
    currentWord: showWord(),
    messageCorrect: 'Correct!',
    messageWrong: 'Game over! For restart game type the word.',
    begginer: 'Beginner',
    advanced: 'Advanced',
    insane: 'Insane',
    editableLevelSelection: true,
    beginnerSeconds: 5,
    advancedSeconds: 3,
    insaneSeconds: 2,
    seconds: 5,
    score: 0,
    currentScore: 0,
    highestScores: [],
    isPlaying: true,
    usersCurrentData: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTDOWN:
            if (!state.isPlaying && state.seconds === 0) {
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    seconds: state.seconds - 1
                };
            }
        case CHECKSTATUS:
            if (!action.isPlaying) {
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
        case CHANGELEVEL:
            switch (action.selectedLevel) {
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
                case state.insane:
                    return {
                        ...state,
                        currentLevelSeconds: state.insaneSeconds,
                        currentSelectedLevel: state.insane,
                        seconds: state.insaneSeconds,
                        isPlaying: false
                    };
                default:
                    break;
            }
            break;
        case WORDMATCH:
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
            return { ...state };
    }
}

export default reducer;
