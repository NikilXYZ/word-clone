import React from "react";

function GuessInput({ sendGuess, disabled, wordLength }) {
  const [guess, setGuess] = React.useState("")

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault()

        let regexCharacterLimit = new RegExp("^[A-Z]{wordLength}$".replace("wordLength", wordLength))
        if (regexCharacterLimit.test(guess)) {
          sendGuess(guess)
          setGuess("")
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
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
        disabled={disabled}
      />
    </form>
  )
}

export default GuessInput;
