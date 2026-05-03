import { useRef, useEffect } from 'react'
import { Mail, Phone, Github } from 'lucide-react'
import { profile } from '../data/portfolio'

const G_BORDER  = 'border-[rgba(0,255,136,0.18)]'
const G_BORDER2 = 'border-[rgba(0,255,136,0.35)]'
const G_BG      = 'bg-[rgba(0,255,136,0.06)]'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), delay); obs.disconnect() }
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function Contact() {
  const links = [
    { icon: <Mail size={15} />,   label: 'Email',    val: profile.email,                href: `mailto:${profile.email}` },
    { icon: <Phone size={15} />,  label: 'Phone',    val: profile.phone,                href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: <Github size={15} />, label: 'GitHub',   val: 'github.com/santhosh-devale', href: profile.github },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      label: 'LinkedIn', val: 'Connect on LinkedIn', href: profile.linkedin,
    },
  ]

  return (
    <section id="contact" className={`relative z-10 py-24 px-6 md:px-14 border-b ${G_BORDER}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 font-sans text-xs tracking-[0.18em] uppercase text-green-primary mb-3">
          <span className="w-7 h-px bg-green-primary block" />06_ Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-14">
          Let's Build Something <span className="text-gradient">Meaningful</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed mb-8">
              Looking for a healthcare tech engineer, React developer, or a technical trainer?
              I'd love to connect and explore how I can contribute.
              Based in Karnataka — open to remote &amp; on-site roles.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-sans text-[0.75rem] font-bold tracking-widest uppercase text-bg bg-green-primary px-7 py-3 clip-btn hover:bg-green-bright transition-all duration-200"
                style={{ boxShadow: '0 0 22px rgba(0,255,136,0.25)' }}>
                Send a Message
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer"
                className={`inline-flex items-center gap-2 font-sans text-[0.75rem] tracking-widest uppercase text-green-primary border ${G_BORDER2} px-6 py-3 hover:${G_BG} transition-all duration-200`}>
                GitHub ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex flex-col gap-3">
            {links.map((c, i) => (
              <a key={i} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`flex items-center gap-4 px-5 py-4 border ${G_BORDER} bg-bg-card hover:${G_BORDER2} hover:${G_BG} transition-all duration-200 group relative left-bar`}>
                <div className={`w-9 h-9 border ${G_BORDER2} ${G_BG} flex items-center justify-center text-green-primary flex-shrink-0 group-hover:border-green-primary transition-colors`}>
                  {c.icon}
                </div>
                <div>
                  <div className="font-sans text-[0.6rem] tracking-widest uppercase text-ink-faint mb-0.5">{c.label}</div>
                  <div className="text-[0.82rem] text-ink group-hover:text-green-primary transition-colors">{c.val}</div>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
