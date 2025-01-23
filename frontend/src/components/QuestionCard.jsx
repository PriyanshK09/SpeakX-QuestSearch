import React from "react"
import { FileQuestion, Book, BarChart2, Clock } from "lucide-react"
import "./QuestionCard.css"

function QuestionCard({ type, title, category, difficulty, duration }) {
  return (
    <article className="question-card">
      <div className="question-header">
        <div className="question-type">
          <FileQuestion size={16} className="type-icon" />
          {type}
        </div>
        <button className="view-details">View Details</button>
      </div>

      <h3 className="question-title">{title}</h3>

      <div className="question-tags">
        <span className={`tag tag-${category.toLowerCase()}`}>
          <Book size={14} className="tag-icon" />
          {category}
        </span>
        <span className={`tag tag-${difficulty.toLowerCase()}`}>
          <BarChart2 size={14} className="tag-icon" />
          {difficulty}
        </span>
        <span className="tag tag-duration">
          <Clock size={14} className="tag-icon" />
          {duration}
        </span>
      </div>
    </article>
  )
}

export default QuestionCard
