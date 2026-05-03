import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Projects, Skills, Education } from './components/Sections'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const initial = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  return (
    <div className="min-h-screen bg-bg grid-bg relative">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
