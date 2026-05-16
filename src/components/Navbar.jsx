import { useState, useEffect } from 'react'
import { Github, Moon, Sun, Menu, X } from 'lucide-react'

const links = [
  { href:'#about',      label:'About',      num:'01' },
  { href:'#experience', label:'Experience', num:'02' },
  { href:'#projects',   label:'Projects',   num:'03' },
  { href:'#skills',     label:'Skills',     num:'04' },
  { href:'#education',  label:'Education',  num:'05' },
  { href:'#contact',    label:'Contact',    num:'06' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      transition-all duration-300 border-b border-[rgba(var(--green-primary-rgb),0.15)]
      bg-nav backdrop-blur-xl
      ${scrolled ? 'px-6 md:px-14 py-3' : 'px-6 md:px-14 py-4'}`}>

      <a href="#" className="flex items-center gap-3 group">
        <div className="w-9 h-9 bg-green-primary flex items-center justify-center
          font-sans text-xs font-bold text-bg tracking-wider
          group-hover:bg-green-bright transition-colors duration-200">SD</div>
        <div>
          <div className="font-sans text-[0.8rem] text-ink tracking-wider leading-tight">Santhosh Devale</div>
          <div className="font-sans text-[0.62rem] text-green-primary tracking-widest leading-tight">Field Solution Manager</div>
        </div>
      </a>

      <ul className="hidden lg:flex items-center gap-7 list-none">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}
              className="font-sans text-[0.68rem] tracking-[0.12em] uppercase text-ink-muted hover:text-green-primary transition-colors duration-200">
              <span className="text-green-primary opacity-60 mr-1"></span>{l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-3 items-center">
        <button onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(var(--green-primary-rgb),0.35)] text-green-primary
            hover:bg-[rgba(var(--green-primary-rgb),0.08)] transition-colors duration-200">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a href="https://github.com/santhosh-devale" target="_blank" rel="noreferrer"
          className="flex items-center gap-2 font-sans text-[0.68rem] tracking-widest uppercase
            text-green-primary border border-[rgba(var(--green-primary-rgb),0.35)] px-4 py-2
            hover:bg-[rgba(var(--green-primary-rgb),0.08)] transition-all duration-200">
          <Github size={13} /> GitHub
        </a>
        <a href="#contact"
          className="flex items-center gap-2 font-sans text-[0.68rem] font-bold tracking-widest uppercase
            text-bg bg-green-primary px-5 py-2 clip-btn hover:bg-green-bright transition-all duration-200"
          style={{ boxShadow:'0 0 20px rgba(var(--green-primary-rgb),0.25)' }}>
          Contact Me
        </a>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <button onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(var(--green-primary-rgb),0.35)] text-green-primary
            hover:bg-[rgba(var(--green-primary-rgb),0.08)] transition-colors duration-200">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button onClick={() => setOpen(!open)} className="text-green-primary p-1">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg-2 border-b border-[rgba(var(--green-primary-rgb),0.15)] px-6 py-4 lg:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block font-sans text-[0.72rem] tracking-widest uppercase text-ink-muted
                hover:text-green-primary py-3 border-b border-[rgba(var(--green-primary-rgb),0.1)] last:border-0 transition-colors">
              <span className="text-green-primary mr-2">{l.num}_</span>{l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

