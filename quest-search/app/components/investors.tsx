export default function Investors() {
  return (
    <section className="py-16 bg-[#FFF5F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Our Investors ✨</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          {["IndiaQuotient", "Elevation", "Goodwater", "Titan Capital"].map((investor, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-gray-400 text-sm">{investor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

