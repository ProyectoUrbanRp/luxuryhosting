import FloatingOrbs from "../components/animations/FloatingOrbs"
import SectionDivider from "../components/animations/SectionDivider"

import Navbar from "../components/navbar/Navbar"

import HeroSection from "../components/sections/HeroSection"
import ControlPanelSection from "../components/sections/ControlPanelSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import CtaSection from "../components/sections/CtaSection"
import Footer from "../components/sections/Footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <FloatingOrbs />

      <Navbar />

      <HeroSection />

      <SectionDivider />

      <ControlPanelSection />

      <SectionDivider />

      <TestimonialsSection />

      <SectionDivider />

      <CtaSection />

      <Footer />
    </main>
  )
}