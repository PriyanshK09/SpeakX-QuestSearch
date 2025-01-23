import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import SearchSection from "./components/SearchSection"
import Filters from "./components/Filters"
import QuestionCard from "./components/QuestionCard"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    difficulties: [],
  })

  // Sample questions data (in real app, this would come from an API)
  const questions = [
    {
      type: "MCQ",
      title: "What is the correct usage of Present Perfect tense?",
      category: "Grammar",
      difficulty: "Intermediate",
      duration: "2 min",
    },
    {
      type: "Fill in the blanks",
      title: 'Complete the sentence: "If I _____ rich, I would travel the world."',
      category: "Vocabulary",
      difficulty: "Beginner",
      duration: "2 min",
    },
    {
      type: "True/False",
      title: "Present Continuous tense is used for past actions.",
      category: "Grammar",
      difficulty: "Beginner",
      duration: "2 min",
    },
  ]

  // Update page size based on screen width
  useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth < 768 ? 4 : 6)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Filter and paginate questions
  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedFilters.categories.length === 0 || selectedFilters.categories.includes(question.category)
    const matchesDifficulty =
      selectedFilters.difficulties.length === 0 || selectedFilters.difficulties.includes(question.difficulty)

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const totalPages = Math.ceil(filteredQuestions.length / pageSize)
  const currentQuestions = filteredQuestions.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <SearchSection onFilterToggle={() => setIsFilterOpen(true)} onSearch={setSearchQuery} />
        <div className="content-wrapper">
          <Filters
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onFilterChange={setSelectedFilters}
            className="desktop-filters"
          />
          <div className="questions-container">
            <div className="questions-grid">
              {currentQuestions.map((question, index) => (
                <QuestionCard key={index} {...question} />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

