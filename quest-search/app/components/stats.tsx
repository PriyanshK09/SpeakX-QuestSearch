import { Facebook, Youtube } from "lucide-react"

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Join Our <span className="text-[#FF5733]">50M+</span>
          </h2>
          <h3 className="text-2xl font-semibold">🎉 LEARNERS CLUB 🎉</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 p-4 rounded-full mb-2">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold">278K</div>
            <div className="text-gray-600">FOLLOWER</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 p-4 rounded-full mb-2">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold">1.2L</div>
            <div className="text-gray-600">USERS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-red-600 p-4 rounded-full mb-2">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold">117K</div>
            <div className="text-gray-600">SUBSCRIBERS</div>
          </div>
        </div>
      </div>
    </section>
  )
}

