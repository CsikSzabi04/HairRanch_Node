'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function AnimatedPageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
      <motion.div
        key={pathname} // important: key changes on route change, triggers animation
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
         className=" min-h-screen w-full items-center justify-center"
      >
        {children}
      </motion.div>
  )
}
