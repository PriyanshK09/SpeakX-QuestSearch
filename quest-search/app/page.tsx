import Header from "./components/header"
import SearchSection from "./components/search-section"
import QuizSection from "./components/quiz-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SearchSection />
        <QuizSection />
      </main>
      <Footer />
    </div>
  )
}

