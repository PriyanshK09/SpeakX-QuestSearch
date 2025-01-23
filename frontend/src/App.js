import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SearchSection from "./components/SearchSection/SearchSection"
import QuizSection from "./components/QuizSection/QuizSection"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SearchSection />} />
            <Route path="/quiz" element={<QuizSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

