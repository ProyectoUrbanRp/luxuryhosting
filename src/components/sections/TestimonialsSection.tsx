"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "David Herrera",
    role: "Owner • Roleplay Community",
    avatar: "/games/avatars/avatar1.jpg",
    review:
      "Migramos nuestro servidor FiveM y la diferencia fue inmediata. Mucha más estabilidad, menor ping y soporte real cuando lo necesitamos.",
  },
  {
    name: "Camila Ruiz",
    role: "Minecraft Network Owner",
    avatar: "/games/avatars/avatar2.jpg",
    review:
      "Deploy instantáneo, panel intuitivo y rendimiento brutal. Nunca habíamos tenido un nodo tan estable para nuestra network.",
  },
  {
    name: "Laura Sánchez",
    role: "Cloud Infrastructure",
    avatar: "/games/avatars/avatar3.jpg",
    review:
      "La infraestructura cloud es muy sólida. El uptime y rendimiento han sido excelentes desde el primer día.",
  },
]
export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            ⭐ Clientes satisfechos
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-tight
              text-white
              lg:text-6xl
            "
          >
            Miles de clientes
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              confían en LuxuryHosting
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Communities, empresas y desarrolladores
            impulsan sus proyectos con infraestructura
            premium.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
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
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    -top-20
                    right-0
                    h-40
                    w-40
                    rounded-full
                    bg-cyan-500/10
                    blur-[90px]
                  "
                />
              </div>

              {/* Stars */}
              <div className="relative mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
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

              {/* Review */}
              <p
                className="
                  relative
                  text-[16px]
                  leading-8
                  text-zinc-300
                "
              >
                &ldquo;
                {testimonial.review}
                &rdquo;
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  unoptimized
                  className="
                    h-14
                    w-14
                    min-w-[56px]
                    rounded-full
                    object-cover
                    border
                    border-cyan-500/20
                    bg-zinc-800
                  "
                />

                <div>
                  <h4
                    className="
                      font-bold
                      text-white
                    "
                  >
                    {testimonial.name}
                  </h4>

                  <p
                    className="
                      text-sm
                      text-zinc-500
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
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
            delay: 0.2,
          }}
          className="
            mt-14
            rounded-[2rem]
            border
            border-cyan-500/10
            bg-cyan-500/[0.03]
            px-8
            py-7
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-8
              text-center
            "
          >
            {[
              "99.99% Uptime",
              "+5,000 Clientes",
              "Deploy Instantáneo",
              "Enterprise Anti-DDoS",
            ].map((item) => (
              <div
                key={item}
                className="
                  text-sm
                  font-semibold
                  text-cyan-300
                "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}