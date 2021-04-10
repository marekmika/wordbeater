const WORDS_GAME = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'sweet',
  'rock',
  'graceful',
  'neighborly',
  'abhorrent',
  'nutritious',
]

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * WORDS_GAME.length)

  return WORDS_GAME[randomIndex]
}

module.exports = { getRandomWord }
