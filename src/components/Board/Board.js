import React from "react";
import { range } from "../../utils"
import Guess from "../Guess/Guess";

function Board({ guessHistory, numMaxGuesses, wordLength }) {
  const emptyGuess = (item) => {
    return range(wordLength).map(character => {
      return { letter: "", status: "" }
    })
  }
  let guessesIncludingBlanks = [...guessHistory, ...range(numMaxGuesses - guessHistory.length).map(item => emptyGuess())]

  console.log(guessesIncludingBlanks)
  return (
    <div className="guess-results">
      {guessesIncludingBlanks.map((guess, i) => <Guess key={i} guessedWord={guess}></Guess>)}
    </div>)
}

export default Board;
