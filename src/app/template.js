'use client'
import { motion } from 'framer-motion'

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.3, delay: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
