import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface FilterSidebarProps {
  filters: {
    category: string[]
    difficulty: string[]
  }
  selectedFilters: {
    category: string[]
    difficulty: string[]
  }
  onFilterChange: (filterType: "category" | "difficulty", value: string) => void
}

export function FilterSidebar({ filters, selectedFilters, onFilterChange }: FilterSidebarProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-700">Category</h3>
          <div className="space-y-3">
            {filters.category.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedFilters.category.includes(category)}
                  onCheckedChange={() => onFilterChange("category", category)}
                  className="text-[#FF5733] border-2"
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm text-gray-600 hover:text-[#FF5733] transition-colors"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-700">Difficulty</h3>
          <div className="space-y-3">
            {filters.difficulty.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={`difficulty-${level}`}
                  checked={selectedFilters.difficulty.includes(level)}
                  onCheckedChange={() => onFilterChange("difficulty", level)}
                  className="text-[#FF5733] border-2"
                />
                <Label
                  htmlFor={`difficulty-${level}`}
                  className="text-sm text-gray-600 hover:text-[#FF5733] transition-colors"
                >
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

