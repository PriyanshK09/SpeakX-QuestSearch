import React from "react"
import "./QuestionCard.css"

function QuestionCard({ type, title, category, difficulty, duration }) {
  return (
    <article className="question-card">
      <div className="question-header">
        <div className="question-type">
          <span className="type-icon">📝</span>
          {type}
        </div>
        <button className="view-details">View Details</button>
      </div>

      <h3 className="question-title">{title}</h3>

      <div className="question-tags">
        <span className={`tag tag-${category.toLowerCase()}`}>
          <span className="tag-icon">📚</span>
          {category}
        </span>
        <span className={`tag tag-${difficulty.toLowerCase()}`}>
          <span className="tag-icon">📊</span>
          {difficulty}
        </span>
        <span className="tag tag-duration">
          <span className="tag-icon">⏱️</span>
          {duration}
        </span>
      </div>
    </article>
  )
}

export default QuestionCard

