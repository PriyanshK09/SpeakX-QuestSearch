import React from "react"
import { FileQuestion, Book, BarChart2, Clock } from "lucide-react"
import "./QuestionCard.css"

function QuestionCard({ type, title, blocks, options, anagramType }) {
  const renderContent = () => {
    switch (type) {
      case 'ANAGRAM':
        return (
          <div className="anagram-preview">
            <p className="anagram-type">{anagramType}</p>
            <div className="anagram-blocks">
              {blocks?.map((block, index) => (
                <span key={index} className="anagram-block">{block.text}</span>
              ))}
            </div>
          </div>
        );
      
      case 'MCQ':
        return (
          <div className="mcq-preview">
            {options?.slice(0, 2).map((option, index) => (
              <div key={index} className="mcq-option">
                {option.text}
              </div>
            ))}
            {options?.length > 2 && <div className="mcq-more">...</div>}
          </div>
        );

      case 'READ_ALONG':
      case 'CONTENT_ONLY':
      default:
        return null;
    }
  };

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

      {renderContent()}
    </article>
  )
}

export default QuestionCard
