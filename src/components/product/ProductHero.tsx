"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ProductHeroProps {
  badge: string
  title: string
  highlight: string
  description: string
}

export default function ProductHero({
  badge,
  title,
  highlight,
  description,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-[15%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
          >
            {badge}
          </div>

          {/* title */}
          <h1
            className="
              text-[3rem]
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            {title}

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {highlight}
            </span>
          </h1>

          {/* text */}
          <p
            className="
              mx-auto
              mt-7
              max-w-[720px]
              text-lg
              leading-8
              text-zinc-400
            "
          >
            {description}
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-cyan-500
                px-8
                py-4
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-cyan-400
              "
            >
              Get Started

              <ArrowRight size={18} />
            </button>

            <button
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/[0.06]
              "
            >
              View Plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}