import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Projects, Skills, Education } from './components/Sections'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg grid-bg relative">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
