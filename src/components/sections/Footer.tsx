"use client"

import Link from "next/link"

import {
  ShieldCheck,
  Cpu,
  Rocket,
  Activity,
} from "lucide-react"

import { motion } from "framer-motion"

const gameServers = [
  "Minecraft Hosting",
  "FiveM Hosting",
  "Rust Hosting",
  "Palworld Hosting",
  "Project Zomboid",
]

const cloudServices = [
  "Cloud VPS",
  "Dedicated Servers",
  "Ryzen Infrastructure",
  "Game VPS",
  "DDoS Protection",
]

const company = [
  "About Us",
  "Support",
  "Status",
  "Contact",
  "Discord",
]

const legal = [
  "Terms of Service",
  "Privacy Policy",
  "Refund Policy",
  "Acceptable Use",
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-100
          w-100
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* STATUS */}
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
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-b
            border-white/10
            py-8
            text-center
            lg:flex-row
            lg:text-left
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                text-sm
                font-medium
                text-green-400
                lg:justify-start
              "
            >
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

              All systems operational
            </div>

            <p className="mt-2 text-zinc-500">
              99.99% uptime • Ryzen powered
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                icon: ShieldCheck,
                text: "Anti-DDoS",
              },

              {
                icon: Cpu,
                text: "Ryzen Nodes",
              },

              {
                icon: Rocket,
                text: "12s Deploy",
              },

              {
                icon: Activity,
                text: "99.99 Uptime",
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.text}
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
                  <Icon
                    size={16}
                    className="text-cyan-400"
                  />

                  <span className="text-sm text-zinc-300">
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* MAIN FOOTER */}
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <span
                className="
                  text-5xl
                  font-black
                  text-white
                "
              >
                LH
              </span>

              <div>
                <h3
                  className="
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  LuxuryHosting
                </h3>

                <p className="text-sm text-zinc-500">
                  Premium Cloud & Game Hosting
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6
                max-w-87.5
                leading-8
                text-zinc-400
              "
            >
              Hosting premium diseñado para
              gaming communities, servidores
              cloud e infraestructura moderna.
            </p>
          </div>

          {/* COLUMNS */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterColumn
              title="Game Servers"
              items={gameServers}
            />

            <FooterColumn
              title="Cloud Services"
              items={cloudServices}
            />

            <FooterColumn
              title="Company"
              items={company}
            />

            <FooterColumn
              title="Legal"
              items={legal}
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            py-8
            text-center
            lg:flex-row
            lg:text-left
          "
        >
          <p className="text-sm text-zinc-500">
            © 2026 LuxuryHosting.
            Built for performance.
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-zinc-500
            "
          >
            Powered by Ryzen Infrastructure
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div>
      <h4
        className="
          mb-5
          text-sm
          font-bold
          uppercase
          tracking-[0.25em]
          text-zinc-400
        "
      >
        {title}
      </h4>

      <div className="space-y-4">
        {items.map((item) => (
          <button
            key={item}
            className="
              block
              text-left
              text-zinc-400
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}