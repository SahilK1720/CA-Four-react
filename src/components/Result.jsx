import React, { useState, useEffect } from "react";
import "./Result.css"; 

export default function Result({ score, reset }) {

  // const resContLight = {
  //   "backgroundColor": "#D5CEA3",
  // }

  // const resContDark = {
  //   "backgroundColor": "#868161"
  // }

  // const [resContStyle, setResContStyle] = useState[resContLight]

  // useEffect(() => {
  //   setResContStyle(theme == "dark" ?  resContDark : resContLight)
  // },[theme]);

  return (
    <>
      <div className="main-cont">
        <div className="result-container">
          <h1 className="quiz-result">Quiz Results</h1>
          <h2>
            Your Score: {score} out of {5}
          </h2>
          <h3 className="percent">Percentage: {(score / 5) * 100}%</h3>
          <button onClick={reset} className="restart-btn">
            Restart Quiz
          </button>
        </div>
      </div>
    </>
  );
}
