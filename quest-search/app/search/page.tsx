"use client"

import { useState } from "react"
import Layout from "../components/layout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for demonstration
const mockQuestions = [
  { id: 1, type: "MCQ", title: "What is the capital of France?" },
  { id: 2, type: "Anagram", title: "Rearrange: AAGLRNM" },
  { id: 3, type: "MCQ", title: "Which planet is known as the Red Planet?" },
  { id: 4, type: "Anagram", title: "Unscramble: EAOCN" },
  { id: 5, type: "MCQ", title: "Who painted the Mona Lisa?" },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("All")
  const [results, setResults] = useState(mockQuestions)

  const handleSearch = () => {
    // In a real application, you would call your API here
    const filteredResults = mockQuestions.filter(
      (q) => q.title.toLowerCase().includes(searchQuery.toLowerCase()) && (filter === "All" || q.type === filter),
    )
    setResults(filteredResults)
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Search Questions</h1>
        <div className="flex space-x-4 mb-8">
          <Input
            type="text"
            placeholder="Enter your search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Types</SelectItem>
              <SelectItem value="MCQ">MCQ</SelectItem>
              <SelectItem value="Anagram">Anagram</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle>{question.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{question.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

