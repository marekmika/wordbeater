import { COUNTDOWN, CHECKSTATUS, CHANGELEVEL, WORDMATCH } from './types';

export const countdown = () => {
    return {
        type: COUNTDOWN
    };
};

export const checkStatus = (isPlaying) => {
    return {
        type: CHECKSTATUS,
        isPlaying: isPlaying
    };
};
export const changeLevel = (selectedLevel) => {
    return {
        type: CHANGELEVEL,
        selectedLevel: selectedLevel
    };
};
export const wordMatch = (isPlaying) => {
    return {
        type: WORDMATCH,
        payload: isPlaying
    };
};