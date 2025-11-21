'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.gif" alt="Square Connect" width={220} height={110} className="h-20 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center space-x-12 text-white text-lg font-medium">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#about" className="hover:text-gold transition">About</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
            <a href="#contact" className="bg-gold text-black px-8 py-4 rounded-full font-bold hover:scale-110 transition shadow-lg">
              Connect Now
            </a>
          </nav>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white text-4xl">☰</button>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed inset-0 bg-black z-40 pt-32 text-center"
      >
        <a href="#services" className="block text-4xl text-white py-8" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="#about" className="block text-4xl text-white py-8" onClick={() => setMobileOpen(false)}>About</a>
        <a href="#contact" className="block text-4xl text-white py-8" onClick={() => setMobileOpen(false)}>Contact</a>
        <a href="#contact" className="inline-block bg-gold text-black px-16 py-8 rounded-full text-2xl font-bold mt-10" onClick={() => setMobileOpen(false)}>
          Connect Now
        </a>
      </motion.div>
    </>
  )
}
