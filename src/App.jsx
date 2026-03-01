import { useState, useEffect, useRef } from 'react'

/* ───────────────────────────── Hook: Intersection Observer ───────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  )
}

/* ───────────────────────────── SVG Icons ───────────────────────────── */
const Icons = {
  architect: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="6" y="6" width="36" height="36" rx="6" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="14" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" /><rect x="26" y="14" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="26" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" /><rect x="26" y="26" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" /><line x1="22" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="1.5" /><line x1="18" y1="22" x2="18" y2="26" stroke="currentColor" strokeWidth="1.5" /><line x1="30" y1="22" x2="30" y2="26" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  developer: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><polyline points="16,16 8,24 16,32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><polyline points="32,16 40,24 32,32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="28" y1="10" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
  ),
  business: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M8 36 L24 12 L40 36 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" /><line x1="16" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="1.5" /><circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  customer: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" /><path d="M18 24 L22 28 L30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 8 L24 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M24 44 L24 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
  ),
  finance: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="8" y="20" width="6" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="17" y="14" width="6" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="26" y="18" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="35" y="10" width="6" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" /><line x1="6" y1="40" x2="43" y2="40" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  insurance: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M24 6 L38 14 L38 28 C38 36 24 44 24 44 C24 44 10 36 10 28 L10 14 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M18 24 L22 28 L30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  healthcare: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="18" y="8" width="12" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" /><rect x="8" y="18" width="32" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  manufacturing: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="16" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" /><circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" /><circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" /><line x1="20" y1="20" x2="14" y2="27" stroke="currentColor" strokeWidth="1.5" /><line x1="28" y1="20" x2="34" y2="27" stroke="currentColor" strokeWidth="1.5" /><line x1="22" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  arrow: (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" /><path d="M18 24 L30 24 M26 20 L30 24 L26 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  shield: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7"><path d="M16 3 L28 9 V18 C28 24 16 30 16 30 C16 30 4 24 4 18 V9 Z" stroke="currentColor" strokeWidth="1.5" /><path d="M11 16 L14 19 L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  engine: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" /><circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" /><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" /><line x1="16" y1="26" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" /><line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="1.5" /><line x1="26" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  people: (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7"><circle cx="11" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" /><circle cx="21" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" /><path d="M3 26 C3 20 7 18 11 18 C13 18 14.5 18.5 16 20 C17.5 18.5 19 18 21 18 C25 18 29 20 29 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
  ),
}

/* ───────────────────────────── Navbar ───────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-cool-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]' : ''}`}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="font-display text-xl font-extrabold tracking-tight text-light">Camunda</a>
          <div className="hidden md:flex items-center gap-7">
            {['Platform', 'Solutions', 'Developers', 'Customers', 'Pricing'].map(item => (
              <a key={item} href="#" className="text-sm text-slate hover:text-light transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
        <a href="#" className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold bg-accent hover:bg-accent-hover text-white rounded-lg transition-all duration-200 shadow-[0_1px_2px_rgba(252,93,13,0.3)]">
          Try Free
        </a>
      </div>
    </nav>
  )
}

/* ───────────────────────────── Section 1: Hero ───────────────────────────── */
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-cool-surface" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c7cdd8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* SVG flowing lines — more visible */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.28]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FC5D0D" stopOpacity="0" />
            <stop offset="50%" stopColor="#FC5D0D" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FC5D0D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0" />
            <stop offset="50%" stopColor="#475569" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#475569" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Flowing curves — more lines for density */}
        {[
          { d: 'M-100,250 C200,230 400,350 720,300 S1100,200 1540,270', delay: '0s', grad: 'url(#line-grad)' },
          { d: 'M-100,380 C300,350 500,450 720,410 S1000,330 1540,390', delay: '2s', grad: 'url(#line-grad-2)' },
          { d: 'M-100,520 C250,500 450,570 720,530 S1050,480 1540,520', delay: '4s', grad: 'url(#line-grad)' },
          { d: 'M-100,160 C350,180 550,110 800,160 S1150,240 1540,180', delay: '1s', grad: 'url(#line-grad-2)' },
          { d: 'M-100,660 C200,640 500,700 750,660 S1100,620 1540,660', delay: '3s', grad: 'url(#line-grad)' },
          { d: 'M-100,800 C300,770 600,830 900,790 S1200,750 1540,800', delay: '5s', grad: 'url(#line-grad-2)' },
          { d: 'M-100,100 C200,120 500,60 800,100 S1100,140 1540,100', delay: '1.5s', grad: 'url(#line-grad)' },
        ].map((line, i) => (
          <path
            key={i}
            d={line.d}
            stroke={line.grad}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="12 8"
            style={{ animation: `flow-line 8s linear infinite`, animationDelay: line.delay }}
          />
        ))}

        {/* Larger, more visible nodes */}
        {[
          { cx: 180, cy: 240 }, { cx: 460, cy: 370 }, { cx: 720, cy: 300 },
          { cx: 920, cy: 230 }, { cx: 1100, cy: 400 }, { cx: 320, cy: 510 },
          { cx: 580, cy: 160 }, { cx: 1000, cy: 530 }, { cx: 800, cy: 660 },
          { cx: 260, cy: 650 }, { cx: 1150, cy: 180 }, { cx: 420, cy: 110 },
          { cx: 650, cy: 470 }, { cx: 1050, cy: 320 }, { cx: 140, cy: 400 },
          { cx: 860, cy: 130 }, { cx: 540, cy: 620 }, { cx: 1200, cy: 570 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="4" fill={i % 4 === 0 ? '#FC5D0D' : '#94a3b8'} opacity="0.5"
              style={{ animation: `pulse-glow 3s ease-in-out infinite`, animationDelay: `${i * 0.35}s` }} />
            <circle cx={node.cx} cy={node.cy} r="10" fill="none" stroke={i % 4 === 0 ? '#FC5D0D' : '#94a3b8'} strokeWidth="0.5" opacity="0.2"
              style={{ animation: `pulse-glow 3s ease-in-out infinite`, animationDelay: `${i * 0.35}s` }} />
          </g>
        ))}
      </svg>

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-accent/[0.04] rounded-full blur-3xl" />
      <div className="absolute top-2/3 right-1/4 w-[500px] h-[500px] bg-[#475569]/[0.03] rounded-full blur-3xl" />
    </div>
  )
}

