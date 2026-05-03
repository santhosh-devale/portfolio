import { useState, useEffect, useRef } from 'react'
import { MapPin, GraduationCap, Building2 } from 'lucide-react'
import { profile, stats, typedPhrases } from '../data/portfolio'
import avatarImg from '../assets/profile.jpeg'

function StatCard({ num, suffix, label }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let cur = 0
        const step = num / 50
        const t = setInterval(() => {
          cur = Math.min(cur + step, num)
          setCount(Math.ceil(cur))
          if (cur >= num) clearInterval(t)
        }, 30)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [num])

  return (
    <div ref={ref}
      className="flex-1 basis-full min-w-0 sm:basis-1/2 px-6 py-5 border-b border-[rgba(var(--green-primary-rgb),0.12)] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0
        relative overflow-hidden group transition-all duration-300 hover:bg-[rgba(var(--green-primary-rgb),0.04)] cursor-default">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-primary to-transparent
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="font-sans text-3xl font-bold text-ink leading-none mb-1">
        <span className="text-green-primary">{count}</span>{suffix}
      </div>
      <div className="font-sans text-[0.62rem] uppercase tracking-widest text-ink-muted">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [pi, setPi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const phrase = typedPhrases[pi]
    const timeout = setTimeout(() => {
      if (!del) {
        const n = ci + 1
        setTyped(phrase.slice(0, n))
        setCi(n)
        if (n === phrase.length) setTimeout(() => setDel(true), 1800)
      } else {
        const n = ci - 1
        setTyped(phrase.slice(0, n))
        setCi(n)
        if (n === 0) { setDel(false); setPi(p => (p + 1) % typedPhrases.length) }
      }
    }, del ? 38 : 72)
    return () => clearTimeout(timeout)
  }, [typed, pi, ci, del])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 md:px-14 relative z-10">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-7xl mx-auto w-full">

        {/* TEXT */}
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-sans text-[0.68rem] tracking-[0.14em] uppercase
            text-green-primary border border-[rgba(var(--green-primary-rgb),0.35)] bg-[rgba(var(--green-primary-rgb),0.06)] px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-primary pulse-dot" />
            Available for opportunities
          </div>

          <div className="font-sans text-sm text-ink-muted tracking-widest mb-3">Hello, I'm</div>

          <h1 className="font-bold leading-[0.93] tracking-tighter mb-5" style={{ fontSize: 'clamp(3.8rem,8vw,7rem)' }}>
            <span className="text-ink block">Santhosh</span>
            <span className="glitch text-green-primary block" data-text="Devale"
              style={{ textShadow: '0 0 40px rgba(var(--green-primary-rgb),0.35)' }}>Devale</span>
          </h1>

          <div className="font-sans text-sm text-green-primary mb-6 min-h-[1.6em] tracking-wider">
            {typed}<span className="typed-cursor" />
          </div>

          <p className="text-ink-muted leading-relaxed mb-10 max-w-xl" style={{ fontSize: '0.95rem' }}>
            Healthcare technology professional with{' '}
            <strong className="text-ink font-semibold">4+ years</strong> experience bridging clinical operations
            and digital systems. Currently leading as{' '}
            <strong className="text-ink font-semibold">Support Field Manager</strong> at 10BedICU, overseeing{' '}
            <strong className="text-green-primary font-semibold">CARE 3.0 HMIS</strong> across{' '}
            <strong className="text-ink font-semibold">43+ government hospitals</strong> in Karnataka.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact"
              className="inline-flex items-center gap-2 font-sans text-[0.78rem] font-bold tracking-widest uppercase
                text-bg bg-green-primary px-7 py-3 clip-btn hover:bg-green-bright transition-all duration-200"
              style={{ boxShadow: '0 0 28px rgba(var(--green-primary-rgb),0.3)' }}>
              Get In Touch
            </a>
            <a href="https://github.com/santhosh-devale" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[0.78rem] tracking-widest uppercase
                text-green-primary border border-[rgba(var(--green-primary-rgb),0.35)] px-6 py-3
                hover:bg-[rgba(var(--green-primary-rgb),0.08)] transition-all duration-200">
              ⌥ GitHub
            </a>
            <a href="#"
              className="inline-flex items-center gap-2 font-sans text-[0.78rem] tracking-widest uppercase
                text-green-primary border border-[rgba(var(--green-primary-rgb),0.35)] px-6 py-3
                hover:bg-[rgba(var(--green-primary-rgb),0.08)] transition-all duration-200">
              ↓ Resume
            </a>
          </div>
        </div>

        {/* AVATAR + CARD */}
        <div className="flex flex-col items-center gap-5 lg:items-end">

          {/* AVATAR — static, baked into build, no one else can change it */}
          <div className="corner-box border border-[rgba(var(--green-primary-rgb),0.35)] bg-bg-card p-1 relative w-full max-w-[18rem]"
            style={{ boxShadow: '0 0 50px rgba(var(--green-primary-rgb),0.1)' }}>
            <div className="relative w-full h-[18rem]">
              <img
                src={avatarImg}
                alt="Santhosh Devale"
                className="w-full h-full object-cover object-top"
              />
              {/* corner marks */}
              {[
                'top-2 left-2 border-l-2 border-t-2',
                'top-2 right-2 border-r-2 border-t-2',
                'bottom-2 left-2 border-l-2 border-b-2',
                'bottom-2 right-2 border-r-2 border-b-2',
              ].map((c, i) => (
                <div key={i} className={`absolute w-4 h-4 border-green-primary ${c}`} />
              ))}
              {/* spinning ring */}
              <div className="absolute inset-[-10px] border border-dashed border-[rgba(var(--green-primary-rgb),0.2)] spin-slow pointer-events-none" />
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="corner-box border border-[rgba(var(--green-primary-rgb),0.18)] bg-bg-card w-full max-w-[18rem]">
            <div className="px-5 py-4 border-b border-[rgba(var(--green-primary-rgb),0.12)]">
              <div className="font-bold text-ink text-[0.95rem]">{profile.name}</div>
              <div className="font-sans text-[0.65rem] text-green-primary tracking-wider mt-0.5">{profile.role}</div>
            </div>
            <div className="divide-y divide-[rgba(var(--green-primary-rgb),0.1)]">
              {[
                { icon: <Building2 size={13} />, val: profile.company },
                { icon: <MapPin size={13} />,    val: profile.location },
                { icon: <GraduationCap size={13} />, val: profile.education },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-[rgba(var(--green-primary-rgb),0.04)] transition-colors duration-200">
                  <span className="text-green-primary opacity-70">{r.icon}</span>
                  <span className="text-[0.78rem] text-ink-muted">{r.val}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 flex items-center gap-2 font-sans text-[0.65rem] text-green-primary tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-primary pulse-dot" />Open to work
            </div>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="border border-[rgba(var(--green-primary-rgb),0.15)] flex flex-wrap mt-14 max-w-7xl mx-auto w-full">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>
    </section>
  )
}

