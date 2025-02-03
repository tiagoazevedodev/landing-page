import Header from "./components/Header"
import About from "./components/About"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

