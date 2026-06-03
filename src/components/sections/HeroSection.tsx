"use client"

import {
  ArrowRight,
  CheckCircle2,
  Rocket,
} from "lucide-react"

import { motion } from "framer-motion"
import {
  useEffect,
  useState,
} from "react"

const terminalLines = [
  "sudo apt update",
  "[OK] Repositorios sincronizados",

  "",

  "sudo apt install luxuryhosting-cloud",
  "[OK] Cloud Infrastructure instalada",

  "",

  "sudo apt install luxuryhosting-minecraft",
  "[OK] Minecraft nodes desplegados",

  "",

  "sudo apt install luxuryhosting-fivem",
  "[OK] FiveM deploy system listo",

  "",

  "sudo systemctl enable wings",
  "[OK] Pterodactyl Wings Online",

  "",

  "sudo ufw enable",
  "[OK] Firewall protegido",

  "",

  "docker ps",

  "minecraft-node-01     running",
  "fivem-node-02         running",
  "cloud-vps-14          running",
  "database-cluster      running",

  "",

  "Servicios de LuxuryHosting operativos ✔",
]

export default function HeroSection() {
  const [displayedText, setDisplayedText] =
    useState("")

  const [lineIndex, setLineIndex] =
    useState(0)

  const [charIndex, setCharIndex] =
    useState(0)

  const [finished, setFinished] =
    useState(false)

  useEffect(() => {
    if (
      lineIndex >=
      terminalLines.length
    ) {
      return
    }

    const currentLine =
      terminalLines[lineIndex]

    if (
      charIndex <
      currentLine.length
    ) {
      const timeout =
        setTimeout(() => {
          setDisplayedText(
            (prev) =>
              prev +
              currentLine[charIndex]
          )

          setCharIndex(
            (prev) => prev + 1
          )
        }, 32)

      return () =>
        clearTimeout(timeout)
    }

    const pause = setTimeout(() => {
      setDisplayedText(
        (prev) => prev + "\n"
      )

      setLineIndex(
        (prev) => prev + 1
      )

      setCharIndex(0)
    }, 500)

    return () =>
      clearTimeout(pause)
  }, [lineIndex, charIndex])

  useEffect(() => {
    if (
      lineIndex >=
      terminalLines.length
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFinished(true)
    }
  }, [lineIndex])

  return (
    <section className="relative overflow-hidden pt-30 pb-20 lg:pt-42.5 lg:pb-28">
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-[20%]
          h-125
          w-125
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
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
          >
            {/* badge */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-xs
                font-medium
                text-cyan-300
                sm:text-sm
              "
            >
              <Rocket size={16} />
              Deploy instantáneo
            </div>

            {/* title */}
            <h1
              className="
                max-w-175
                text-[2.7rem]
                font-black
                leading-[0.95]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Cloud & Game Servers

              <span
                className="
                  mt-1
                  block
                  bg-linear-to-r
                  from-cyan-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                de nueva generación
              </span>
            </h1>

            {/* text */}
            <p
              className="
                mt-6
                max-w-155
                text-base
                leading-8
                text-zinc-400
                sm:text-lg
              "
            >
              Servidores gaming y cloud
              premium impulsados por
              hardware Ryzen & EPYC para
              máxima velocidad,
              estabilidad y despliegue
              instantáneo.
            </p>

            {/* buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-cyan-500
                  px-7
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
                Empezar ahora

                <ArrowRight size={18} />
              </button>

              <button
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/3
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/6
                "
              >
                Ver infraestructura
              </button>
            </div>

            {/* trust */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "99.99% uptime",
                "Anti-DDoS",
                "Deploy instantáneo",
                "Ryzen Nodes",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/3
                    px-4
                    py-3
                  "
                >
                  <CheckCircle2
                    size={16}
                    className="text-cyan-400"
                  />

                  <span
                    className="
                      text-xs
                      font-medium
                      text-zinc-300
                      sm:text-sm
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TERMINAL */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div
              className="
                overflow-hidden
                rounded-4xl
                border
                border-cyan-500/10
                bg-[#101225]
                shadow-[0_0_80px_rgba(0,200,255,0.08)]
              "
            >
              {/* top */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-5
                  py-4
                "
              >
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                </div>

                <span className="font-semibold text-zinc-300">
                  Terminal
                </span>
              </div>

              {/* body */}
              <div
                className="
                  h-105
                  overflow-hidden
                  p-6
                  font-mono
                  text-[14px]
                  leading-8
                  text-[#d8f3b0]
                "
              >
                <pre className="whitespace-pre-wrap">
                  {displayedText}

                  {!finished && (
                    <span
                      className="
                        animate-pulse
                        text-cyan-400
                      "
                    >
                      █
                    </span>
                  )}
                </pre>

                {finished && (
                  <div className="mt-5 flex items-center gap-2 text-[#d8f3b0]">
                    <span>
                      root@luxuryhosting:~#
                    </span>

                    <span className="animate-pulse text-cyan-400">
                      █
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}