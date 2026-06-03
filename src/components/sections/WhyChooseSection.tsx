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
    icon: Rocket,
    title: "Deploy instantáneo",
    description:
      "Tu servidor listo en minutos sin configuraciones complejas.",
  },
  {
    icon: Shield,
    title: "Enterprise Anti-DDoS",
    description:
      "Protección avanzada contra ataques con mitigación automática.",
  },
  {
    icon: Cpu,
    title: "Ryzen & EPYC Hardware",
    description:
      "Infraestructura de alto rendimiento para máxima estabilidad.",
  },
  {
    icon: Globe,
    title: "Baja latencia",
    description:
      "Nodos optimizados para gaming y cloud workloads.",
  },
  {
    icon: Database,
    title: "Backups automáticos",
    description:
      "Protección constante de tu información y configuraciones.",
  },
  {
    icon: Headphones,
    title: "Soporte humano",
    description:
      "Nada de bots absurdos. Personas reales listas para ayudarte.",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
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
          viewport={{ once: true }}
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
            ⚡ Infraestructura premium
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
            ¿Por qué elegir{" "}
            <span
              className="
                bg-linear-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              LuxuryHosting
            </span>
            ?
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
            "
          >
            Infraestructura diseñada para
            velocidad, estabilidad y
            rendimiento real.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(
            (
              {
                icon: Icon,
                title,
                description,
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
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
                  hover:border-cyan-500/30
                  hover:bg-[#091626]
                "
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
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-500/10
                    bg-cyan-500/10
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-cyan-400
                    "
                  />
                </div>

                {/* title */}
                <h3
                  className="
                    relative
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {title}
                </h3>

                {/* text */}
                <p
                  className="
                    relative
                    mt-4
                    text-[16px]
                    leading-7
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