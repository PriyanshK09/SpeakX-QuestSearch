import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      title: "Fascinating, Fun & Engaging",
      content:
        "The English speaking exercises on SpeakX are fascinating and I can see a great change in my confidence. Thank you SpeakX.",
      author: "Vaishnavi Shukla",
      date: "12th January, 2024",
    },
    {
      title: "Interactive, Amazing & Easy",
      content:
        "Great app! It helped me talk better in English at work. Now, I can talk easily with my friends. Really good for people who want to learn to speak in English.",
      author: "Ayush Jain",
      date: "4th January, 2024",
    },
    {
      title: "AI Learning, Easy & Helpful",
      content:
        "Great app! It helped me talk better in English at work. Now, I can talk easily with my friends. Really good for people who want to learn to speak in English.",
      author: "Aviral Gupta",
      date: "23rd January, 2024",
    },
  ]

  return (
    <section className="py-16 bg-[#F5F0FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold mb-2">🎉 TESTIMONIALS 🎉</h2>
          <h3 className="text-4xl font-bold text-[#6E00FF]">Smiles of Approval!</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#6E00FF] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
                <p className="mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="flex gap-1">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm opacity-75">Reviewed on {testimonial.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

