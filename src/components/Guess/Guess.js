import React from "react";

function Guess({ guessedWord }) {
  console.log(guessedWord)
  return (
    <p className="guess">
      {guessedWord.map((characterObject, i) => <span className={`cell ${characterObject.status}`} key={i}>{characterObject.letter}</span>)}
    </p>
  );
}

export default Guess;
