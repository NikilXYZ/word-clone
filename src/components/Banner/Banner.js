import React from "react";

function Banner() {
  return <div />;
}

function HappyBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  )
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
}


export { Banner, HappyBanner, SadBanner };
