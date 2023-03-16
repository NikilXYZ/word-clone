import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleSetGuess = (guess) => {
    setGuesses([...guesses,guess])
  }

  return (
    <>
      <div className='guess-results'>{guesses.map((guess,i)=><p className='guess' key={i}>{guess}</p>)}</div>
      <GuessInput sendGuess={handleSetGuess} />
    </>
  );
}

export default Game;
