import { useRef, useEffect } from 'react'
import { Star, GitFork, Code2, PenTool, Terminal, Monitor, Award } from 'lucide-react'
import { profile, experience, projects, skills, domainExpertise, education } from '../data/portfolio'

const GB  = 'border-[rgba(0,255,136,0.18)]'
const GB2 = 'border-[rgba(0,255,136,0.35)]'
const GBG = 'bg-[rgba(0,255,136,0.06)]'

export function Tag({ children }) {
  return (
    <span className={`font-sans text-[0.62rem] tracking-wider px-2.5 py-1 border ${GB2} text-green-primary ${GBG} hover:bg-[rgba(0,255,136,0.12)] transition-all duration-200`}>
      {children}
    </span>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), delay)
        obs.disconnect()
      }
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

function SectionLabel({ num, label }) {
  return (
    <div className="flex items-center gap-3 font-sans text-xs tracking-[0.18em] uppercase text-green-primary mb-3">
      <span className="w-7 h-px bg-green-primary block" />{num}_ {label}
    </div>
  )
}

/* ── ABOUT ── */
export function About() {
  return (
    <section id="about" className={`relative z-10 py-24 px-6 md:px-14 bg-bg-2 border-y ${GB}`}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="01" label="About" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-14">
          Where Technology Meets <span className="text-gradient">Healthcare</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-5 text-ink-muted leading-relaxed" style={{ fontSize: '0.95rem' }}>
              {profile.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {profile.chips.map(c => <Tag key={c}>{c}</Tag>)}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col gap-[3px]">
              {[
                ['Location',  profile.location],
                ['Role',      `${profile.role} · 10BedICU, eGov Foundation`],
                ['Client',    profile.client],
                ['Education', 'MCA · BITM Ballari (2010–2013)'],
                ['Email',     profile.email],
                ['Phone',     profile.phone],
                ['Languages', profile.languages],
                ['Status',    '● Open to work'],
              ].map(([k, v]) => (
                <div key={k} className={`flex border ${GB} group hover:${GB2} hover:bg-[rgba(0,255,136,0.04)] transition-all duration-200 relative overflow-hidden left-bar`}>
                  <span className={`font-sans text-[0.65rem] tracking-widest uppercase text-green-primary px-3 py-3 min-w-[110px] border-r ${GB} ${GBG}`}>{k}</span>
                  <span className={`text-[0.8rem] px-4 py-3 ${k === 'Status' ? 'text-green-primary' : 'text-ink-muted'}`}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── EXPERIENCE ── */
export function Experience() {
  return (
    <section id="experience" className={`relative z-10 py-24 px-6 md:px-14 border-b ${GB}`}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="02" label="Experience" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-14">
          Career <span className="text-gradient">Timeline</span>
        </h2>
        <div className="relative max-w-3xl" style={{ borderLeft: '1px solid rgba(0,255,136,0.18)' }}>
          {experience.map((e, i) => (
            <Reveal key={i} delay={i * 100} className="pl-10 pb-12 last:pb-0 relative">
              <div
                className={`absolute left-[-6px] top-1.5 w-3 h-3 rotate-45 border z-10 transition-colors ${e.current ? 'bg-green-primary border-green-primary' : `bg-bg ${GB2}`}`}
                style={e.current ? { boxShadow: '0 0 14px rgba(0,255,136,0.6)' } : {}}
              />
              <div className="flex flex-wrap items-center gap-2 font-sans text-[0.68rem] text-ink-muted tracking-wider mb-2">
                <span>{e.period}</span>
                {e.badges.map(b => (
                  <span key={b} className={`text-[0.6rem] font-bold tracking-widest uppercase px-2 py-0.5 border ${GB2} text-green-primary ${GBG}`}>
                    {b === 'Promoted' ? '↑ ' : ''}{b}
                  </span>
                ))}
                <span className={`text-[0.6rem] text-ink-faint border ${GB} px-2 py-0.5`}>{e.client}</span>
              </div>
              <div className="text-lg font-bold text-ink tracking-tight mb-1">{e.role}</div>
              <div className="font-sans text-[0.72rem] text-green-primary tracking-wider mb-4">// {e.org}</div>
              <ul className="space-y-2 mb-4">
                {e.bullets.map((b, j) => (
                  <li key={j} className="text-[0.83rem] text-ink-muted leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-[3px] text-green-primary text-[0.65rem]">▸</span>{b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">{e.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROJECTS ── */
export function Projects() {
  return (
    <section id="projects" className={`relative z-10 py-24 px-6 md:px-14 bg-bg-2 border-b ${GB}`}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="03" label="Projects" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-3">
          Important GitHub Projects <span className="text-gradient">I Built</span>
        </h2>
        <p className="text-ink-muted text-[0.88rem] mb-14 max-w-xl">
          My most meaningful repositories — apps, dashboards, and tools built for healthcare field support, patient workflows, and operations automation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[rgba(0,255,136,0.1)]">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 70}
              className="bg-bg p-7 flex flex-col relative overflow-hidden group hover:bg-bg-card transition-all duration-300 cursor-default top-glow">
              <div className="flex items-center gap-2 font-sans text-[0.62rem] tracking-[0.14em] uppercase text-ink-muted mb-4">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: p.langColor }} />
                {p.lang}
              </div>
              <div className="text-[0.95rem] font-bold text-ink tracking-tight mb-2 leading-snug">{p.name}</div>
              <p className="text-[0.78rem] text-ink-muted leading-relaxed flex-1 mb-4">{p.desc}</p>
              <div className="flex items-center gap-3 font-sans text-[0.62rem] text-ink-faint flex-wrap">
                {p.stars !== null && (
                  <span className="flex items-center gap-1 text-green-primary"><Star size={10} /> {p.stars}</span>
                )}
                {p.fork && (
                  <span className={`flex items-center gap-1 border ${GB} px-2 py-0.5`}><GitFork size={10} /> {p.fork}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SKILL BAR ── */
function SkillBar({ name, pct }) {
  const ref = useRef(null)
  const fillRef = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && fillRef.current) {
        fillRef.current.style.transition = 'transform 1.2s cubic-bezier(0.4,0,0.2,1)'
        fillRef.current.style.transform = `scaleX(${pct / 100})`
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="flex items-center gap-3 mb-3">
      <span className="font-sans text-[0.72rem] text-ink-muted min-w-[135px]">{name}</span>
      <div className="flex-1 h-[3px] bg-white/5 relative overflow-visible">
        <div ref={fillRef}
          style={{ transform: 'scaleX(0)', transformOrigin: 'left', height: '100%', background: 'linear-gradient(90deg,#00ff88,#39ff6a)', position: 'relative' }}>
          <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-green-primary"
            style={{ boxShadow: '0 0 7px #00ff88' }} />
        </div>
      </div>
      <span className="font-sans text-[0.65rem] text-ink-faint min-w-[30px] text-right">{pct}%</span>
    </div>
  )
}

const iconMap = { code: Code2, pen: PenTool, terminal: Terminal, monitor: Monitor }

/* ── SKILLS ── */
export function Skills() {
  return (
    <section id="skills" className={`relative z-10 py-24 px-6 md:px-14 border-b ${GB}`}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="04" label="Skills" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-14">
          Tools & <span className="text-gradient">Proficiencies</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {skills.map((s, i) => {
            const Icon = iconMap[s.icon] || Code2
            return (
              <Reveal key={i} delay={i * 80}
                className={`border ${GB} bg-bg-card p-7 relative overflow-hidden group hover:${GB2} transition-colors duration-200 top-glow`}>
                <div className="flex items-center gap-3 font-sans text-[0.68rem] tracking-[0.14em] uppercase text-green-primary mb-5">
                  <Icon size={13} className="opacity-70" />{s.title}
                </div>
                {s.items.map((item, j) => <SkillBar key={j} {...item} />)}
              </Reveal>
            )
          })}
        </div>
        <Reveal className={`border ${GB} bg-bg-card p-6 mb-4`}>
          <div className="font-sans text-[0.68rem] tracking-[0.14em] uppercase text-green-primary mb-4">// Domain_Expertise</div>
          <div className="flex flex-wrap gap-2">{domainExpertise.map(d => <Tag key={d}>{d}</Tag>)}</div>
        </Reveal>
        <Reveal className={`flex items-center gap-4 p-5 border ${GB} bg-bg-card hover:${GB2} transition-colors duration-200 group relative left-bar`}>
          <div className={`w-10 h-10 border ${GB2} ${GBG} flex items-center justify-center flex-shrink-0`}>
            <Award size={16} className="text-green-primary" />
          </div>
          <div>
            <div className="text-[0.85rem] font-bold text-ink">Web Development Certificate</div>
            <div className="font-sans text-[0.65rem] text-ink-muted mt-0.5 tracking-wider">Pupilfirst</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── EDUCATION ── */
export function Education() {
  return (
    <section id="education" className={`relative z-10 py-24 px-6 md:px-14 bg-bg-2 border-b ${GB}`}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="05" label="Education" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-14">
          Academic <span className="text-gradient">Background</span>
        </h2>
        <div className="flex flex-col gap-4 max-w-3xl">
          {education.map((e, i) => (
            <Reveal key={i} delay={i * 100}
              className={`border ${GB} bg-bg p-7 relative overflow-hidden group hover:${GB2} hover:bg-bg-card transition-all duration-300`}
              style={{ borderLeft: '2px solid rgba(0,255,136,0.4)' }}>
              <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                <div className="text-[1rem] font-bold text-ink tracking-tight">{e.degree}</div>
                <span className={`font-sans text-[0.65rem] text-green-primary border ${GB2} ${GBG} px-3 py-1 whitespace-nowrap`}>{e.year} · {e.short}</span>
              </div>
              <div className="font-sans text-[0.72rem] text-green-primary tracking-wider mb-1">{e.inst}</div>
              <div className="font-sans text-[0.65rem] text-ink-faint mb-5">{e.loc}</div>
              <div className="flex flex-wrap gap-2">{e.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
