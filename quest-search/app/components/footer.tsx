import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#FF5733] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Become a Confident
              <br />
              English Speaker
            </h2>
          </div>
          <div className="flex justify-end">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JzW1RJMfbfZWHcFgVzA9Ni1Ln4H4nO.png"
              alt="SpeakX Logo"
              width={180}
              height={60}
              className="h-auto w-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="hover:underline text-lg">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline text-lg">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="/terms" className="hover:underline text-lg">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="hover:underline text-lg">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="/refund" className="hover:underline text-lg">
              Refund Policy
            </Link>
            <Link href="/deletion" className="hover:underline text-lg">
              User Data Deletion Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-lg">Plot No 823P, Sector-47, Gurgaon, Haryana, India, 122018</p>
          <Button className="bg-white text-[#FF5733] hover:bg-white/90 font-bold text-lg px-8">Download Now!</Button>
        </div>

        <div className="mt-12 text-center border-t border-white/20 pt-8">
          <p>COPYRIGHT ©2024 IVYPODS TECHNOLOGY PVT. LTD.</p>
        </div>
      </div>
    </footer>
  )
}

