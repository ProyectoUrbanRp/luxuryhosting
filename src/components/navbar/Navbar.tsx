"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  AnimatePresence,
  motion,
} from "framer-motion"

import Container from "../layout/Container"

import GameServersMenu from "../dropdowns/GameServersMenu"
import InfrastructureMenu from "../dropdowns/InfrastructureMenu"
import MobileDrawer from "../dropdowns/MobileDrawer"

export default function Navbar() {
  const [activeMenu, setActiveMenu] =
    useState<string | null>(null)

  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-cyan-500/10
        bg-[#07111f]/70
        backdrop-blur-2xl
        supports-backdrop-filter:bg-[#07111f]/60
      "
    >
      <Container>
        <div
          className="
            flex
            h-20.5
            items-center
            justify-between
          "
        >
          {/* LEFT */}
          <Link
            href="/"
            className="
              group
              relative
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                absolute
                -inset-4
                rounded-full
                bg-cyan-500/0
                blur-2xl
                transition-all
                duration-500
                group-hover:bg-cyan-500/10
              "
            />

            <div className="relative flex items-center gap-3">
              <span
                className="
                  text-[42px]
                  font-black
                  tracking-tight
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-cyan-300
                "
              >
                LH
              </span>

              <div>
                <h1
                  className="
                    text-[28px]
                    font-black
                    leading-none
                    tracking-tight
                    text-white
                  "
                >
                  LuxuryHosting
                </h1>

                <span
                  className="
                    text-xs
                    text-zinc-500
                  "
                >
                  Premium Infrastructure
                </span>
              </div>
            </div>
          </Link>

          {/* CENTER */}
          <nav
            className="
              hidden
              items-center
              rounded-full
              border
              border-white/10
              bg-white/3
              px-3
              py-2
              lg:flex
            "
          >
            {/* GAME SERVERS */}
            <div
              className="relative"
              onMouseEnter={() =>
                setActiveMenu("games")
              }
              onMouseLeave={() =>
                setActiveMenu(null)
              }
            >
              <button
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-3
                  text-[15px]
                  font-semibold
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                "
              >
                Game Servers

                <ChevronDown
                  size={16}
                  className={`
                    transition-all
                    duration-300
                    ${
                      activeMenu ===
                      "games"
                        ? "rotate-180 text-cyan-300"
                        : ""
                    }
                  `}
                />
              </button>

              <AnimatePresence>
                {activeMenu ===
                  "games" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 12,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <GameServersMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CLOUD */}
            <div
              className="relative"
              onMouseEnter={() =>
                setActiveMenu("cloud")
              }
              onMouseLeave={() =>
                setActiveMenu(null)
              }
            >
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-3
                  text-[15px]
                  font-semibold
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                "
              >
                Cloud Servers

                <ChevronDown
                  size={16}
                  className={`
                    transition-all
                    duration-300
                    ${
                      activeMenu ===
                      "cloud"
                        ? "rotate-180 text-cyan-300"
                        : ""
                    }
                  `}
                />
              </button>

              <AnimatePresence>
                {activeMenu ===
                  "cloud" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 12,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <InfrastructureMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* LINKS */}
            <Link
              href="/"
              className="
                rounded-full
                px-5
                py-3
                text-[15px]
                font-semibold
                text-zinc-300
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:text-cyan-300
              "
            >
              Sobre nosotros
            </Link>

            <Link
              href="/"
              className="
                rounded-full
                px-5
                py-3
                text-[15px]
                font-semibold
                text-zinc-300
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:text-cyan-300
              "
            >
              Soporte
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* DESKTOP */}
            <div className="hidden items-center gap-3 lg:flex">
              <button
                className="
                  rounded-2xl
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:border-cyan-400/30
                  hover:bg-cyan-500/20
                "
              >
                Login
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/3
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-zinc-300
                "
              >
                🇨🇴 COP

                <ChevronDown
                  size={14}
                />
              </button>
            </div>

            {/* MOBILE */}
            <div className="lg:hidden">
              <MobileDrawer />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}