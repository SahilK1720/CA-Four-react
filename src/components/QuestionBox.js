import React from "react";
import "./QuestionBox.css";
import logo from '../assets/Black_and_White_Monogram_Business_Logo-removebg-preview.png'

export default function QuestionBox() {
  return (
    <>
      <div className="main-cont">
        <div className="quiz-container">
          {/* <div>
            <img src={logo}></img>
          </div> */}

          <div className="page">
            <h4>Question: 1 of 15</h4>
          </div>

          <div className="question">
            <h3>Which is the only animal that can jump?</h3>
          </div>

          <div className="options">
            <div className="option-1">
              <button className="opt-btn">Dog</button>
            </div>

            <div className="option-2">
              <button className="opt-btn">Elephant</button>
            </div>

            <div className="option-3">
              <button className="opt-btn">Goat</button>
            </div>

            <div className="option-4">
              <button className="opt-btn">Lion</button>
            </div>
          </div>

          <div className="actions">
            <div className="prev">
              <button className="highlight">Highlight</button>
            </div>

            <div className="next">
              <button className="rem-highlight">Remove Highlight</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
