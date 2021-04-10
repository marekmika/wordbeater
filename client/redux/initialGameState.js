import { getRandomWord } from '@utils/WordGenerator'

const initialGameState = {
  user: {
    uid: null,
    email: null,
    bestScores: null,
  },
  game: {
    score: 0,
    time: 5,
    currentWord: getRandomWord(),
    isUserPlaying: false,
  },
}

export default initialGameState
