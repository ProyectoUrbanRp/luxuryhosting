"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    ram: "4GB RAM",
    cpu: "Ryzen 9 CPU",
    storage: "40GB NVMe",
    players: "15-30 Players",
    price: "$3.99",
    featured: false,
  },

  {
    name: "Performance",
    ram: "8GB RAM",
    cpu: "Ryzen 9 CPU",
    storage: "80GB NVMe",
    players: "40-70 Players",
    price: "$7.99",
    featured: false,
  },

  {
    name: "Professional",
    ram: "12GB RAM",
    cpu: "Ryzen 9 Priority",
    storage: "120GB NVMe",
    players: "70-120 Players",
    price: "$12.99",
    featured: true,
  },

  {
    name: "Extreme",
    ram: "16GB RAM",
    cpu: "Ryzen 9 Dedicated",
    storage: "200GB NVMe",
    players: "120+ Players",
    price: "$18.99",
    featured: false,
  },
]

export default function PricingCards() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        {/* heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
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
              text-cyan-300
            "
          >
            Minecraft Hosting Plans
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-white
              md:text-6xl
            "
          >
            Pick the perfect
            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Minecraft server
            </span>
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Premium Ryzen-powered
            infrastructure with instant
            deployment and DDoS
            protection.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{
                y: -8,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[2rem]
                border
                p-7
                transition-all
                duration-300
                ${
                  plan.featured
                    ? `
                    border-cyan-500/30
                    bg-cyan-500/[0.08]
                    shadow-[0_0_60px_rgba(0,200,255,0.12)]
                  `
                    : `
                    border-white/10
                    bg-white/[0.03]
                  `
                }
              `}
            >
              {/* featured */}
              {plan.featured && (
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-cyan-300
                  "
                >
                  MOST POPULAR
                </div>
              )}

              {/* name */}
              <h3 className="text-2xl font-black text-white">
                {plan.name}
              </h3>

              <div className="mt-5">
                <span className="text-5xl font-black text-white">
                  {plan.price}
                </span>

                <span className="ml-2 text-zinc-500">
                  /month
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  plan.ram,
                  plan.cpu,
                  plan.storage,
                  plan.players,
                  "DDoS Protection",
                  "Instant Deploy",
                  "Automatic Backups",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-cyan-500/10
                      "
                    >
                      <Check
                        size={13}
                        className="text-cyan-400"
                      />
                    </div>

                    <span className="text-zinc-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`
                  mt-8
                  w-full
                  rounded-2xl
                  py-4
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  ${
                    plan.featured
                      ? `
                      bg-cyan-500
                      text-white
                      hover:bg-cyan-400
                    `
                      : `
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-white
                      hover:bg-white/[0.06]
                    `
                  }
                `}
              >
                Deploy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}