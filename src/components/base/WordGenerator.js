const words = [
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
    'nutritious'
];

const showWord = () => {
    const randIndex = Math.floor(Math.random() * words.length); // Check definition etc. of methods floor and random
    // Output random word
    return words[randIndex];
};

export { showWord };
