import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../Input/Input';
import Board from '../Board/Board';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_CHARACTERS_PER_GUESS } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleSetGuess = (guess) => {
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <Board guessHistory={guesses} numMaxGuesses={NUM_OF_GUESSES_ALLOWED}></Board>
      <GuessInput sendGuess={handleSetGuess} disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED} wordLength={NUM_OF_CHARACTERS_PER_GUESS}/>
    </>
  );
}

export default Game;
