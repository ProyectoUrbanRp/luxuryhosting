"use client"

import Image from "next/image"

const games = [
  {
    name: "Minecraft Java",
    desc: "Crea tu servidor Java.",
    image: "/games/minecraft-java.png",
  },
  {
    name: "Minecraft Bedrock",
    desc: "Servidor Bedrock Edition.",
    image: "/games/minecraft-bedrock.png",
  },
  {
    name: "FiveM Linux",
    desc: "Servidor GTA Roleplay.",
    image: "/games/fivem.png",
    badge: "Premium",
  },
  {
    name: "Project Zomboid",
    desc: "Hosting PvE/PvP.",
    image: "/games/zomboid.png",
  },
  {
    name: "Rust",
    desc: "Servidor ultra rápido.",
    image: "/games/rust.png",
  },
  {
    name: "Palworld",
    desc: "Nueva generación.",
    image: "/games/palworld.png",
    badge: "Nuevo",
  },
  {
    name: "Terraria",
    desc: "Mods & Vanilla.",
    image: "/games/terraria.png",
  },
  {
    name: "Garry's Mod",
    desc: "Hosting premium.",
    image: "/games/gmod.png",
  },
  {
    name: "Valheim",
    desc: "Deploy instantáneo.",
    image: "/games/valheim.png",
  },
  {
    name: "GTA VI",
    desc: "Muy pronto.",
    image: "/games/gtavi.png",
    badge: "Muy pronto",
  },
]

export default function GameServersMenu() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[calc(100%+14px)]
        z-50
        w-205
        -translate-x-1/2
        overflow-hidden
        rounded-4xl
        border
        border-white/10
        bg-[#07101d]/95
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        backdrop-blur-3xl
      "
    >
      {/* Scroll Area */}
      <div className="max-h-105 overflow-y-auto p-7">
        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
          {games.map((game) => (
            <button
              key={game.name}
              className="
                group
                flex
                items-start
                gap-4
                rounded-2xl
                p-3
                text-left
                transition-all
                duration-300
                hover:bg-cyan-500/5
              "
            >
              {/* Logo */}
              <div
                className="
                  relative
                  h-13.5
                  w-13.5
                  overflow-hidden
                  rounded-xl
                  bg-white/5
                  shrink-0
                "
              >
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    {game.name}
                  </h4>

                  {game.badge && (
                    <span
                      className="
                        rounded-md
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-2
                        py-0.5
                        text-[11px]
                        text-cyan-300
                      "
                    >
                      {game.badge}
                    </span>
                  )}
                </div>

                <p
                  className="
                    mt-1
                    text-sm
                    text-zinc-400
                  "
                >
                  {game.desc}
                </p>
              </div>
            </button>
          ))}
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
          px-7
          py-5
        "
      >
        <div>
          <h4 className="font-medium text-white">
            ¿No encuentras tu juego?
          </h4>

          <p className="text-sm text-zinc-500">
            Solicita un servidor personalizado.
          </p>
        </div>

        <button
          className="
            rounded-2xl
            border
            border-cyan-500/30
            bg-cyan-500/10
            px-5
            py-3
            text-sm
            font-semibold
            text-cyan-300
            transition-all
            duration-300
            hover:bg-cyan-500/20
          "
        >
          Contactar
        </button>
      </div>
    </div>
  )
}