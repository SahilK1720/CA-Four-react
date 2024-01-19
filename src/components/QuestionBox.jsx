import React, { useState, useEffect } from 'react';
import Result from './Result';
import "./QuestionBox.css";
import questions from '../questions'; 

export default function QuestionBox(props) {

  const theme = props.theme;

  const questContLight = {
    "backgroundColor": "#D5CEA3",
  }

  const questContDark = {
    "backgroundColor": "#868161"
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [questContStyle, setContStyle] = useState(questContLight);




  useEffect(() => {
    setContStyle(theme == "dark" ?  questContDark : questContLight)
  },[theme]);

  // Handle click on option button
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  // Handle highlight button click
  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setHighlight(false);
  };

  return (
    <>
      {currentQuestion < questions.length ? ( // To display result after last question
        <div className="main-cont">
          <div className="quiz-container" style={questContStyle}>
            <div className="page">
              <h4 className='questionNumber'>Question: {currentQuestion + 1} of {questions.length}</h4>
            </div>

            <div className="question">
              <h3 style={{ color: highlight ? '#A40000' : '#272727' }}>{questions[currentQuestion].text}</h3>
            </div>

            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="option">
                  <button className="opt-btn" onClick={() => handleClick(option.isCorrect)}>
                    {option.text}
                  </button>
                </div>
              ))}
            </div>

            <div className="actions">
              <div className="highlight-div">
                <button className="highlight" onClick={toggleHighlight}>
                  {highlight ? "Remove Highlight" : "Highlight"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Result score={score} reset={resetQuiz}/> // Shows result when all questions are answered
      )}
    </>
  );
}
