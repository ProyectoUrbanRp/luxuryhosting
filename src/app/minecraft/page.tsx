import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/sections/Footer"

import ProductHero from "../../components/product/ProductHero"

export default function MinecraftPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />

      <ProductHero
        badge="Minecraft Hosting"
        title="Minecraft servers"
        highlight="built for performance"
        description="Deploy high-performance Minecraft servers powered by Ryzen CPUs, enterprise infrastructure, DDoS protection and instant setup."
      />

      <Footer />
    </main>
  )
}