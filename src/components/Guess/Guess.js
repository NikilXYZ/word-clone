import React from "react";
import { range } from "../../utils"

function Guess({ guessedWord = "" }) {
  let letters = []
  if (guessedWord === "") letters = range(5).map(item=>"")
  else letters = guessedWord.split("")
  console.log(guessedWord)
  return (
    <p className="guess">
      {letters.map((character, i) => <span className="cell" key={i}>{character}</span>)}
    </p>
  );
}

export default Guess;
