import React from "react";

function GuessInput({ sendGuess }) {
  const [guess, setGuess] = React.useState("")

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault()
        sendGuess(guess)
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const input = event.target.value.toUpperCase()
          if (/^[A-Z]*$/.test(input)) setGuess(input)
        }}
        minLength={5}
        maxLength={5}
      />
    </form>
  )
}

export default GuessInput;
