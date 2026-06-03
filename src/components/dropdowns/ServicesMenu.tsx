"use client"

import {
  Mail,
  Database,
  Globe,
  Bot,
} from "lucide-react"

const services = [
  {
    title: "Web Hosting",
    desc: "Hosting rápido con cPanel.",
    icon: Globe,
  },
  {
    title: "Email Hosting",
    desc: "Correos empresariales premium.",
    icon: Mail,
  },
  {
    title: "Database Hosting",
    desc: "MySQL y PostgreSQL.",
    icon: Database,
  },
  {
    title: "Discord Hosting",
    desc: "Bots online 24/7.",
    icon: Bot,
  },
]

export default function ServicesMenu() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[calc(100%+12px)]
        z-50
        w-85
        -translate-x-1/2
        rounded-4xl
        border
        border-white/10
        bg-[#07101d]/95
        p-4
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        backdrop-blur-3xl
      "
    >
      <div className="space-y-2">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <button
              key={service.title}
              className="
                group
                flex
                w-full
                items-start
                gap-4
                rounded-2xl
                p-4
                text-left
                transition-all
                duration-300
                hover:bg-cyan-500/5
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/3
                "
              >
                <Icon
                  size={22}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  {service.title}
                </h4>

                <p className="mt-1 text-sm text-zinc-400">
                  {service.desc}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}