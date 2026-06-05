"use client"

import {
  Rocket,
  Shield,
  Cpu,
  Globe,
  Database,
  Headphones,
} from "lucide-react"

import { motion } from "framer-motion"

const features = [
  {
    icon: Cpu,
    title: "Ryzen & EPYC",
    subtitle:
      "Máximo rendimiento",
    description:
      "Gaming & cloud workloads",
    featured: true,
  },

  {
    icon: Shield,
    title: "Anti-DDoS",
    subtitle:
      "Siempre protegido",
    description:
      "Mitigación avanzada",
  },

  {
    icon: Rocket,
    title: "Deploy rápido",
    subtitle:
      "Servidor listo",
    description:
      "En cuestión de segundos",
  },

  {
    icon: Globe,
    title: "Baja latencia",
    subtitle:
      "Ubicaciones premium",
    description:
      "Miami • Germany • Madrid",
  },

  {
    icon: Database,
    title: "Backups",
    subtitle:
      "Todo protegido",
    description:
      "Protección automática",
  },

  {
    icon: Headphones,
    title: "Soporte real",
    subtitle:
      "24/7 disponible",
    description:
      "Personas reales",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-[10%]
          h-125
          w-125
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
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
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              mb-5
              inline-flex
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
            LuxuryHosting
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
            Infraestructura potente.
            <span
              className="
                mt-2
                block
                bg-linear-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Diseñada para rendir.
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(
            (
              {
                icon: Icon,
                title,
                subtitle,
                description,
                featured,
              },
              index
            ) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  y: -8,
                }}
                className={`
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
                  hover:border-cyan-500/30
                  hover:bg-[#091626]
                  hover:shadow-[0_0_50px_rgba(0,200,255,0.08)]

                  ${
                    featured
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >
                {/* glow */}
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
                      h-44
                      w-44
                      rounded-full
                      bg-cyan-500/10
                      blur-[90px]
                    "
                  />
                </div>

                {/* icon */}
                <div
                  className="
                    relative
                    mb-6
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-[1.8rem]
                    border
                    border-cyan-500/10
                    bg-cyan-500/10
                  "
                >
                  <Icon
                    size={36}
                    className="
                      text-cyan-400
                    "
                  />
                </div>

                {/* title */}
                <h3
                  className="
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  {title}
                </h3>

                {/* subtitle */}
                <div
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-cyan-400
                  "
                >
                  {subtitle}
                </div>

                {/* description */}
                <p
                  className="
                    mt-4
                    text-zinc-400
                  "
                >
                  {description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}