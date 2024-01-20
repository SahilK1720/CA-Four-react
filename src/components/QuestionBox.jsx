import React, { useState, useEffect } from 'react';
import Result from './Result';
import "./QuestionBox.css";
import questions from '../questions'; 

export default function QuestionBox(props) {
  // Theme passed from parent component (App.jsx)
  const theme = props.theme;

  // Styles for light and dark themes
  const questContLight = {
    "backgroundColor": "#D5CEA3",
  };
  const questContDark = {
    "backgroundColor": "#868161"
  };

  // State for managing quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlight, setHighlight] = useState(false);

  // State for dynamic styling based on theme
  const [questContStyle, setContStyle] = useState(questContLight);

  // Updates component style when theme changes
  useEffect(() => {
    setContStyle(theme === "dark" ? questContDark : questContLight);
  }, [theme]);

  // Function to handle option button click
  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  // Function to toggle highlighting of question text
  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  // Function to reset the quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setHighlight(false);
  };

  return (
    <>
      {currentQuestion < questions.length ? (
        // Rendering the quiz container
        <div className="main-cont">
          <div className="quiz-container" style={questContStyle}>
            <div className="page">
              <h4 className='questionNumber'>Question: {currentQuestion + 1} of {questions.length}</h4>
            </div>

            <div className="question">
              <h3 style={{ color: highlight ? '#AD0D0D' : '#272727' }}>{questions[currentQuestion].text}</h3>
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
        // Rendering the Result component when all questions are answered
        <Result score={score} reset={resetQuiz} theme={theme}/>
      )}
    </>
  );
}
