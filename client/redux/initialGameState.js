const initialGameState = {
  user: {
    uid: null,
    email: null,
    bestScores: null,
  },
  game: {
    score: 0,
    time: 5,
    currentWord: '',
    isUserPlaying: false,
  },
  score: 0,
  time: 5,
  currentWord: '',
  isUserPlaying: false,
}

// wordInput: '',
//     message: '',
//     selectedLevel: 'Beginner',
//     currentSelectedLevel: 'Beginner',
//     currentLevelSeconds: 5,
//     currentWord: showWord(),
//     messageCorrect: 'Correct!',
//     messageWrong: 'Game over! For restart game type the word.',
//     begginer: 'Beginner',
//     advanced: 'Advanced',
//     insame: 'Insame',
//     editableLevelSelection: true,
//     beginnerSeconds: 5,
//     advancedSeconds: 3,
//     insameSeconds: 2

export default initialGameState
