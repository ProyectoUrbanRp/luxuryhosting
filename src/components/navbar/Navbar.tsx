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
        border-cyan-500/20
        bg-[#081120]/95
        backdrop-blur-xl
      "
    >
      <Container>
        <div
          className="
            flex
            h-[78px]
            items-center
            justify-between
          "
        >
          {/* LEFT */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  text-[44px]
                  font-black
                  leading-none
                  tracking-tight
                  text-white
                "
              >
                LH
              </span>

              <div>
                <h1
                  className="
                    text-[30px]
                    font-black
                    leading-none
                    text-white
                  "
                >
                  LuxuryHosting
                </h1>
              </div>
            </div>
          </Link>

          {/* CENTER NAV */}
          <nav
            className="
              hidden
              items-center
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
                  flex
                  h-[78px]
                  items-center
                  gap-2
                  border-r
                  border-white/10
                  px-8
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  hover:text-cyan-300
                "
              >
                Game Servers

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      activeMenu === "games"
                        ? "rotate-180"
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
                  h-[78px]
                  items-center
                  gap-2
                  border-r
                  border-white/10
                  px-8
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  hover:text-cyan-300
                "
              >
                Cloud Servers

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      activeMenu === "cloud"
                        ? "rotate-180"
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
                  >
                    <InfrastructureMenu />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ABOUT */}
            <Link
              href="/"
              className="
                flex
                h-[78px]
                items-center
                border-r
                border-white/10
                px-8
                text-[15px]
                font-semibold
                text-white
                transition-all
                hover:text-cyan-300
              "
            >
              Sobre nosotros
            </Link>

            {/* SUPPORT */}
            <Link
              href="/"
              className="
                flex
                h-[78px]
                items-center
                px-8
                text-[15px]
                font-semibold
                text-white
                transition-all
                hover:text-cyan-300
              "
            >
              Soporte
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* desktop */}
            <div className="hidden items-center gap-4 lg:flex">
              <button
                className="
                  rounded-xl
                  border
                  border-yellow-500/30
                  bg-yellow-500/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-yellow-300
                  transition-all
                  duration-300
                  hover:bg-yellow-500/20
                "
              >
                Login
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-white
                "
              >
                🇨🇴 Español - COP

                <ChevronDown size={14} />
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