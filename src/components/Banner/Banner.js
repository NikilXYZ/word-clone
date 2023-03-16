import React from "react";

function Banner({ type, children }) {
  return <div className={`banner ${type}`}>{children}</div>;
}

function HappyBanner({ numGuesses }) {
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{numGuesses} guesses</strong>.
      </p>
    </Banner>
  )
}

function SadBanner({ answer }) {
  return (
    <Banner type={"sad"}>
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </Banner>
  )
}


export { Banner, HappyBanner, SadBanner };
