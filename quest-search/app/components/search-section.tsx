"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, BookOpen, Clock, BarChart, ChevronLeft, ChevronRight } from "lucide-react"
import { FilterSidebar } from "./filter-sidebar"
import { FilterDialog } from "./filter-dialog"
import styles from "../styles/SearchSection.module.css"

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
  const topRef = useRef<HTMLDivElement>(null)

  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions = results.slice(indexOfFirstQuestion, indexOfLastQuestion)

  const totalPages = Math.ceil(results.length / questionsPerPage)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    filterQuestions()
  }

  const handleFilterChange = (filterType: "category" | "difficulty", value: string) => {
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

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const renderPaginationNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          className={`${styles.paginationButton} ${currentPage === number ? styles.activePage : ""}`}
          disabled={currentPage === number}
        >
          {number}
        </Button>
      ))
    } else {
      const pageNumbers = []
      pageNumbers.push(
        <Button
          key={1}
          onClick={() => paginate(1)}
          className={`${styles.paginationButton} ${currentPage === 1 ? styles.activePage : ""}`}
          disabled={currentPage === 1}
        >
          1
        </Button>,
      )

      if (currentPage > 2) {
        pageNumbers.push(
          <span key="ellipsis-start" className={styles.ellipsis}>
            ...
          </span>,
        )
      }

      if (currentPage !== 1 && currentPage !== totalPages) {
        pageNumbers.push(
          <Button
            key={currentPage}
            onClick={() => paginate(currentPage)}
            className={`${styles.paginationButton} ${styles.activePage}`}
            disabled
          >
            {currentPage}
          </Button>,
        )
      }

      if (currentPage < totalPages - 1) {
        pageNumbers.push(
          <span key="ellipsis-end" className={styles.ellipsis}>
            ...
          </span>,
        )
      }

      pageNumbers.push(
        <Button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`${styles.paginationButton} ${currentPage === totalPages ? styles.activePage : ""}`}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </Button>,
      )

      return pageNumbers
    }
  }

  return (
    <section className={styles.searchSection}>
      <div ref={topRef} className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Find Your <span className={styles.highlight}>Perfect Question</span>
          </h1>
          <p className={styles.subtitle}>Search through our extensive database of English learning questions</p>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleSearch(e)
                }}
                className={styles.searchButton}
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
            <div className={styles.filterButtonWrapper}>
              <FilterDialog filters={filters} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebarWrapper}>
            <FilterSidebar filters={filters} selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
          </div>

          <div className={styles.resultsWrapper}>
            {currentQuestions.length > 0 ? (
              <div className={styles.resultsList}>
                {currentQuestions.map((question) => (
                  <Card key={question.id} className={styles.questionCard}>
                    <CardContent className={styles.questionCardContent}>
                      <div className={styles.questionInfo}>
                        <div className={styles.questionType}>
                          <BookOpen className="w-4 h-4" />
                          <p>{question.type}</p>
                        </div>
                        <h3 className={styles.questionTitle}>{question.title}</h3>
                        <div className={styles.questionTags}>
                          <span className={styles.categoryTag}>
                            <BookOpen className="w-3 h-3 mr-1" />
                            {question.category}
                          </span>
                          <span className={styles.difficultyTag}>
                            <BarChart className="w-3 h-3 mr-1" />
                            {question.difficulty}
                          </span>
                          <span className={styles.timeTag}>
                            <Clock className="w-3 h-3 mr-1" />2 min
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className={styles.viewDetailsButton}>
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No questions found. Try adjusting your search or filters.</p>
              </div>
            )}
            <div className={styles.pagination}>
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.paginationArrow}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {renderPaginationNumbers()}
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.paginationArrow}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

