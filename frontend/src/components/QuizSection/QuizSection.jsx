import React, { useState } from "react"
import "./QuizSection.css"

const quizQuestions = [
  {
    id: 1,
    question: "Which tense is used to describe regular actions?",
    options: ["Present Simple", "Present Continuous", "Present Perfect", "Past Simple"],
    correct: 0,
  },
  {
    id: 2,
    question: "Choose the correct form of the verb:",
    subtext: "She _____ to the store every Sunday.",
    options: ["going", "goes", "gone", "went"],
    correct: 1,
  },
]

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((curr) => curr + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleCheck = () => {
    setShowResult(true)
  }

  return (
    <section className="quiz-section">
      <div className="container">
        <div className="quiz-header">
          <h2 className="quiz-title">
            Test Your <span className="highlight">English Skills</span>
          </h2>
          <p className="quiz-subtitle">Practice with our curated questions to improve your English proficiency</p>
        </div>
        <div className="quiz-card">
          <div className="quiz-card-header">
            <h3 className="quiz-card-title">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </h3>
          </div>
          <div className="quiz-card-content">
            <div className="quiz-question">
              <h3 className="question-text">{quizQuestions[currentQuestion].question}</h3>
              {quizQuestions[currentQuestion].subtext && (
                <p className="question-subtext">{quizQuestions[currentQuestion].subtext}</p>
              )}
            </div>
            <div className="quiz-options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="quiz-option">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="quiz-option"
                    value={index}
                    checked={selectedAnswer === index}
                    onChange={() => setSelectedAnswer(index)}
                    className="quiz-radio"
                  />
                  <label htmlFor={`option-${index}`} className="quiz-label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {showResult && (
              <div
                className={`quiz-result ${
                  selectedAnswer === quizQuestions[currentQuestion].correct ? "correct" : "incorrect"
                }`}
              >
                {selectedAnswer === quizQuestions[currentQuestion].correct
                  ? "Correct! Well done!"
                  : "Incorrect. Try again!"}
              </div>
            )}
            <div className="quiz-actions">
              <button className="quiz-button outline" onClick={handleCheck} disabled={selectedAnswer === null}>
                Check Answer
              </button>
              <button
                className="quiz-button primary"
                onClick={handleNext}
                disabled={currentQuestion === quizQuestions.length - 1}
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

