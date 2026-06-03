"use client"

import {
  ArrowRight,
  CheckCircle2,
  Folder,
  RotateCcw,
  Terminal,
  Database,
  Users,
  HardDrive,
  Cpu,
  Server,
} from "lucide-react"

import { motion } from "framer-motion"

const features = [
  "Backups automáticos",
  "Gestión avanzada de archivos",
  "Consola live integrada",
  "Reinicio instantáneo",
  "Acceso multiusuario",
]

export default function ControlPanelSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* glow */}
      <div
        className="
          absolute
          right-0
          top-1/2
          h-112.5
          w-112.5
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
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
              🎮 LuxuryHosting Panel
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
              Control total
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
                de tu infraestructura
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-155
                text-lg
                leading-8
                text-zinc-400
              "
            >
              Administra servidores gaming
              y cloud infrastructure desde
              un panel intuitivo, rápido y
              diseñado para rendimiento real.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400"
                  />

                  <span
                    className="
                      text-zinc-300
                    "
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              className="
                mt-10
                flex
                items-center
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
                hover:scale-105
                hover:bg-cyan-400
              "
            >
              Explorar panel

              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
          >
            <div
              className="
                overflow-hidden
                rounded-4xl
                border
                border-white/10
                bg-[#07111f]
                shadow-[0_0_80px_rgba(0,200,255,0.08)]
              "
            >
              <div className="grid grid-cols-[90px_1fr]">
                {/* SIDEBAR */}
                <div
                  className="
                    border-r
                    border-white/10
                    bg-[#050d18]
                    p-4
                  "
                >
                  <div className="space-y-3">
                    {[
                      {
                        icon: Server,
                        label: "Servers",
                      },
                      {
                        icon: Folder,
                        label: "Files",
                      },
                      {
                        icon: Database,
                        label: "Backups",
                      },
                      {
                        icon: Terminal,
                        label: "Console",
                      },
                      {
                        icon: RotateCcw,
                        label: "Restart",
                      },
                    ].map((item) => {
                      const Icon = item.icon

                      return (
                        <button
                          key={item.label}
                          className="
                            flex
                            w-full
                            flex-col
                            items-center
                            gap-2
                            rounded-2xl
                            p-3
                            text-zinc-400
                            transition-all
                            duration-300
                            hover:bg-cyan-500/10
                            hover:text-cyan-300
                          "
                        >
                          <Icon size={18} />

                          <span className="text-xs">
                            {item.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  {/* TOP */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        Minecraft Survival
                      </h3>

                      <div
                        className="
                          mt-2
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-green-500/10
                          px-3
                          py-1
                          text-sm
                          text-green-400
                        "
                      >
                        <div
                          className="
                            h-2
                            w-2
                            rounded-full
                            bg-green-400
                          "
                        />

                        ONLINE
                      </div>
                    </div>

                    <button
                      className="
                        rounded-xl
                        bg-cyan-500
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      Manage
                    </button>
                  </div>

                  {/* STATS */}
                  <div className="mt-7 grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: Cpu,
                        label: "CPU",
                        value: "32%",
                      },
                      {
                        icon: HardDrive,
                        label: "RAM",
                        value: "12GB",
                      },
                      {
                        icon: Database,
                        label: "Storage",
                        value: "78%",
                      },
                      {
                        icon: Users,
                        label: "Players",
                        value: "48",
                      },
                    ].map((item) => {
                      const Icon = item.icon

                      return (
                        <div
                          key={item.label}
                          className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/3
                            p-4
                          "
                        >
                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              text-zinc-500
                            "
                          >
                            <Icon size={16} />

                            {item.label}
                          </div>

                          <p
                            className="
                              mt-3
                              text-2xl
                              font-bold
                              text-white
                            "
                          >
                            {item.value}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  {/* TERMINAL */}
                  <div
                    className="
                      mt-6
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#050d18]
                      p-5
                      font-mono
                      text-sm
                    "
                  >
                    <p className="text-green-400">
                      ✓ Server started successfully
                    </p>

                    <p className="mt-2 text-zinc-400">
                      PaperMC loaded
                    </p>

                    <p className="mt-2 text-zinc-400">
                      48 players online
                    </p>

                    <div
                      className="
                        mt-4
                        h-4
                        w-2
                        animate-pulse
                        bg-cyan-400
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}