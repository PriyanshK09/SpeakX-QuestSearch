"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import styles from "../styles/FilterDialog.module.css"

interface FilterDialogProps {
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

export function FilterDialog({ filters, selectedFilters, onFilterChange }: FilterDialogProps) {
  const [open, setOpen] = useState(false)

  const handleFilterSelect = (filterType: "category" | "difficulty", value: string) => {
    onFilterChange(filterType, value)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant="outline" size="icon" onClick={() => setOpen(true)} className={styles.filterButton}>
        <Filter className="h-5 w-5" />
      </Button>
      <DialogContent className={styles.dialogContent}>
        <div className={styles.dialogHeader}>
          <DialogTitle className={styles.dialogTitle}>Filters</DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className={styles.closeButton}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className={styles.filterSection}>
          <div>
            <h3 className={styles.filterSectionTitle}>Category</h3>
            <div className={styles.checkboxGroup}>
              {filters.category.map((category) => (
                <div key={category} className={styles.checkboxItem}>
                  <Checkbox
                    id={`category-mobile-${category}`}
                    checked={selectedFilters.category.includes(category)}
                    onCheckedChange={() => handleFilterSelect("category", category)}
                    className={styles.checkbox}
                  />
                  <Label htmlFor={`category-mobile-${category}`} className={styles.checkboxLabel}>
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={styles.filterSectionTitle}>Difficulty</h3>
            <div className={styles.checkboxGroup}>
              {filters.difficulty.map((level) => (
                <div key={level} className={styles.checkboxItem}>
                  <Checkbox
                    id={`difficulty-mobile-${level}`}
                    checked={selectedFilters.difficulty.includes(level)}
                    onCheckedChange={() => handleFilterSelect("difficulty", level)}
                    className={styles.checkbox}
                  />
                  <Label htmlFor={`difficulty-mobile-${level}`} className={styles.checkboxLabel}>
                    {level}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

