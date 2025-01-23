import React, { useState, useEffect, useRef } from "react"
import { Search, BookOpen, Clock, BarChart, ChevronLeft, ChevronRight } from "lucide-react"
import FilterSidebar from "../FilterSidebar/FilterSidebar"
import FilterDialog from "../FilterDialog/FilterDialog"
import "./SearchSection.css"

function useScreenSize() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return isMobile
}

const mockQuestions = [
  {
    id: 1,
    type: "MCQ",
    title: "What is the correct usage of Present Perfect tense?",
    category: "Grammar",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    type: "Fill in the blanks",
    title: 'Complete the sentence: "If I _____ rich, I would travel the world."',
    category: "Vocabulary",
    difficulty: "Beginner",
  },
  {
    id: 3,
    type: "True/False",
    title: "Present Continuous tense is used for past actions.",
    category: "Grammar",
    difficulty: "Beginner",
  },
  {
    id: 4,
    type: "MCQ",
    title: "Which word is a synonym for 'happy'?",
    category: "Vocabulary",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    type: "Fill in the blanks",
    title: 'Choose the correct preposition: "She arrived _____ the airport."',
    category: "Grammar",
    difficulty: "Advanced",
  },
]

const filters = {
  category: ["Grammar", "Vocabulary", "Listening", "Speaking"],
  difficulty: ["Beginner", "Intermediate", "Advanced"],
}

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState(mockQuestions)
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    difficulty: [],
  })
  const [currentPage, setCurrentPage] = useState(1)
  const isMobile = useScreenSize()
  const questionsPerPage = isMobile ? 4 : 5
  const topRef = useRef(null)

  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions = results.slice(indexOfFirstQuestion, indexOfLastQuestion)

  const totalPages = Math.ceil(results.length / questionsPerPage)

  const handleSearch = (e) => {
    e.preventDefault()
    filterQuestions()
  }

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev }
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value)
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value]
      }
      return updatedFilters
    })
    filterQuestions()
  }

  const filterQuestions = () => {
    const filtered = mockQuestions.filter((q) => {
      const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedFilters.category.length === 0 || selectedFilters.category.includes(q.category)
      const matchesDifficulty =
        selectedFilters.difficulty.length === 0 || selectedFilters.difficulty.includes(q.difficulty)
      return matchesSearch && matchesCategory && matchesDifficulty
    })
    setResults(filtered)
    setCurrentPage(1)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const renderPaginationNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`pagination-button ${currentPage === number ? "active-page" : ""}`}
          disabled={currentPage === number}
        >
          {number}
        </button>
      ))
    } else {
      const pageNumbers = []
      pageNumbers.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className={`pagination-button ${currentPage === 1 ? "active-page" : ""}`}
          disabled={currentPage === 1}
        >
          1
        </button>,
      )

      if (currentPage > 2) {
        pageNumbers.push(
          <span key="ellipsis-start" className="ellipsis">
            ...
          </span>,
        )
      }

      if (currentPage !== 1 && currentPage !== totalPages) {
        pageNumbers.push(
          <button
            key={currentPage}
            onClick={() => paginate(currentPage)}
            className="pagination-button active-page"
            disabled
          >
            {currentPage}
          </button>,
        )
      }

      if (currentPage < totalPages - 1) {
        pageNumbers.push(
          <span key="ellipsis-end" className="ellipsis">
            ...
          </span>,
        )
      }

      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`pagination-button ${currentPage === totalPages ? "active-page" : ""}`}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </button>,
      )

      return pageNumbers
    }
  }

  return (
    <section className="search-section">
      <div ref={topRef} className="container">
        <div className="header">
          <h1 className="title">
            Find Your <span className="highlight">Perfect Question</span>
          </h1>
          <p className="subtitle">Search through our extensive database of English learning questions</p>
          <div className="search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleSearch(e)
                }}
                className="search-button"
              >
                <Search className="search-icon" />
              </button>
            </div>
            <div className="filter-button-wrapper">
              <FilterDialog filters={filters} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="sidebar-wrapper">
            <FilterSidebar filters={filters} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
          </div>

          <div className="results-wrapper">
            {currentQuestions.length > 0 ? (
              <div className="results-list">
                {currentQuestions.map((question) => (
                  <div key={question.id} className="question-card">
                    <div className="question-card-content">
                      <div className="question-info">
                        <div className="question-type">
                          <BookOpen className="icon" />
                          <p>{question.type}</p>
                        </div>
                        <h3 className="question-title">{question.title}</h3>
                        <div className="question-tags">
                          <span className="category-tag">
                            <BookOpen className="icon" />
                            {question.category}
                          </span>
                          <span className="difficulty-tag">
                            <BarChart className="icon" />
                            {question.difficulty}
                          </span>
                          <span className="time-tag">
                            <Clock className="icon" />2 min
                          </span>
                        </div>
                      </div>
                      <button className="view-details-button">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No questions found. Try adjusting your search or filters.</p>
              </div>
            )}
            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-arrow"
              >
                <ChevronLeft className="icon" />
              </button>
              {renderPaginationNumbers()}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-arrow"
              >
                <ChevronRight className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

