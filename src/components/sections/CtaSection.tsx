import { ArrowRight, Sparkles } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="relative py-32">
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-112.5
          w-112.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div
          className="
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/10
            bg-[#08111f]/80
            p-10
            backdrop-blur-2xl
            md:p-16
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-blue-300
            "
          >
            <Sparkles size={15} />

            Infraestructura premium
          </div>

          {/* Content */}
          <div className="mt-8 max-w-4xl">
            <h2
              className="
                text-5xl
                font-black
                tracking-tight
                text-white
                md:text-6xl
              "
            >
              ¿Listo para desplegar
              tu próximo proyecto?
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Desde game servers hasta cloud infrastructure,
              LuxuryHosting está preparado para escalar contigo.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-500
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-blue-400
              "
            >
              Empezar ahora

              <ArrowRight size={18} />
            </button>

            <button
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/4
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/8
              "
            >
              Ver infraestructura
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}