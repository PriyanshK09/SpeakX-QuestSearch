"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-logo@3x.png-s0vd1QiirWgNdYSruFlCQuEo7UGUKp.webp"
              alt="SpeakX Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/search" className="text-gray-600 hover:text-[#FF5733] transition-colors font-medium">
              Search
            </Link>
            <Link href="/quiz" className="text-gray-600 hover:text-[#FF5733] transition-colors font-medium">
              Quiz
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#FF5733] transition-colors font-medium">
              About
            </Link>
            <Button className="bg-[#FF5733] hover:bg-[#FF5733]/90">Download Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden py-4 border-t overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                <Link href="/search" className="text-gray-600 hover:text-[#FF5733] transition-colors font-medium">
                  Search
                </Link>
                <Link href="/quiz" className="text-gray-600 hover:text-[#FF5733] transition-colors font-medium">
                  Quiz
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-[#FF5733] transition-colors font-medium">
                  About
                </Link>
                <Button className="bg-[#FF5733] hover:bg-[#FF5733]/90 w-full">Download Now</Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

