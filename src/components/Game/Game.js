import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../Input/Input';
import Board from '../Board/Board';
import { HappyBanner, SadBanner } from '../Banner/Banner'
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_CHARACTERS_PER_GUESS } from '../../constants'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [solved, setSolved] = React.useState(false)

  const handleSetGuess = (guess) => {
    const result = checkGuess(guess, answer)
    const nextGuesses = [...guesses, result]

    setGuesses(nextGuesses)

    if (result.every(character => character.status === "correct")) setSolved("correct")
    else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) setSolved("incorrect")
  }

  return (
    <>
      <Board guessHistory={guesses} numMaxGuesses={NUM_OF_GUESSES_ALLOWED} wordLength={NUM_OF_CHARACTERS_PER_GUESS}></Board>
      <GuessInput sendGuess={handleSetGuess} disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED} wordLength={NUM_OF_CHARACTERS_PER_GUESS} />
      {solved && solved === "correct" && <HappyBanner numGuesses={guesses.length}/>}
      {solved && solved === "incorrect" && <SadBanner answer={answer}/>}
    </>
  );
}

export default Game;
