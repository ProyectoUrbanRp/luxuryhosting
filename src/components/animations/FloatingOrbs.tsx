"use client"

import { motion } from "framer-motion"

export default function FloatingOrbs() {
  return (
    <>
      {/* Orb 1 */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[20%]
          h-75
          w-75
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[40%]
          h-87.5
          w-87.5
          rounded-full
          bg-purple-500/10
          blur-[140px]
        "
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[40%]
          h-62.5
          w-62.5
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />
    </>
  )
}