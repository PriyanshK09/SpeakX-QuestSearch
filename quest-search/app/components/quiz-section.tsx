"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

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
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Test Your <span className="text-[#FF5733]">English Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practice with our curated questions to improve your English proficiency
          </p>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{quizQuestions[currentQuestion].question}</h3>
              {quizQuestions[currentQuestion].subtext && (
                <p className="text-gray-600">{quizQuestions[currentQuestion].subtext}</p>
              )}
              <RadioGroup
                value={selectedAnswer?.toString()}
                onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
                className="space-y-3"
              >
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {showResult && (
                <div
                  className={`p-4 rounded-md ${
                    selectedAnswer === quizQuestions[currentQuestion].correct
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedAnswer === quizQuestions[currentQuestion].correct
                    ? "Correct! Well done!"
                    : "Incorrect. Try again!"}
                </div>
              )}
              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" onClick={handleCheck} disabled={selectedAnswer === null}>
                  Check Answer
                </Button>
                <Button
                  className="bg-[#FF5733] hover:bg-[#FF5733]/90"
                  onClick={handleNext}
                  disabled={currentQuestion === quizQuestions.length - 1}
                >
                  Next Question
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

