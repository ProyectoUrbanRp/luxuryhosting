"use client"

import {
  Database,
  Cpu,
  Globe,
  Bot,
  Server,
  Sparkles,
} from "lucide-react"

const services = [
  {
    title: "Database Hosting",
    desc: "Hosting SQL y NoSQL.",
    icon: Database,
    badge: "SQL",
  },
  {
    title: "Dedicated Servers",
    desc: "Máxima potencia dedicada.",
    icon: Cpu,
    badge: "Bare Metal",
  },
  {
    title: "Web Hosting",
    desc: "cPanel ultra rápido.",
    icon: Globe,
    badge: "cPanel",
  },
  {
    title: "AI Infrastructure",
    desc: "Automatización e IA.",
    icon: Sparkles,
  },
  {
    title: "VPS Hosting",
    desc: "Ryzen y EPYC premium.",
    icon: Server,
    badge: "KVM",
  },
  {
    title: "Discord Hosting",
    desc: "Bots 24/7.",
    icon: Bot,
  },
]

export default function InfrastructureMenu() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[calc(100%+12px)]
        z-50
        w-195
        -translate-x-1/2
        rounded-4xl
        border
        border-white/10
        bg-[#07101d]/95
        p-7
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        backdrop-blur-3xl
      "
    >
      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        {services.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.title}
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
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/3
                "
              >
                <Icon
                  className="text-white"
                  size={28}
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  {item.badge && (
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
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}