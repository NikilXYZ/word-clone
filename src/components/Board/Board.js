import React from "react";
import { range } from "../../utils"
import Guess from "../Guess/Guess";

function Board({ guessHistory, numMaxGuesses }) {
  let last6Guesses = [...guessHistory, ...range(numMaxGuesses - guessHistory.length).map(item => "")]
  
  console.log(last6Guesses)
  return (
    <div className="guess-results">
      {last6Guesses.map((guess,i) => <Guess key={i} guessedWord={guess}></Guess>)}
    </div>)
}

export default Board;
