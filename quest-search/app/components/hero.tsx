import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#FFE5E0] to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-full overflow-x-auto mb-8">
            <div className="flex whitespace-nowrap justify-start md:justify-center gap-4 min-w-full">
              {Array(5)
                .fill("TRUSTED BY 1CR+ LEARNERS")
                .map((text, i) => (
                  <span key={i} className="text-gray-600 text-sm px-4">
                    🎓 {text} 🎓
                  </span>
                ))}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl mb-2">Become a Fluent Speaker in 10 Days with</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-[#FF5733] mb-8">Personal AI Teacher</h1>
          <Button className="bg-[#FF5733] hover:bg-[#FF5733]/90 text-white px-8 py-6 text-lg rounded-full">
            Download Now!
          </Button>
        </div>
      </div>
    </section>
  )
}

