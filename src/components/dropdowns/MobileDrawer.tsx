"use client"

import Link from "next/link"
import { X, Menu } from "lucide-react"
import { useState } from "react"

const gameServers = [
  "Minecraft",
  "FiveM",
  "Rust",
  "Palworld",
  "Valheim",
]

const cloudServices = [
  "Cloud VPS",
  "Dedicated Servers",
  "Web Hosting",
  "Databases",
  "AI Infrastructure",
]

export default function MobileDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/3
          p-3
          text-white
          transition-all
          duration-300
          hover:border-cyan-500/20
          hover:bg-cyan-500/10
          lg:hidden
        "
      >
        <Menu size={22} />
      </button>

      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 z-90
          bg-black/60
          backdrop-blur-sm
          transition-all duration-300
          ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed right-0 top-0 z-100
          h-screen w-[88%] max-w-105
          border-l border-white/10
          bg-[#07111f]
          transition-transform duration-300
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            p-6
          "
        >
          <div>
            <h2
              className="
                text-2xl
                font-black
                text-white
              "
            >
              LuxuryHosting
            </h2>

            <p className="text-sm text-zinc-500">
              Cloud Infrastructure
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              rounded-xl
              border
              border-white/10
              p-2
              text-zinc-400
              hover:text-white
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="overflow-y-auto p-6 pb-40">
          {/* GAME SERVERS */}
          <div className="mb-10">
            <h3
              className="
                mb-4
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-cyan-400
              "
            >
              Game Servers
            </h3>

            <div className="space-y-3">
              {gameServers.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="
                    block
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/2
                    px-5
                    py-4
                    text-white
                    transition-all
                    duration-300
                    hover:border-cyan-500/20
                    hover:bg-cyan-500/10
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUD */}
          <div>
            <h3
              className="
                mb-4
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-cyan-400
              "
            >
              Cloud Services
            </h3>

            <div className="space-y-3">
              {cloudServices.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="
                    block
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/2
                    px-5
                    py-4
                    text-white
                    transition-all
                    duration-300
                    hover:border-cyan-500/20
                    hover:bg-cyan-500/10
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            border-t
            border-white/10
            bg-[#07111f]
            p-6
          "
        >
          <div className="grid grid-cols-2 gap-3">
            <button
              className="
                rounded-2xl
                border
                border-white/10
                px-5
                py-4
                font-semibold
                text-white
              "
            >
              Dashboard
            </button>

            <button
              className="
                rounded-2xl
                bg-cyan-500
                px-5
                py-4
                font-bold
                text-white
              "
            >
              Empezar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}