function Hero() {
  const ref = useReveal()
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 flex items-center justify-center">
      <HeroBackground />
      <div ref={ref} className="reveal relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-[-0.03em] leading-[1.08] mb-5">
          The enterprise platform<br className="hidden sm:block" /> for{' '}
          <span className="bg-gradient-to-r from-accent to-[#ff8a4c] bg-clip-text text-transparent">agentic orchestration</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate max-w-2xl mx-auto mb-3 leading-relaxed">
          Cut processing time, eliminate manual work, and scale automation that actually delivers.
          <br className="hidden sm:block" />
          One platform to orchestrate AI agents, processes, and people.
        </p>
        <p className="text-sm sm:text-base text-slate-light max-w-2xl mx-auto mb-9">
          The production-grade framework for building and orchestrating multi-agent systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="px-9 py-4 text-base font-semibold bg-accent hover:bg-accent-hover text-white rounded-xl transition-all duration-300 shadow-[0_2px_8px_rgba(252,93,13,0.25)] hover:shadow-[0_4px_16px_rgba(252,93,13,0.35)] hover:-translate-y-0.5">
            Try Free
          </a>
          <a href="#" className="px-9 py-4 text-base font-medium border border-cool-border text-light hover:border-slate-light hover:bg-cool-surface rounded-xl transition-all duration-300 hover:-translate-y-0.5">
            See how it works
          </a>
        </div>
        <div className="mt-6">
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200">
            Build your first orchestrated agent in 5 minutes
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Outcomes Bar ───────────────────────────── */
function MiniLineDown() {
  return (
    <svg viewBox="0 0 60 32" className="w-[60px] h-[32px]">
      <polyline points="2,6 12,8 22,12 32,16 42,22 52,28 58,30" fill="none" stroke="#FC5D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sparkline-draw" />
      <linearGradient id="fill-down" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FC5D0D" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FC5D0D" stopOpacity="0" />
      </linearGradient>
      <path d="M2,6 L12,8 L22,12 L32,16 L42,22 L52,28 L58,30 L58,32 L2,32 Z" fill="url(#fill-down)" className="sparkline-area" />
    </svg>
  )
}

function MiniBarGrow() {
  return (
    <svg viewBox="0 0 60 32" className="w-[60px] h-[32px]">
      {[
        { x: 2, h: 8 }, { x: 11, h: 14 }, { x: 20, h: 18 }, { x: 29, h: 22 },
        { x: 38, h: 26 }, { x: 47, h: 30 },
      ].map((bar, i) => (
        <rect key={i} x={bar.x} y={32 - bar.h} width="7" height={bar.h} rx="1.5" fill="#FC5D0D"
          opacity="0.7" className="bar-grow" style={{ animationDelay: `${i * 0.1}s` }} />
      ))}
    </svg>
  )
}

function MiniGauge() {
  return (
    <svg viewBox="0 0 40 40" className="w-[36px] h-[36px]">
      <circle cx="20" cy="20" r="16" fill="none" stroke="#e2e8f0" strokeWidth="3" />
      <circle cx="20" cy="20" r="16" fill="none" stroke="#FC5D0D" strokeWidth="3"
        strokeDasharray="96 100.5" strokeDashoffset="0" strokeLinecap="round"
        transform="rotate(-90 20 20)" className="gauge-fill" />
      <text x="20" y="23" textAnchor="middle" fill="#FC5D0D" fontSize="9" fontWeight="600" fontFamily="'JetBrains Mono', monospace">99%</text>
    </svg>
  )
}

function MiniLineUp() {
  return (
    <svg viewBox="0 0 60 32" className="w-[60px] h-[32px]">
      <polyline points="2,28 12,24 22,22 32,18 42,12 52,8 58,4" fill="none" stroke="#FC5D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sparkline-draw" />
      <linearGradient id="fill-up" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FC5D0D" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FC5D0D" stopOpacity="0" />
      </linearGradient>
      <path d="M2,28 L12,24 L22,22 L32,18 L42,12 L52,8 L58,4 L58,32 L2,32 Z" fill="url(#fill-up)" className="sparkline-area" />
    </svg>
  )
}

function OutcomesBar() {
  const tiles = [
    { chart: <MiniLineDown />, number: '60%', label: 'faster processing' },
    { chart: <MiniBarGrow />, number: '12M+', label: 'daily orchestrations' },
    { chart: <MiniGauge />, number: '99.7%', label: 'accuracy at scale' },
    { chart: <MiniLineUp />, number: '500+', label: 'enterprises' },
  ]

  return (
    <section className="py-10 bg-white border-y border-cool-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {tile.chart}
                </div>
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-bold text-light leading-none">{tile.number}</p>
                  <p className="text-sm text-slate mt-0.5">{tile.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={5}>
          <p className="text-center text-sm text-slate-light mt-6">Real results from enterprises automating what used to be manual.</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 2: Why Now ───────────────────────────── */
function CoordinationGraphic() {
  /* ── Left diagram: nodes & connections ── */
  const chaosNodes = [
    { x: 60, y: 40 }, { x: 180, y: 30 }, { x: 260, y: 60 },
    { x: 40, y: 120 }, { x: 150, y: 100 }, { x: 240, y: 130 },
    { x: 100, y: 170 }, { x: 200, y: 170 },
  ]
  const chaosLines = [
    { x1: 64, y1: 42, x2: 180, y2: 30 },
    { x1: 180, y1: 30, x2: 260, y2: 60 },
    { x1: 40, y1: 120, x2: 150, y2: 100 },
    { x1: 150, y1: 100, x2: 240, y2: 130 },
    { x1: 60, y1: 40, x2: 40, y2: 120 },
    { x1: 100, y1: 170, x2: 200, y2: 170 },
    { x1: 240, y1: 130, x2: 200, y2: 170 },
  ]

  /* ── Right diagram: paths & nodes ── */
  const flowPaths = [
    { id: 'path-top', d: 'M30,60 L100,60 L160,40 L220,60 L290,60', color: '#3b82f6', width: 1.5 },
    { id: 'path-mid', d: 'M30,110 C80,70 120,70 160,110 S240,150 290,110', color: '#3b82f6', width: 2 },
    { id: 'path-bot', d: 'M30,160 L100,150 L160,170 L220,150 L290,160', color: '#10b981', width: 1.5 },
  ]
  const flowNodes = [
    { x: 30, y: 60 }, { x: 100, y: 60 }, { x: 160, y: 40 }, { x: 220, y: 60 }, { x: 290, y: 60 },
    { x: 30, y: 110 }, { x: 160, y: 110 }, { x: 290, y: 110 },
    { x: 30, y: 160 }, { x: 100, y: 150 }, { x: 160, y: 170 }, { x: 220, y: 150 }, { x: 290, y: 160 },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      {/* ────── Without orchestration ────── */}
      <div>
        <div className="relative bg-cool-surface border border-cool-border/60 rounded-2xl p-8 overflow-hidden">
          <p className="font-mono text-xs font-medium text-red-500/70 mb-6 uppercase tracking-wider">Without orchestration</p>
          <svg viewBox="0 0 320 210" className="w-full h-auto" fill="none">
            {/* Connections — flicker and snap */}
            {chaosLines.map((l, i) => (
              <line key={`cl-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke="#ef4444" strokeWidth="1" strokeDasharray="4 4"
                className="chaos-line" style={{ animationDelay: `${i * 1.1}s` }} />
            ))}

            {/* Nodes — drift apart */}
            {chaosNodes.map((n, i) => (
              <g key={`cn-${i}`} className="chaos-node" style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${3 + i * 0.5}s` }}>
                <circle cx={n.x} cy={n.y} r="8" fill="#ef4444" opacity="0.10" />
                <circle cx={n.x} cy={n.y} r="4" fill="#ef4444" opacity="0.5" />
              </g>
            ))}

            {/* Failure markers — pulse in/out staggered */}
            <text x="118" y="74" fill="#ef4444" fontSize="14" className="chaos-fail" style={{ animationDelay: '0s' }}>✕</text>
            <text x="195" y="82" fill="#ef4444" fontSize="14" className="chaos-fail" style={{ animationDelay: '2.5s' }}>✕</text>
            <text x="75" y="148" fill="#ef4444" fontSize="12" className="chaos-fail" style={{ animationDelay: '4.5s' }}>?</text>
            <text x="225" y="98" fill="#ef4444" fontSize="12" className="chaos-fail" style={{ animationDelay: '1.8s' }}>!</text>
            <text x="148" y="178" fill="#ef4444" fontSize="14" className="chaos-fail" style={{ animationDelay: '3.5s' }}>✕</text>
            {/* Warning triangles */}
            <text x="88" y="55" fill="#ef4444" fontSize="11" className="chaos-warn" style={{ animationDelay: '1s' }}>⚠</text>
            <text x="210" y="155" fill="#ef4444" fontSize="11" className="chaos-warn" style={{ animationDelay: '5s' }}>⚠</text>
          </svg>
        </div>
        <p className="text-xs text-slate-light mt-3 leading-relaxed px-2">
          Agents, systems, and people working in isolation. Value is capped. Each new automation adds complexity — and can make things worse.
        </p>
      </div>

      {/* ────── With orchestration ────── */}
      <div>
        <div className="relative bg-cool-surface border border-accent/20 rounded-2xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-accent/[0.02]" />
          <p className="font-mono text-xs font-medium text-accent mb-6 uppercase tracking-wider relative z-10">With orchestration</p>
          <svg viewBox="0 0 320 210" className="w-full h-auto relative z-10" fill="none">
            <defs>
              <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Connection paths (static track lines) */}
            {flowPaths.map(p => (
              <path key={p.id} id={p.id} d={p.d} stroke={p.color} strokeWidth={p.width}
                opacity="0.2" strokeDasharray="6 4" />
            ))}

            {/* Flowing pulses — 2 per path, staggered */}
            {flowPaths.map((p, pi) => (
              [0, 1].map(dup => (
                <circle key={`pulse-${pi}-${dup}`} r="3.5" fill={p.color} opacity="0.9" filter="url(#glow-blue)">
                  <animateMotion dur={`${3 + pi * 0.5}s`} begin={`${dup * (1.5 + pi * 0.25)}s`} repeatCount="indefinite" fill="freeze">
                    <mpath href={`#${p.id}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.9;0.9;0" dur={`${3 + pi * 0.5}s`} begin={`${dup * (1.5 + pi * 0.25)}s`} repeatCount="indefinite" />
                </circle>
              ))
            ))}

            {/* Nodes — static with hover glow */}
            {flowNodes.map((n, i) => (
              <g key={`fn-${i}`}>
                <circle cx={n.x} cy={n.y} r="10" fill="#3b82f6" opacity="0.08" />
                <circle cx={n.x} cy={n.y} r="5" fill="#3b82f6" opacity="0.6" className="flow-node" style={{ animationDelay: `${i * 0.3}s` }} />
              </g>
            ))}

            {/* Completion flashes at end nodes */}
            {[{ x: 290, y: 60 }, { x: 290, y: 110 }, { x: 290, y: 160 }].map((n, i) => (
              <g key={`check-${i}`} className="flow-complete" style={{ animationDelay: `${2.5 + i * 0.8}s` }}>
                <circle cx={n.x} cy={n.y} r="8" fill="#10b981" opacity="0.15" />
                <path d={`M${n.x - 3} ${n.y} L${n.x - 1} ${n.y + 2.5} L${n.x + 3.5} ${n.y - 2.5}`} stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ))}

            {/* Central orchestrator — pulsing hub */}
            <rect x="150" y="100" width="20" height="20" rx="4" stroke="#10b981" strokeWidth="1.5" fill="#10b981" fillOpacity="0.06"
              className="orch-hub" filter="url(#glow-green)" />
            <path d="M155 110 L158 113 L165 106" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xs text-slate-light mt-3 leading-relaxed px-2">
          Work flows end to end — across agents, systems, and people. AI automates steps and guides decisions. Orchestration resolves the fragmentation.
        </p>
      </div>
    </div>
  )
}

function WhyNow() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">Why now</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-10">The automation ceiling</h2>
        </Reveal>

        {/* Two-column layout: narrative left (~60%), stats right (~40%) */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14">
          {/* Narrative — left column on desktop, second on mobile */}
          <Reveal delay={2}>
            <div className="space-y-5 text-slate leading-relaxed order-2 lg:order-1">
              <p>
                Every enterprise has automated tasks. RPA bots handle data entry. AI agents process documents. But the end-to-end process — the full claims journey, the complete order-to-cash cycle, the patient intake workflow — still depends on manual handoffs, human exception handling, and stitched-together integrations. Results flatten. And each new bot or agent you add increases fragmentation.
              </p>
              <p>
                This is the automation ceiling. Individual task automation can&rsquo;t scale into operational transformation without something connecting it all together.
              </p>
              <p>
                Enterprises building multi-agent systems hit the same wall. Agents that work in isolation can&rsquo;t coordinate across an end-to-end process. Failures cascade. Nobody orchestrates the whole.
              </p>
              <p>
                The enterprises breaking through are doing something different. They&rsquo;re building on an orchestration foundation — where agents, processes, and human handoffs are coordinated end to end.
              </p>
              <p className="text-light font-semibold">
                That foundation is agentic orchestration.
              </p>
            </div>
          </Reveal>

          {/* Stats — right column on desktop, first on mobile */}
          <Reveal delay={2}>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-accent/8 to-accent/[0.02] border-l-[3px] border-accent pl-6 py-5 rounded-r-xl">
                <p className="text-lg sm:text-xl font-display font-bold leading-snug text-light">
                  <span className="font-mono text-accent">71%</span> of organizations say they&rsquo;re using AI agents. Only <span className="font-mono text-accent">11%</span> of agentic AI use cases reached production last year.
                </p>
                <p className="text-xs text-slate-light mt-3 font-mono">— Camunda, State of Agentic Orchestration and Automation 2026</p>
              </div>
              <div className="bg-gradient-to-br from-accent/8 to-accent/[0.02] border-l-[3px] border-accent pl-6 py-5 rounded-r-xl">
                <p className="text-lg sm:text-xl font-display font-bold leading-snug text-light">
                  <span className="font-mono text-accent">88%</span> of IT leaders say AI needs to be orchestrated across business processes to maximize value. Yet <span className="font-mono text-accent">85%</span> admit they haven&rsquo;t reached the process maturity to do it.
                </p>
                <p className="text-xs text-slate-light mt-3 font-mono">— Camunda, State of Agentic Orchestration and Automation 2026</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <CoordinationGraphic />
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 3: The Spectrum ───────────────────────────── */
function Spectrum() {
  const [hoveredUseCase, setHoveredUseCase] = useState(null)
  const barRef = useReveal()

  const useCases = [
    { label: 'Order processing', zone: 'left', description: 'High-volume, rules-driven order handling running millions of times daily.' },
    { label: 'Payment automation', zone: 'left', description: 'Automated payment routing with compliance checks and reconciliation.' },
    { label: 'Account opening', zone: 'left', description: 'Straight-through account creation with automated KYC verification.' },
    { label: 'Risk assessment', zone: 'mid', description: 'Blends deterministic rules with AI-powered risk scoring and escalation.' },
    { label: 'Eligibility determination', zone: 'mid', description: 'Combines policy rules with dynamic data analysis for coverage decisions.' },
    { label: 'Fraud detection', zone: 'mid', description: 'Real-time pattern matching with adaptive AI models and human review.' },
    { label: 'Claims adjudication', zone: 'right', description: 'AI agents assess initial claims; complex cases route to specialized adjusters.' },
    { label: 'Patient journeys', zone: 'right', description: 'Adaptive care coordination across providers, systems, and patient needs.' },
    { label: 'Complex investigations', zone: 'right', description: 'AI-driven research with human oversight, dynamic routing, and governance.' },
  ]

  const zones = [
    { key: 'left', label: 'Fully automated', color: 'from-accent/10 to-accent/[0.02]', dotColor: 'bg-accent' },
    { key: 'mid', label: 'Hybrid', color: 'from-purple-500/10 to-purple-500/[0.02]', dotColor: 'bg-purple-500' },
    { key: 'right', label: 'Fully adaptive', color: 'from-mint/10 to-mint/[0.02]', dotColor: 'bg-mint' },
  ]

  return (
    <section className="py-32 bg-cool-surface">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">What Camunda does</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-6">
            From fully automated to fully adaptive
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-slate text-lg max-w-3xl mb-16 leading-relaxed">
            Camunda handles the full spectrum of enterprise work — from straight-through processing to complex agentic workflows — on one platform.
          </p>
        </Reveal>

        {/* Spectrum bar — animated on reveal */}
        <Reveal delay={2}>
          <div className="relative mb-4">
            <div className="flex justify-between mb-3 text-sm">
              <span className="font-mono text-sm text-accent font-medium">Straight-through processing</span>
              <span className="font-mono text-sm text-mint font-medium">Agentic workflows</span>
            </div>
            <div ref={barRef} className="spectrum-bar-animated relative h-2 rounded-full overflow-hidden"
              style={{ background: 'linear-gradient(90deg, #FC5D0D 0%, #8b5cf6 50%, #10b981 100%)' }}>
            </div>
            <div className="flex justify-between mt-2 text-sm text-slate-light">
              <span className="max-w-[340px]">Automate end-to-end processes that run millions of times with zero drift. The proven foundation hundreds of enterprises already run on.</span>
              <span className="max-w-[340px] text-right">Turn complex, judgment-heavy work into intelligent workflows. Agents and people, coordinated end to end.</span>
            </div>
          </div>
        </Reveal>

        {/* Use case cards */}
        <Reveal delay={3}>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {zones.map((zone) => (
              <div key={zone.key} className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${zone.dotColor}`} />
                  <span className="font-mono text-xs font-medium text-slate uppercase tracking-wider">{zone.label}</span>
                </div>
                {useCases.filter(uc => uc.zone === zone.key).map((uc, j) => {
                  const globalIdx = useCases.indexOf(uc)
                  const isHovered = hoveredUseCase === globalIdx
                  return (
                    <div
                      key={j}
                      className={`relative bg-gradient-to-br ${zone.color} border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        isHovered ? 'border-accent/30 -translate-y-0.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]' : 'border-cool-border/50 hover:border-cool-border'
                      }`}
                      onMouseEnter={() => setHoveredUseCase(globalIdx)}
                      onMouseLeave={() => setHoveredUseCase(null)}
                    >
                      <p className={`text-sm font-medium transition-colors duration-200 ${isHovered ? 'text-light' : 'text-light/80'}`}>
                        {uc.label}
                      </p>
                      <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs text-slate leading-relaxed">{uc.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p className="text-center text-slate text-lg max-w-2xl mx-auto mt-14">
            Most enterprises need both. <span className="text-light font-semibold">One platform handles the full range</span> — with governance across everything.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 6: Agentic Enterprise Stack ───────────────────────────── */

/* Icon components for stack tiles */
const StackIcons = {
  chat: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  headset: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M3 18v-6a9 9 0 0118 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  teams: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="2" y="2" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  globe: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  phone: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  bot: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2l2.4 2.4L12 6.8 9.6 4.4 12 2z" fill="currentColor" opacity="0.4"/><rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/></svg>,
  db: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  erp: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>,
  crm: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>,
  legacy: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  cloud: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
}

/* Living network SVG for the Camunda middle layer */
function CamundaNetwork() {
  /* Node positions in the network */
  const nodes = [
    { x: 60, y: 22, type: 'gear' },   { x: 160, y: 14, type: 'brain' },
    { x: 260, y: 26, type: 'person' }, { x: 360, y: 16, type: 'gear' },
    { x: 460, y: 24, type: 'diamond' },
    { x: 110, y: 56, type: 'brain' },  { x: 210, y: 52, type: 'diamond' },
    { x: 310, y: 58, type: 'person' }, { x: 410, y: 50, type: 'brain' },
    { x: 60, y: 90, type: 'person' }, { x: 160, y: 94, type: 'gear' },
    { x: 260, y: 88, type: 'brain' }, { x: 360, y: 96, type: 'gear' },
    { x: 460, y: 90, type: 'diamond' },
  ]

  /* Connections: [fromIdx, toIdx, type] — 'solid' or 'glow' */
  const edges = [
    [0, 1, 'solid'], [1, 2, 'glow'], [2, 3, 'solid'], [3, 4, 'glow'],
    [0, 5, 'solid'], [1, 6, 'glow'], [2, 7, 'solid'], [3, 8, 'glow'],
    [5, 6, 'glow'], [6, 7, 'solid'], [7, 8, 'glow'],
    [5, 9, 'solid'], [6, 10, 'glow'], [7, 11, 'solid'], [8, 13, 'glow'],
    [9, 10, 'glow'], [10, 11, 'solid'], [11, 12, 'glow'], [12, 13, 'solid'],
    [6, 11, 'glow'], [1, 7, 'solid'],
  ]

  const nodeIcon = (type, x, y) => {
    const o = 5 // offset from center
    switch(type) {
      case 'gear': return <circle cx={x} cy={y} r={o} stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
      case 'brain': return <><circle cx={x} cy={y} r={o-1} fill="currentColor" opacity="0.15" /><circle cx={x} cy={y} r={2} fill="currentColor" opacity="0.5" /></>
      case 'person': return <><circle cx={x} cy={y-2} r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" /><path d={`M${x-4} ${y+4} a4 4 0 018 0`} stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" /></>
      case 'diamond': return <rect x={x-4} y={y-4} width="8" height="8" rx="1" transform={`rotate(45 ${x} ${y})`} stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
      default: return null
    }
  }

  return (
    <svg viewBox="0 0 520 110" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="pulse-glow-f"><feGaussianBlur stdDeviation="2.5" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>

      {/* Edges */}
      {edges.map(([a, b, type], i) => {
        const n1 = nodes[a], n2 = nodes[b]
        return (
          <line key={`e-${i}`} x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
            stroke={type === 'glow' ? '#FC5D0D' : '#94a3b8'}
            strokeWidth={type === 'glow' ? '1' : '0.8'}
            opacity={type === 'glow' ? '0.18' : '0.12'}
            strokeDasharray={type === 'glow' ? '4 3' : 'none'}
          />
        )
      })}

      {/* Travelling pulses along glow edges */}
      {edges.filter(([,,t]) => t === 'glow').map(([a, b], i) => {
        const n1 = nodes[a], n2 = nodes[b]
        const pathId = `net-path-${i}`
        return (
          <g key={`p-${i}`}>
            <path id={pathId} d={`M${n1.x},${n1.y} L${n2.x},${n2.y}`} fill="none" stroke="none" />
            <circle r="2.5" fill="#FC5D0D" opacity="0" filter="url(#pulse-glow-f)">
              <animateMotion dur={`${2.5 + (i % 3) * 0.8}s`} begin={`${i * 0.6}s`} repeatCount="indefinite">
                <mpath href={`#${pathId}`} />
              </animateMotion>
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur={`${2.5 + (i % 3) * 0.8}s`} begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>
          </g>
        )
      })}

      {/* Nodes */}
      <g className="text-accent">
        {nodes.map((n, i) => (
          <g key={`n-${i}`} className="stack-net-node" style={{ animationDelay: `${i * 0.25}s` }}>
            <circle cx={n.x} cy={n.y} r="12" fill="#FC5D0D" opacity="0.04" />
            {nodeIcon(n.type, n.x, n.y)}
          </g>
        ))}
      </g>
    </svg>
  )
}

function AgenticStack() {
  const [activeLayer, setActiveLayer] = useState(null)

  const topTiles = [
    { icon: StackIcons.chat, label: 'Messaging' },
    { icon: StackIcons.headset, label: 'Voice' },
    { icon: StackIcons.mail, label: 'Email' },
    { icon: StackIcons.teams, label: 'Collaboration' },
    { icon: StackIcons.globe, label: 'Web portal' },
    { icon: StackIcons.phone, label: 'Mobile' },
    { icon: StackIcons.bot, label: 'AI chatbot' },
  ]

  const bottomTiles = [
    { icon: StackIcons.db, label: 'Database' },
    { icon: StackIcons.erp, label: 'ERP' },
    { icon: StackIcons.crm, label: 'CRM' },
    { icon: StackIcons.legacy, label: 'Legacy' },
    { icon: StackIcons.db, label: 'Data warehouse' },
    { icon: StackIcons.cloud, label: 'Cloud / SaaS' },
  ]

  const layerDetails = [
    'Conversational interfaces across every channel — Teams, Slack, web, mobile. Understands intent, takes action, maintains context. One unified experience for employees and customers.',
    'The coordination engine — and the most powerful multi-agent framework in the market. Build agents that orchestrate other agents via MCP and A2A. Coordinate through handoff or supervisor patterns. Wait durably for agent responses across minutes or months. Govern every decision with a complete audit trail.',
    'ERPs, CRMs, databases, legacy systems, AI models, third-party agents. Camunda connects to them, orchestrates across them, and maintains a unified view of business state through the Business Object Graph.',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">The Agentic Enterprise Stack</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-4">
            The orchestration core your enterprise is missing
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-lg text-slate max-w-3xl mb-10 leading-relaxed">
            Every enterprise already has engagement channels and core systems. What&rsquo;s missing is the intelligent orchestration layer that connects them.
          </p>
        </Reveal>

        {/* ═══ Three-layer architecture diagram ═══ */}
        <Reveal delay={3}>
          <div className="relative">

            {/* ── Top layer: Engagement Channels ── */}
            <button onClick={() => setActiveLayer(activeLayer === 0 ? null : 0)}
              className={`w-full text-left bg-cool-surface border rounded-xl p-4 sm:p-5 cursor-pointer transition-all duration-300 ${activeLayer === 0 ? 'border-slate-light shadow-[0_2px_12px_rgba(0,0,0,0.06)]' : 'border-cool-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-light hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]'}`}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-display text-sm font-bold text-light">Agentic Engagement</h3>
                  <p className="text-[11px] text-slate mt-0.5">Where employees and customers interact</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full transition-all duration-300 ${activeLayer === 0 ? 'bg-slate/10 text-slate' : 'bg-cool-border/40 text-slate-light'}`}>
                  {activeLayer === 0 ? 'Close' : 'Explore'}
                  <svg className={`w-3 h-3 transition-transform duration-300 ${activeLayer === 0 ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {topTiles.map((t, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 w-14">
                    <div className="w-8 h-8 rounded-lg bg-white border border-cool-border/50 flex items-center justify-center text-slate-light">
                      {t.icon}
                    </div>
                    <span className="text-[9px] text-slate-light text-center leading-tight">{t.label}</span>
                  </div>
                ))}
              </div>
              <div className={`grid transition-all duration-500 ${activeLayer === 0 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="border-l-2 border-slate-light/40 pl-4 py-1">
                    <p className="text-sm text-slate leading-relaxed max-w-2xl">{layerDetails[0]}</p>
                  </div>
                </div>
              </div>
            </button>

            {/* ── Connectors: top → middle ── */}
            <div className="flex justify-around px-16 py-px">
              {[0,1,2,3,4].map(i => (
                <div key={i} className="w-px h-5 bg-gradient-to-b from-cool-border to-accent/20" />
              ))}
            </div>

            {/* ── Middle layer: Camunda (THE HERO) ── */}
            <button onClick={() => setActiveLayer(activeLayer === 1 ? null : 1)}
              className={`w-full text-left border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_0_40px_rgba(252,93,13,0.06)] animate-[layer-pulse_4s_ease-in-out_infinite] ${activeLayer === 1 ? 'border-accent/50' : 'border-accent/30 hover:border-accent/50 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(252,93,13,0.10)]'}`}>
              <div className="bg-gradient-to-br from-accent/[0.06] via-white to-accent/[0.04] p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-sm bg-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-accent">Agentic Orchestration & Automation</h3>
                      <p className="text-[11px] text-accent/60 font-mono font-medium">Camunda</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full transition-all duration-300 ${activeLayer === 1 ? 'bg-accent/10 text-accent' : 'bg-accent/[0.07] text-accent/60'}`}>
                    {activeLayer === 1 ? 'Close' : 'Explore'}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${activeLayer === 1 ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>

                {/* Living network — always visible */}
                <CamundaNetwork />

                {/* Node legend */}
                <div className="flex flex-wrap gap-x-5 gap-y-1 justify-center mt-2">
                  {[
                    { label: 'Automation', icon: '⚙' },
                    { label: 'AI agent', icon: '✦' },
                    { label: 'Human', icon: '👤' },
                    { label: 'Decision', icon: '◆' },
                  ].map((item, i) => (
                    <span key={i} className="flex items-center gap-1 text-[10px] text-slate-light">
                      <span className="text-xs opacity-60">{item.icon}</span> {item.label}
                    </span>
                  ))}
                </div>

                <div className={`grid transition-all duration-500 ${activeLayer === 1 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="border-l-2 border-accent/30 pl-4 py-1">
                      <p className="text-sm text-slate leading-relaxed max-w-2xl">{layerDetails[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* ── Connectors: middle → bottom ── */}
            <div className="flex justify-around px-16 py-px">
              {[0,1,2,3,4].map(i => (
                <div key={i} className="w-px h-5 bg-gradient-to-b from-accent/20 to-cool-border" />
              ))}
            </div>

            {/* ── Bottom layer: Core Systems ── */}
            <button onClick={() => setActiveLayer(activeLayer === 2 ? null : 2)}
              className={`w-full text-left bg-dark-elevated/60 border rounded-xl p-4 sm:p-5 cursor-pointer transition-all duration-300 ${activeLayer === 2 ? 'border-slate-light shadow-[0_2px_12px_rgba(0,0,0,0.06)]' : 'border-cool-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-slate-light hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]'}`}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-display text-sm font-bold text-light">Core Systems & Data</h3>
                  <p className="text-[11px] text-slate mt-0.5">Your existing technology investments</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full transition-all duration-300 ${activeLayer === 2 ? 'bg-slate/10 text-slate' : 'bg-cool-border/40 text-slate-light'}`}>
                  {activeLayer === 2 ? 'Close' : 'Explore'}
                  <svg className={`w-3 h-3 transition-transform duration-300 ${activeLayer === 2 ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {bottomTiles.map((t, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 w-14">
                    <div className="w-8 h-8 rounded-lg bg-white border border-cool-border/50 flex items-center justify-center text-slate-light">
                      {t.icon}
                    </div>
                    <span className="text-[9px] text-slate-light text-center leading-tight">{t.label}</span>
                  </div>
                ))}
              </div>
              <div className={`grid transition-all duration-500 ${activeLayer === 2 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="border-l-2 border-slate-light/40 pl-4 py-1">
                    <p className="text-sm text-slate leading-relaxed max-w-2xl">{layerDetails[2]}</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p className="text-slate text-center mt-10 max-w-2xl mx-auto leading-relaxed">
            Because every process execution generates data, the platform learns over time — optimizing routing, surfacing bottlenecks, improving agent performance. <span className="text-light font-semibold">Your orchestration gets smarter the more you use it.</span>
          </p>
        </Reveal>
        <Reveal delay={4}>
          <p className="font-mono text-sm text-slate-light text-center mt-4 max-w-2xl mx-auto">
            Works with any AI provider, any agent framework, any LLM. Connect via MCP, A2A, REST, or any protocol. No lock-in.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 4: Audience Paths ───────────────────────────── */
function AudiencePaths() {
  const paths = [
    { icon: Icons.architect, label: 'Enterprise Architect / CIO', hook: 'See the platform', description: 'Explore architecture, integration, governance, and enterprise-grade security.', cta: 'Explore the platform' },
    { icon: Icons.developer, label: 'Developer', hook: 'Start building', description: 'Build and orchestrate multi-agent systems with Java SDKs, REST APIs, and a free trial. From first agent to production in days.', cta: 'Start building' },
    { icon: Icons.business, label: 'Business / LOB Leader', hook: 'See solutions for your domain', description: 'See how enterprises cut processing time by 60%, eliminate manual exceptions, and scale operations — in your industry.', cta: 'See solutions' },
    { icon: Icons.customer, label: 'Existing Customer', hook: "What's new", description: "Agentic orchestration capabilities, migration paths, and what's coming next.", cta: "See what's new" },
  ]

  return (
    <section className="py-32 bg-cool-surface">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">Start your journey</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-14">Built for how you work</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {paths.map((path, i) => (
            <Reveal key={i} delay={i + 1}>
              <a href="#" className="group block bg-white border border-cool-border/60 rounded-2xl p-6 h-full hover:border-slate-light hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
                <div className="text-slate-light group-hover:text-accent transition-colors duration-300 mb-5">
                  {path.icon}
                </div>
                <p className="font-mono text-[11px] font-medium text-accent uppercase tracking-wider mb-1">{path.hook}</p>
                <h3 className="font-display text-lg font-bold mb-3 text-light">{path.label}</h3>
                <p className="text-sm text-slate leading-relaxed mb-5">{path.description}</p>
                <span className="text-sm font-semibold text-accent group-hover:text-accent-hover transition-colors duration-200 inline-flex items-center gap-1.5">
                  {path.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 5: Social Proof ───────────────────────────── */
function LogoMarquee() {
  const logos = [
    'Goldman Sachs', 'Deutsche Telekom', 'ING', 'Societe Generale',
    'Allianz', 'Helvetia', 'NASA JPL', 'Zalando', 'ABN AMRO',
  ]
  const doubled = [...logos, ...logos]

  return (
    <div className="relative overflow-hidden py-8 mb-16">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
        {doubled.map((name, i) => (
          <span key={i} className="text-lg font-display font-bold text-slate-light/50 tracking-wide select-none flex-shrink-0">
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

/* Sparkline SVGs for social proof cards */
/* Compact inline sparklines — consistent 48×20 for social proof cards */
function SparklineDown() {
  return (
    <svg viewBox="0 0 48 20" className="w-12 h-5 flex-shrink-0">
      <defs>
        <linearGradient id="sp-down-f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FC5D0D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FC5D0D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M2,3 L10,5 L18,8 L26,11 L34,14 L42,16 L46,18 L46,20 L2,20 Z" fill="url(#sp-down-f)" className="sparkline-area" />
      <polyline points="2,3 10,5 18,8 26,11 34,14 42,16 46,18" fill="none" stroke="#FC5D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sparkline-draw" />
    </svg>
  )
}
function SparklineUp() {
  return (
    <svg viewBox="0 0 48 20" className="w-12 h-5 flex-shrink-0">
      <defs>
        <linearGradient id="sp-up-f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FC5D0D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FC5D0D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M2,18 L10,15 L18,12 L26,10 L34,7 L42,4 L46,2 L46,20 L2,20 Z" fill="url(#sp-up-f)" className="sparkline-area" />
      <polyline points="2,18 10,15 18,12 26,10 34,7 42,4 46,2" fill="none" stroke="#FC5D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sparkline-draw" />
    </svg>
  )
}
function SparklineBars() {
  return (
    <svg viewBox="0 0 48 20" className="w-12 h-5 flex-shrink-0">
      {[{x:2,h:5},{x:8,h:9},{x:14,h:7},{x:20,h:12},{x:26,h:15},{x:32,h:13},{x:38,h:17},{x:44,h:14}].map((b,i)=>(
        <rect key={i} x={b.x} y={20-b.h} width="4" height={b.h} rx="1" fill="#FC5D0D" opacity={0.25 + i * 0.07} className="bar-grow" style={{ animationDelay: `${i * 0.06}s` }} />
      ))}
    </svg>
  )
}
function SparklineFlat() {
  return (
    <svg viewBox="0 0 48 20" className="w-12 h-5 flex-shrink-0">
      <defs>
        <linearGradient id="sp-flat-f" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M2,5 L10,4 L18,5 L26,3 L34,4 L42,3 L46,4 L46,20 L2,20 Z" fill="url(#sp-flat-f)" className="sparkline-area" />
      <polyline points="2,5 10,4 18,5 26,3 34,4 42,3 46,4" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sparkline-draw" />
    </svg>
  )
}

function SocialProof() {
  const stories = [
    { company: 'Wellpointe', tag: 'Healthcare', tagColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200/60', description: 'Replaced manual coordination of insurance verification, prior authorization, and logistics with end-to-end orchestrated workflows for specialty medication delivery.', sparkline: <SparklineUp />, metric: '60% faster' },
    { company: 'Global Investment Bank', tag: 'Financial Services', tagColor: 'text-blue-700 bg-blue-50 border border-blue-200/60', description: 'Automated trade settlement that previously required manual reconciliation across multiple clearing systems. Full regulatory audit trail built in.', sparkline: <SparklineBars />, metric: '12M+ daily' },
    { company: 'European Insurer', tag: 'Insurance', tagColor: 'text-purple-700 bg-purple-50 border border-purple-200/60', description: 'AI agents handle initial claims assessment that adjusters previously reviewed manually. Complex cases route to specialists — with full context.', sparkline: <SparklineDown />, metric: '40% less time' },
    { company: 'Global Retailer', tag: 'Retail', tagColor: 'text-amber-700 bg-amber-50 border border-amber-200/60', description: 'Orchestrated order fulfillment across 200+ warehouses — replacing manual coordination of inventory, shipping, and customer communication.', sparkline: <SparklineFlat />, metric: '99.7% accuracy' },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">Trusted by industry leaders</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-12">
            <span className="font-mono">500+</span> enterprises orchestrate with Camunda
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <LogoMarquee />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((story, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="flex flex-col bg-cool-surface border border-cool-border/60 rounded-2xl p-6 h-full hover:border-slate-light hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
                <span className={`inline-block text-[11px] font-mono font-medium px-2.5 py-1 rounded-full mb-4 self-start ${story.tagColor}`}>
                  {story.tag}
                </span>
                <h3 className="font-display font-bold text-light mb-3">{story.company}</h3>
                <p className="text-sm text-slate leading-relaxed mb-5">{story.description}</p>
                <div className="flex items-center gap-2.5 mt-auto">
                  {story.sparkline}
                  <p className="font-mono text-sm font-bold text-accent leading-tight">{story.metric}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 7: Why Camunda ───────────────────────────── */
function WhyCamunda() {
  const [activeBeat, setActiveBeat] = useState(0)

  const beats = [
    {
      icon: Icons.shield,
      headline: 'Agents you can trust',
      lead: "AI agents are powerful. But power without governance is risk. Camunda lets you build agents you can actually trust in production.",
      sections: [
        { title: 'Design', text: 'Build deterministic guardrails directly into agent behavior. Define where an agent acts autonomously and where it must escalate. Example: an agent auto-approves claims under $5K but routes anything above to a human reviewer with full context — enforced by the process, not the agent\'s judgment.' },
        { title: 'Test & Verify', text: 'Validate agent behavior before production. Simulate execution, test edge cases, verify guardrails hold. Ship with confidence that what you designed is what actually runs.' },
        { title: 'Observe & Audit', text: "Full visibility into every decision, every path, every exception. Complete audit trail. Real-time monitoring. When a regulator asks 'why did this happen,' you have the answer." },
      ],
    },
    {
      icon: Icons.engine,
      headline: 'The most powerful orchestration engine in the market',
      lead: "Safe isn't enough if it can't handle the hard stuff. Camunda runs the world's most advanced orchestration engine — built for the complexity real enterprises face.",
      sections: [
        { title: 'Deterministic and dynamic in one engine', text: 'Some work follows strict rules. Some needs AI to decide the next step. Most real processes need both. Camunda handles the full range in a single workflow.' },
        { title: 'Durable multi-agent coordination', text: "Orchestrator agents kick off work to other agents and wait — for minutes, hours, or days — without losing state. Support both handoff and supervisor patterns natively. Correlate messages between agents that don't know about each other. Wait for updates from multiple agents simultaneously with timeout, retry, and human escalation. No other framework can do this." },
        { title: 'Evolve without disruption', text: 'Deploy new versions while current ones are running. Migrate in-flight work at runtime. Run multiple versions side by side and compare results. Upgrade continuously without ever stopping.' },
        { title: 'Scale without compromise', text: 'Horizontally scalable, low latency, event-driven. Handles millions of concurrent process instances without degradation.' },
      ],
    },
    {
      icon: Icons.people,
      headline: 'Business-led, IT-enabled',
      lead: "Your operations teams don\u2019t need to wait months for automation. Business teams model processes visually, compose from pre-built building blocks, and use the AI copilot to move fast. IT provides the connectors, guardrails, and governance \u2014 already on the same platform.",
      sections: [
        { title: 'Business teams move fast', text: 'Model a process visually. Compose it from building blocks. Use AI to accelerate. Go from idea to working automation in days \u2014 without writing a ticket.' },
        { title: 'IT stays in control', text: 'Governance, security, and compliance are built into the platform \u2014 not bolted on after. IT defines the guardrails. Business teams work within them. Every change is versioned, auditable, and reversible.' },
        { title: 'They meet in the middle', text: 'A business analyst models the process. IT packages the connectors. The AI copilot helps both sides work faster. From prototype to production on the same platform \u2014 no rebuild, no handoff, no lost time.' },
      ],
    },
  ]

  return (
    <section className="py-32 bg-cool-surface">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">Why Camunda</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-14">Built different</h2>
        </Reveal>

        <Reveal delay={2}>
          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {beats.map((beat, i) => (
              <button
                key={i}
                onClick={() => setActiveBeat(i)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer flex-1 ${
                  activeBeat === i
                    ? 'bg-accent/8 border border-accent/25 text-accent shadow-[0_1px_4px_rgba(252,93,13,0.08)]'
                    : 'bg-white border border-cool-border/60 text-slate hover:border-slate-light hover:text-light'
                }`}
              >
                <span className={activeBeat === i ? 'text-accent' : 'text-slate-light'}>{beat.icon}</span>
                <span className="font-display font-bold text-sm">{beat.headline.length > 30 ? beat.headline.slice(0, 28) + '…' : beat.headline}</span>
              </button>
            ))}
          </div>

          {/* Active beat content — crossfade */}
          <div className="bg-white border border-cool-border/60 rounded-2xl p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            {beats.map((beat, i) => (
              <div key={i} className={`tab-panel ${activeBeat === i ? 'active' : 'hidden'}`}>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-4 text-light">{beat.headline}</h3>
                <p className="text-slate text-lg leading-relaxed mb-8 max-w-2xl">{beat.lead}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {beat.sections.map((sec, j) => (
                    <div key={j} className="bg-cool-surface border border-cool-border/40 rounded-xl p-5">
                      <h4 className="font-display font-bold text-light mb-2">{sec.title}</h4>
                      <p className="text-sm text-slate leading-relaxed">{sec.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 8: The Orchestration Company ───────────────────────────── */
function OrchestrationCompany() {
  const cards = [
    {
      analyst: 'Gartner',
      title: 'Visionary — BOAT Magic Quadrant, 2025',
      quote: '\u201CCamunda\u2019s strongest capability is Orchestration.\u201D',
      points: [
        'Top 3 in completeness of vision among all 20 vendors in the inaugural Magic Quadrant for Business Orchestration and Automation Technologies',
        'Recognized for native multi-agent orchestration: \u201Cnatively supports and orchestrates multi-agent systems, embedding AI agents directly within BPMN process models\u201D',
        'Zeebe workflow engine noted for \u201Cspeed, scalability, and resilience\u201D',
      ],
    },
    {
      analyst: 'Forrester',
      title: 'Best-in-Class Orchestration — DPA Wave, Q3 2025',
      quote: '\u201CUnique approach to agentic orchestration.\u201D',
      points: [
        'Perfect 5/5 scores in Orchestration and Process Standards',
        'Zeebe \u201Cearns top marks for orchestration with a distributed and stateful approach\u201D',
        'Above-average customer feedback praising effective orchestration',
        '\u201CCamunda best suits enterprises with professional developers who want to automate complex processes and require best-in-class orchestration\u201D',
      ],
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle warm-tinted background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf8f5] via-[#fef6f0] to-[#fdf8f5]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(252,93,13,0.04),transparent)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">The orchestration company</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] mb-12 max-w-3xl">
            The next era of enterprise automation runs on orchestration.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="bg-white border border-cool-border/60 rounded-2xl p-8 h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                {/* Analyst name */}
                <p className="font-display text-lg font-extrabold text-light tracking-tight mb-1">{card.analyst}</p>
                {/* Report title */}
                <p className="font-mono text-xs text-slate-light mb-6">{card.title}</p>

                {/* Lead quote — visual focal point */}
                <blockquote className="font-display text-xl sm:text-2xl font-bold text-light leading-snug mb-6 relative pl-4 border-l-[3px] border-accent/30">
                  {card.quote}
                </blockquote>

                {/* Supporting points */}
                <ul className="space-y-3">
                  {card.points.map((pt, j) => (
                    <li key={j} className="flex gap-2.5 text-[13px] text-slate leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Legal disclaimer */}
        <Reveal delay={3}>
          <p className="text-[10px] text-slate-light/60 mt-8 max-w-3xl leading-relaxed">
            Gartner does not endorse any vendor, product or service depicted in its research publications. Gartner research publications consist of the opinions of Gartner's research organization and should not be construed as statements of fact.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 9: Industries — Larger Tiles ───────────────────────────── */
function Industries() {
  const industries = [
    { icon: Icons.finance, name: 'Financial Services', hook: 'Orchestrate payments, onboarding, and compliance — end to end.', examples: ['Trade settlement', 'KYC', 'Account opening'] },
    { icon: Icons.insurance, name: 'Insurance', hook: 'Automate claims, underwriting, and policy management with AI-powered orchestration.', examples: ['Claims adjudication', 'Underwriting', 'Policy servicing'] },
    { icon: Icons.healthcare, name: 'Healthcare', hook: 'Coordinate patient journeys, medication delivery, and care management at scale.', examples: ['Patient onboarding', 'Medication management', 'Prior authorization'] },
    { icon: Icons.manufacturing, name: 'Manufacturing & Supply Chain', hook: 'Orchestrate orders, logistics, and production across your entire value chain.', examples: ['Order fulfillment', 'Shipment tracking', 'Production scheduling'] },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs font-medium text-accent uppercase tracking-wider mb-4">Industries</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-14">
            Orchestration for your industry
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <Reveal key={i} delay={i + 1}>
              <a
                href="#"
                className="group block bg-cool-surface border border-cool-border/60 rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-slate-light hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-cool-border/40 flex items-center justify-center text-slate-light group-hover:text-accent group-hover:border-accent/20 transition-all duration-300 mb-5">
                  {ind.icon}
                </div>
                <h3 className="font-display font-bold text-light text-lg mb-2">{ind.name}</h3>
                <p className="text-sm text-slate leading-relaxed mb-5">{ind.hook}</p>

                {/* Always-visible example tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-cool-border/40">
                  {ind.examples.map((ex, j) => (
                    <span key={j} className="font-mono text-[11px] px-2 py-1 bg-accent/6 text-accent/80 rounded-md">{ex}</span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* See all industries link */}
        <Reveal delay={5}>
          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 font-display font-semibold text-accent hover:text-accent-hover transition-colors duration-200">
              See all industries
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 9: Get Started ───────────────────────────── */
function GetStarted() {
  const ctas = [
    { label: 'Try Free', subtext: 'Start orchestrating in minutes', primary: true },
    { label: 'Request a demo', subtext: 'See Camunda in action', primary: false },
    { label: 'CamundaCon 2026', subtext: '3,000+ orchestration practitioners', primary: false },
    { label: 'Explore the docs', subtext: 'APIs, SDKs, and quickstart guides', primary: false },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cool-surface" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c7cdd8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
        {[
          'M-100,200 C200,180 400,280 720,240 S1100,180 1540,220',
          'M-100,350 C300,320 500,400 720,370 S1000,310 1540,350',
          'M-100,500 C250,480 450,540 720,510 S1050,470 1540,500',
        ].map((d, i) => (
          <path key={i} d={d} stroke="#FC5D0D" strokeWidth="1" fill="none" strokeDasharray="10 6"
            style={{ animation: `flow-line 10s linear infinite`, animationDelay: `${i * 2}s` }} />
        ))}
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] mb-14">
            Ready to orchestrate?
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {ctas.map((cta, i) => (
            <Reveal key={i} delay={i + 1}>
              <a
                href="#"
                className={`block rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                  cta.primary
                    ? 'bg-accent hover:bg-accent-hover text-white shadow-[0_2px_8px_rgba(252,93,13,0.25)] hover:shadow-[0_4px_20px_rgba(252,93,13,0.35)]'
                    : 'bg-white border border-cool-border/60 hover:border-slate-light text-light hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
                }`}
              >
                <p className={`font-display text-xl font-extrabold mb-1 ${cta.primary ? 'text-white' : 'text-light'}`}>{cta.label}</p>
                <p className={`text-sm font-mono ${cta.primary ? 'text-white/70' : 'text-slate'}`}>{cta.subtext}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Footer ───────────────────────────── */
function Footer() {
  return (
    <footer className="bg-white border-t border-cool-border/60 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-display text-lg font-extrabold text-light">Camunda</span>
            <span className="text-sm text-slate">&copy; 2026 Camunda. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate hover:text-light transition-colors duration-200">Privacy</a>
            <a href="#" className="text-sm text-slate hover:text-light transition-colors duration-200">Terms</a>
            <a href="#" className="text-sm text-slate hover:text-light transition-colors duration-200">Contact</a>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="text-slate-light hover:text-light transition-colors duration-200">{Icons.github}</a>
              <a href="#" className="text-slate-light hover:text-light transition-colors duration-200">{Icons.linkedin}</a>
              <a href="#" className="text-slate-light hover:text-light transition-colors duration-200">{Icons.twitter}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ───────────────────────────── App ───────────────────────────── */
export default function App() {
  return (
    <div className="bg-white text-light font-body min-h-screen">
      <Navbar />
      <Hero />
      <OutcomesBar />
      <WhyNow />
      <Spectrum />
      <AgenticStack />
      <AudiencePaths />
      <SocialProof />
      <WhyCamunda />
      <OrchestrationCompany />
      <Industries />
      <GetStarted />
      <Footer />
    </div>
  )
}
