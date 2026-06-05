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

const terminalSteps = [
  {
    command: "apt update",
    loading:
      "Syncing repositories...",
    success:
      "Repositories updated",
  },

  {
    command:
      "install luxuryhosting-cloud",
    loading:
      "Deploying cloud infrastructure...",
    success:
      "Cloud online",
  },

  {
    command:
      "install minecraft-node",
    loading:
      "Deploying Minecraft server...",
    success:
      "Minecraft ready",
  },

  {
    command:
      "install fivem-node",
    loading:
      "Preparing FiveM environment...",
    success:
      "FiveM deployed",
  },

  {
    command:
      "enable security-layer",
    loading:
      "Applying firewall rules...",
    success:
      "Protection enabled",
  },

  {
    command: "docker ps",
    loading:
      "Checking running containers...",
    success:
      "3 services running",
  },
]

export default function HeroSection() {
  const [step, setStep] =
    useState(0)

  const [phase, setPhase] =
    useState<
      "command" |
      "loading" |
      "success"
    >("command")

  const isDone =
    step >=
    terminalSteps.length

  useEffect(() => {
    if (isDone) return

    let timeout:
      | NodeJS.Timeout
      | undefined

    if (
      phase ===
      "command"
    ) {
      timeout =
        setTimeout(
          () =>
            setPhase(
              "loading"
            ),
          800
        )
    }

    if (
      phase ===
      "loading"
    ) {
      timeout =
        setTimeout(
          () =>
            setPhase(
              "success"
            ),
          1400
        )
    }

    if (
      phase ===
      "success"
    ) {
      timeout =
        setTimeout(
          () => {
            if (
              step <
              terminalSteps.length -
                1
            ) {
              setStep(
                (
                  prev
                ) =>
                  prev + 1
              )

              setPhase(
                "command"
              )
            } else {
              setStep(
                terminalSteps.length
              )
            }
          },
          1100
        )
    }

    return () =>
      clearTimeout(
        timeout
      )
  }, [
    step,
    phase,
    isDone,
  ])

  return (
    <section className="relative overflow-hidden pt-30 pb-20 lg:pt-42 lg:pb-28">
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-[15%]
          h-137.5
          w-137.5
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
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
            className="relative"
          >
            {/* TEXT GLOW */}
            <div
              className="
                absolute
                left-0
                top-10
                h-62.5
                w-62.5
                rounded-full
                bg-cyan-500/10
                blur-[90px]
              "
            />

            {/* BADGE */}
            <div
              className="
                relative
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

            {/* TITLE */}
            <h1
              className="
                relative
                max-w-187.5
                text-[2.8rem]
                font-black
                leading-[0.92]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Cloud & Game Servers

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
                de nueva generación
              </span>
            </h1>

            {/* TEXT */}
            <p
              className="
                mt-7
                max-w-145
                text-base
                leading-8
                text-zinc-400
                sm:text-lg
              "
            >
              Infraestructura gaming &
              cloud impulsada por Ryzen
              y EPYC para rendimiento
              real.
            </p>

            {/* BUTTONS */}
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

            {/* TRUST BAR */}
<div
  className="
    mt-8
    flex
    items-center
    gap-3
    text-sm
    text-zinc-500
  "
>
  <div className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-green-400" />
    All systems operational
  </div>

  <span>•</span>

  <span>99.99% uptime</span>

  <span>•</span>

  <span>Ryzen powered</span>
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
            className="relative"
          >
            {/* TERMINAL GLOW */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-75
                w-75
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
                overflow-hidden
                rounded-4xl
                border
                border-cyan-500/10
                bg-[#0b1120]
                shadow-[0_0_80px_rgba(0,200,255,0.08)]
              "
            >
              {/* TOP */}
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
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="text-sm text-zinc-500">
                  root@luxuryhosting
                </span>
              </div>

              {/* BODY */}
              <div
                className="
                  h-[260px]
                  p-7
                  font-mono
                  text-[15px]
                "
              >
                {!isDone && (
                  <>
                    <div className="text-zinc-500">
                      root@luxuryhosting:~#
                    </div>

                    <div className="mt-2 text-white">
                      {
                        terminalSteps[
                          step
                        ]
                          ?.command
                      }
                    </div>

                    {(phase ===
                      "loading" ||
                      phase ===
                        "success") && (
                      <div className="mt-6 flex items-center gap-3">
                        {phase ===
                        "loading" ? (
                          <>
                            <div
                              className="
                                h-4
                                w-4
                                animate-spin
                                rounded-full
                                border-2
                                border-cyan-400
                                border-t-transparent
                              "
                            />

                            <span className="text-cyan-300">
                              {
                                terminalSteps[
                                  step
                                ]
                                  ?.loading
                              }
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-green-400">
                              ✓
                            </span>

                            <span className="text-green-300">
                              {
                                terminalSteps[
                                  step
                                ]
                                  ?.success
                              }
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}

                {isDone && (
                  <div>
                    <div className="text-zinc-500">
                      root@luxuryhosting:~#
                    </div>

                    <div className="mt-4 space-y-3 text-green-300">
                      <div>
                        ✓ minecraft-node running
                      </div>

                      <div>
                        ✓ fivem-node running
                      </div>

                      <div>
                        ✓ cloud-vps online
                      </div>

                      <div className="pt-5 text-cyan-400">
                        Infrastructure ready █
                      </div>
                    </div>
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