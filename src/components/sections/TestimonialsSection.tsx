"use client"

import {
  Star,
  Shield,
  Rocket,
  Activity,
} from "lucide-react"

import { motion } from "framer-motion"

const stats = [
  {
    value: "99.99%",
    label: "Uptime",
    icon: Activity,
  },

  {
    value: "1,200+",
    label: "Deployments",
    icon: Rocket,
  },

  {
    value: "24/7",
    label: "Human Support",
    icon: Shield,
  },

  {
    value: "12s",
    label: "Avg Deploy",
    icon: Rocket,
  },
]

const testimonials = [
  {
    quote:
      "Migramos toda nuestra comunidad FiveM y no hemos vuelto a sufrir caídas.",
    author: "Urban Roleplay",
    role: "FiveM Community",
  },

  {
    quote:
      "El deploy es absurdamente rápido y el soporte responde de verdad.",
    author: "SurvivalCraft",
    role: "Minecraft Network",
  },

  {
    quote:
      "Finalmente encontramos estabilidad real para nuestros servicios cloud.",
    author: "Nova Systems",
    role: "Infrastructure Team",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-125
          w-125
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
          >
            Trusted Infrastructure
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-tight
              text-white
              lg:text-6xl
            "
          >
            Trusted by growing
            <span
              className="
                block
                bg-linear-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              communities.
            </span>
          </h2>
        </motion.div>

        {/* stats */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(
            (
              {
                value,
                label,
                icon: Icon,
              },
              index
            ) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 20,
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
                    index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-4xl
                  border
                  border-white/10
                  bg-[#07111f]/70
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-500/20
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                  "
                >
                  <Icon
                    className="text-cyan-400"
                    size={26}
                  />
                </div>

                <div
                  className="
                    text-4xl
                    font-black
                    text-white
                  "
                >
                  {value}
                </div>

                <div className="mt-2 text-zinc-400">
                  {label}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* reviews */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(
            (
              testimonial,
              index
            ) => (
              <motion.div
                key={
                  testimonial.author
                }
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay:
                    index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-white/10
                  bg-[#07111f]/70
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-500/20
                  hover:bg-[#091626]
                "
              >
                {/* glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    rounded-full
                    bg-cyan-500/10
                    blur-[60px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({
                    length: 5,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="
                        fill-cyan-400
                        text-cyan-400
                      "
                    />
                  ))}
                </div>

                {/* quote */}
                <p
                  className="
                    text-lg
                    leading-8
                    text-zinc-300
                  "
                >
                  “
                  {
                    testimonial.quote
                  }
                  ”
                </p>

                {/* author */}
                <div className="mt-8">
                  <h4 className="font-bold text-white">
                    {
                      testimonial.author
                    }
                  </h4>

                  <p className="text-sm text-zinc-500">
                    {
                      testimonial.role
                    }
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}