export default function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-55
          w-175
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-linear-to-r
          from-cyan-500/5
          via-blue-500/10
          to-purple-500/5
          blur-[120px]
        "
      />

      {/* Line */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[75%]
          -translate-x-1/2
          bg-linear-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  )
}