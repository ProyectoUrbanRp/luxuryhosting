"use client"

import {
  Activity,
  Cpu,
  Globe,
  Shield,
  Server,
  Rocket,
} from "lucide-react"

import { motion } from "framer-motion"

const stats = [
  {
    icon: Cpu,
    label: "CPU",
    value: "24%",
    status: "Stable",
  },

  {
    icon: Activity,
    label: "Latency",
    value: "12ms",
    status: "Excellent",
  },

  {
    icon: Globe,
    label: "Deploys",
    value: "1.2k",
    status: "Today",
  },

  {
    icon: Shield,
    label: "Protection",
    value: "99.99%",
    status: "Online",
  },
]

const nodes = [
  {
    name: "Minecraft Survival",
    spec: "Ryzen 9 • 16GB RAM",
    status: "ONLINE",
    color: "bg-green-500",
  },

  {
    name: "FiveM Roleplay",
    spec: "Ryzen 7 • 12GB RAM",
    status: "ONLINE",
    color: "bg-green-500",
  },

  {
    name: "Cloud VPS #14",
    spec: "Ubuntu 24.04 LTS",
    status: "DEPLOYING",
    color: "bg-yellow-500",
  },
]

const logs = [
  "[OK] Node synchronized",
  "[OK] Firewall secured",
  "[OK] Anti-DDoS enabled",
  "[OK] Wings daemon online",
  "[OK] Deployment completed",
]

export default function ControlPanelSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-112.5
          w-112.5
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-6">
        {/* HEADER */}
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
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-green-400
            "
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            All systems operational
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
            Infrastructure
            <span
              className="
                block
                bg-linear-to-r
                from-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              in real-time
            </span>
          </h2>
        </motion.div>

        {/* PANEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            overflow-hidden
            rounded-[2.5rem]
            border
            border-cyan-500/10
            bg-[#081120]/80
            shadow-[0_0_100px_rgba(0,200,255,0.06)]
            backdrop-blur-2xl
          "
        >
          {/* TOP */}
          <div
            className="
              flex
              flex-col
              gap-5
              border-b
              border-white/10
              p-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <h3
                className="
                  text-2xl
                  font-black
                  text-white
                "
              >
                LuxuryHosting Control
              </h3>

              <p className="mt-1 text-zinc-500">
                Live infrastructure monitoring
              </p>
            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-5
                py-3
                text-cyan-300
              "
            >
              <Rocket size={18} />
              Instant Deploy Active
            </div>
          </div>

          <div className="grid gap-6 p-6 lg:grid-cols-3">
            {/* LEFT */}
            <div className="space-y-6 lg:col-span-2">
              {/* STATS */}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map(
                  ({
                    icon: Icon,
                    label,
                    value,
                    status,
                  }) => (
                    <motion.div
                      key={label}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        rounded-4xl
                        border
                        border-white/10
                        bg-white/3
                        p-5
                        transition-all
                        duration-300
                        hover:border-cyan-500/20
                      "
                    >
                      <div
                        className="
                          mb-4
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          bg-cyan-500/10
                        "
                      >
                        <Icon
                          className="text-cyan-400"
                          size={22}
                        />
                      </div>

                      <div className="text-sm text-zinc-500">
                        {label}
                      </div>

                      <div
                        className="
                          mt-1
                          text-3xl
                          font-black
                          text-white
                        "
                      >
                        {value}
                      </div>

                      <div className="mt-2 text-sm text-green-400">
                        ↗ {status}
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* ACTIVE NODES */}
              <div
                className="
                  rounded-4xl
                  border
                  border-white/10
                  bg-white/3
                  p-6
                "
              >
                <div className="mb-5 flex items-center gap-2">
                  <Server className="text-cyan-400" />
                  <h4
                    className="
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    Active Nodes
                  </h4>
                </div>

                <div className="space-y-4">
                  {nodes.map((node) => (
                    <motion.div
                      key={node.name}
                      whileHover={{
                        scale: 1.01,
                      }}
                      className="
                        flex
                        flex-col
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#101827]
                        p-5
                        md:flex-row
                        md:items-center
                        md:justify-between
                      "
                    >
                      <div>
                        <h5 className="font-bold text-white">
                          {node.name}
                        </h5>

                        <p className="text-sm text-zinc-500">
                          {node.spec}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div
                          className={`h-3 w-3 rounded-full ${node.color} animate-pulse`}
                        />

                        <span className="font-semibold text-white">
                          {node.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {/* RESOURCES */}
              <div
                className="
                  rounded-4xl
                  border
                  border-white/10
                  bg-white/3
                  p-6
                "
              >
                <h4
                  className="
                    mb-6
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  Resource Usage
                </h4>

                {[
                  {
                    label: "CPU",
                    value: "84%",
                    width: "84%",
                  },

                  {
                    label: "RAM",
                    value: "61%",
                    width: "61%",
                  },

                  {
                    label: "Bandwidth",
                    value: "93%",
                    width: "93%",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="mb-5"
                  >
                    <div className="mb-2 flex justify-between text-sm text-zinc-400">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width:
                            item.width,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-linear-to-r
                          from-cyan-400
                          to-blue-500
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* LOGS */}
              <div
                className="
                  rounded-4xl
                  border
                  border-white/10
                  bg-[#101827]
                  p-6
                  font-mono
                "
              >
                <div className="mb-4 text-zinc-500">
                  root@luxuryhosting:~#
                </div>

                <div className="space-y-3">
                  {logs.map((log) => (
                    <div
                      key={log}
                      className="
                        flex
                        items-center
                        gap-2
                        text-green-400
                      "
                    >
                      ✓ {log}
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-cyan-400 animate-pulse">
                  █
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}