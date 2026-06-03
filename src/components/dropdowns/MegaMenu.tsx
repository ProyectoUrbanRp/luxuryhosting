"use client"

import {
  Database,
  Server,
  Globe,
  Bot,
  Cpu,
  Shield,
  ChevronRight,
  Sparkles,
  Gamepad2,
} from "lucide-react"

const gameServers = [
  {
    title: "Minecraft Java",
    desc: "Servidor Paper, Forge y Fabric.",
    badge: "Popular",
  },
  {
    title: "FiveM",
    desc: "Servidor premium GTA Roleplay.",
    badge: "Premium",
  },
  {
    title: "Project Zomboid",
    desc: "Hosting optimizado PvE/PvP.",
  },
  {
    title: "Rust",
    desc: "Deploy instantáneo con mods.",
  },
  {
    title: "GTA VI",
    desc: "Infraestructura preparada.",
    badge: "Muy pronto",
  },
  {
    title: "Garry's Mod",
    desc: "Servidores rápidos y estables.",
  },
]

const cloudServices = [
  {
    title: "Cloud VPS",
    desc: "Ryzen & EPYC ultra rápidos.",
    icon: Server,
  },
  {
    title: "Dedicated Servers",
    desc: "Bare Metal enterprise.",
    icon: Cpu,
  },
  {
    title: "AI Infrastructure",
    desc: "Infraestructura IA premium.",
    icon: Sparkles,
  },
  {
    title: "Web Hosting",
    desc: "Hosting rápido con cPanel.",
    icon: Globe,
  },
  {
    title: "Discord Bot Hosting",
    desc: "Bots online 24/7.",
    icon: Bot,
  },
  {
    title: "Database Hosting",
    desc: "MySQL y PostgreSQL.",
    icon: Database,
  },
]

export default function MegaMenu() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[calc(100%+18px)]
        z-50
        w-237.5
        -translate-x-1/2
        overflow-hidden
        rounded-4xl
        border
        border-white/10
        bg-[#050c17]/95
        shadow-[0_20px_80px_rgba(0,0,0,0.5)]
        backdrop-blur-3xl
      "
    >
      <div className="grid lg:grid-cols-2">
        {/* LEFT */}
        <div className="border-r border-white/10 p-8">
          <div className="mb-6 flex items-center gap-2">
            <Gamepad2
              className="text-cyan-400"
              size={20}
            />

            <h3 className="font-bold text-white">
              Game Servers
            </h3>
          </div>

          <div className="space-y-2">
            {gameServers.map((item) => (
              <button
                key={item.title}
                className="
                  group
                  flex
                  w-full
                  items-start
                  justify-between
                  rounded-2xl
                  border
                  border-transparent
                  p-4
                  text-left
                  transition-all
                  duration-300
                  hover:border-cyan-500/20
                  hover:bg-cyan-500/5
                "
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h4
                      className="
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h4>

                    {item.badge && (
                      <span
                        className="
                          rounded-full
                          bg-cyan-500/10
                          px-2.5
                          py-1
                          text-[11px]
                          font-medium
                          text-cyan-300
                        "
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-zinc-500
                    "
                  >
                    {item.desc}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="
                    mt-1
                    text-zinc-600
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8">
          <div className="mb-6 flex items-center gap-2">
            <Shield
              className="text-cyan-400"
              size={20}
            />

            <h3 className="font-bold text-white">
              Cloud Infrastructure
            </h3>
          </div>

          <div className="space-y-2">
            {cloudServices.map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.title}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-transparent
                    p-4
                    text-left
                    transition-all
                    duration-300
                    hover:border-cyan-500/20
                    hover:bg-cyan-500/5
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-500/10
                      text-cyan-400
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm text-zinc-500">
                      {item.desc}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="
                      text-zinc-600
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-white/10
          bg-white/2
          px-8
          py-5
        "
      >
        <div>
          <h4 className="font-medium text-white">
            ¿No encuentras tu servicio?
          </h4>

          <p className="text-sm text-zinc-500">
            Solicita un servidor personalizado.
          </p>
        </div>

        <button
          className="
            rounded-2xl
            bg-cyan-500
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-400
          "
        >
          Contactar
        </button>
      </div>
    </div>
  )
}