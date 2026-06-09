import { ThemeProvider } from './components/ThemeContext'
import Preloader from './components/Preloader'
import ScrollProgress, { ScrollToTop } from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner, { MarqueeBannerDark } from './components/MarqueeBanner'
import Showreel, { ClientLogos } from './components/Showreel'
import FeaturedWork from './components/FeaturedWork'
import Work from './components/Work'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="film-grain" />

      <ScrollProgress />
      <ScrollToTop />

      <Navbar />

      <main>
        <Hero />
        <MarqueeBanner />
        <Showreel />
        <ClientLogos />
        <FeaturedWork />
        <Work />
        <MarqueeBannerDark />
        <About />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  )
}
