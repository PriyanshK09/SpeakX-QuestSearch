import { Trophy, MessageSquare, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      title: "Practice 15 mins daily",
      icon: Trophy,
      description: "Consistent practice with personalized exercises",
    },
    {
      title: "Instant Feedback with Daily Progress Report",
      icon: MessageSquare,
      description: "Get real-time corrections and track your improvement",
    },
    {
      title: "Get Personalized Curriculum",
      icon: GraduationCap,
      description: "Learn at your own pace with customized lessons",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-[#FF5733] mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

