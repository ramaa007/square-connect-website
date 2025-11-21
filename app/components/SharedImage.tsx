'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function SharedImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        layoutId={`img-${src}`}
        onClick={() => setOpen(true)}
        className={`cursor-zoom-in overflow-hidden ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={src} alt={alt} width={800} height={800} className="w-full h-full object-cover rounded-full" />
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`img-${src}`}
              className="fixed inset-8 z-50 flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <Image src={src} alt={alt} width={1200} height={1200} className="max-w-full max-h-full object-contain rounded-3xl" />
              <button className="absolute top-8 right-8 text-white text-6xl hover:scale-125 transition" onClick={() => setOpen(false)}>×</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
