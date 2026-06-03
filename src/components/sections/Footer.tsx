"use client"

import Link from "next/link"
import {
  Shield,
  Activity,
  Server,
  Cpu,
} from "lucide-react"

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

const company = [
  "Sobre nosotros",
  "Estado del sistema",
  "Soporte",
  "Contacto",
]

const legal = [
  "Privacidad",
  "Términos",
  "Reembolsos",
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b16]">
      {/* glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-75
          w-75
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-500
                  shadow-[0_0_40px_rgba(0,200,255,0.35)]
                "
              >
                <Server className="text-white" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  LuxuryHosting
                </h3>

                <p className="text-sm text-zinc-500">
                  Cloud Infrastructure
                </p>
              </div>
            </div>

            <p
              className="
                mt-6
                max-w-sm
                text-[15px]
                leading-7
                text-zinc-400
              "
            >
              Infraestructura cloud y game hosting
              de alto rendimiento para proyectos
              que exigen estabilidad real.
            </p>

            {/* badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                {
                  icon: Activity,
                  label: "99.99% Uptime",
                },
                {
                  icon: Shield,
                  label: "Enterprise DDoS",
                },
                {
                  icon: Cpu,
                  label: "24/7 Support",
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-cyan-500/10
                      bg-cyan-500/5
                      px-4
                      py-2
                      text-sm
                      text-cyan-300
                    "
                  >
                    <Icon size={14} />

                    {item.label}
                  </div>
                )
              })}
            </div>
          </div>

          {/* COLUMN */}
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

        {/* bottom */}
        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            pt-8
            text-sm
            text-zinc-500
            lg:flex-row
          "
        >
          <p>
            © 2026 LuxuryHosting.
            Built for performance.
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-2
              text-green-400
            "
          >
            <div
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-green-400
              "
            />

            Systems Operational
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
          font-bold
          text-white
        "
      >
        {title}
      </h4>

      <div className="space-y-3">
        {items.map((item) => (
          <Link
            key={item}
            href="#"
            className="
              block
              text-zinc-400
              transition-colors
              duration-300
              hover:text-cyan-400
            "
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}