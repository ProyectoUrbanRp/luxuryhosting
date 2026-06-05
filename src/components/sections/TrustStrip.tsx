"use client"

import {
  Shield,
  Cpu,
  Rocket,
  Globe,
  Activity,
  Headphones,
} from "lucide-react"

import { motion } from "framer-motion"

const trustItems = [
  {
    icon: Activity,
    text: "99.99% Uptime",
  },

  {
    icon: Cpu,
    text: "Ryzen Powered",
  },

  {
    icon: Shield,
    text: "Anti-DDoS",
  },

  {
    icon: Rocket,
    text: "12s Deploy",
  },

  {
    icon: Globe,
    text: "Global Network",
  },

  {
    icon: Headphones,
    text: "24/7 Support",
  },
]

export default function TrustStrip() {
  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            relative
            overflow-hidden
            rounded-4xl
            border
            border-white/10
            bg-white/3
            backdrop-blur-xl
          "
        >
          {/* glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-50
              w-50
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-500/10
              blur-[100px]
            "
          />

          <div
            className="
              relative
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              p-4
              lg:justify-between
              lg:px-8
            "
          >
            {trustItems.map(
              (
                item,
                index
              ) => {
                const Icon =
                  item.icon

                return (
                  <motion.div
                    key={
                      item.text
                    }
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index *
                        0.05,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-transparent
                      px-4
                      py-3
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:border-cyan-500/20
                      hover:bg-cyan-500/5
                    "
                  >
                    <Icon
                      size={18}
                      className="text-cyan-400"
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                      "
                    >
                      {item.text}
                    </span>
                  </motion.div>
                )
              }
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}