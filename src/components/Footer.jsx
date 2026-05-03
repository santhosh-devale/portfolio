import { Mail, Github } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-14 py-5 border-t border-[rgba(var(--green-primary-rgb),0.15)] bg-bg flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-sans text-[0.68rem] text-ink-faint tracking-wider">
        © 2026 Santhosh Devale — Karnataka, India
      </span>
      <div className="flex gap-3">
        {[
          { href: profile.github, icon: <Github size={14} />, label: 'GitHub' },
          { href: `mailto:${profile.email}`, icon: <Mail size={14} />, label: 'Email' },
          { href: profile.linkedin, label: 'LinkedIn', icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          )},
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
            className="w-9 h-9 border border-[rgba(var(--green-primary-rgb),0.18)] flex items-center justify-center text-ink-muted hover:border-green-primary hover:text-green-primary transition-all duration-200">
            {s.icon}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2 font-sans text-[0.68rem] text-green-primary tracking-widest">
        <span className="w-2 h-2 rounded-full bg-green-primary pulse-dot" style={{ boxShadow: '0 0 7px var(--green-primary)' }} />
        OPEN_TO_WORK
      </div>
    </footer>
  )
}

