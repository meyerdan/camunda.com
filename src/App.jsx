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

/* Small helper — apply reveal to arbitrary elements */
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-base/90 backdrop-blur-xl border-b border-dark-border/50' : ''}`}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="font-display text-xl font-bold tracking-tight text-light">Camunda</a>
          <div className="hidden md:flex items-center gap-7">
            {['Platform', 'Solutions', 'Developers', 'Customers', 'Pricing'].map(item => (
              <a key={item} href="#" className="text-sm text-light-dim hover:text-light transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
        <a href="#" className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-medium bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors duration-200">
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
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-dark-base to-dark-surface" />

      {/* SVG flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FC5D0D" stopOpacity="0" />
            <stop offset="50%" stopColor="#FC5D0D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FC5D0D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Flowing curves */}
        {[
          { d: 'M-100,300 C200,280 400,400 720,350 S1100,250 1540,320', delay: '0s', grad: 'url(#line-grad)' },
          { d: 'M-100,450 C300,420 500,520 720,480 S1000,400 1540,460', delay: '2s', grad: 'url(#line-grad)' },
          { d: 'M-100,600 C250,580 450,650 720,610 S1050,560 1540,600', delay: '4s', grad: 'url(#line-grad-2)' },
          { d: 'M-100,200 C350,220 550,150 800,200 S1150,280 1540,220', delay: '1s', grad: 'url(#line-grad-2)' },
          { d: 'M-100,750 C200,720 500,780 750,740 S1100,700 1540,750', delay: '3s', grad: 'url(#line-grad)' },
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

        {/* Connecting nodes */}
        {[
          { cx: 200, cy: 290 }, { cx: 500, cy: 410 }, { cx: 720, cy: 350 },
          { cx: 900, cy: 280 }, { cx: 1100, cy: 460 }, { cx: 350, cy: 580 },
          { cx: 600, cy: 200 }, { cx: 1000, cy: 600 }, { cx: 800, cy: 740 },
          { cx: 300, cy: 730 }, { cx: 1150, cy: 220 }, { cx: 450, cy: 150 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="3" fill={i % 3 === 0 ? '#FC5D0D' : '#3b82f6'} opacity="0.5"
              style={{ animation: `pulse-glow 3s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }} />
            <circle cx={node.cx} cy={node.cy} r="8" fill="none" stroke={i % 3 === 0 ? '#FC5D0D' : '#3b82f6'} strokeWidth="0.5" opacity="0.25"
              style={{ animation: `pulse-glow 3s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }} />
          </g>
        ))}
      </svg>

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-accent/[0.06] rounded-full blur-3xl" />
      <div className="absolute top-2/3 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-[#3b82f6]/[0.03] rounded-full blur-3xl" />
    </div>
  )
}

function Hero() {
  const ref = useReveal()
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <HeroBackground />
      <div ref={ref} className="reveal relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-7">
          The enterprise platform<br className="hidden sm:block" /> for{' '}
          <span className="bg-gradient-to-r from-accent to-[#ff8a4c] bg-clip-text text-transparent">agentic orchestration</span>
        </h1>
        <p className="text-lg sm:text-xl text-light-dim max-w-2xl mx-auto mb-10 leading-relaxed">
          Orchestrate AI agents, processes, and people on one platform.
          <br className="hidden sm:block" />
          Turn isolated automation into coordinated enterprise intelligence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="px-9 py-4 text-base font-semibold bg-accent hover:bg-accent-hover text-white rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5">
            Try Free
          </a>
          <a href="#" className="px-9 py-4 text-base font-medium border border-dark-border text-light hover:border-light-dim/50 hover:bg-dark-surface rounded-xl transition-all duration-300 hover:-translate-y-0.5">
            See how it works
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-5 h-8 border border-light-dim/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-light-dim/60 rounded-full" style={{ animation: 'float-slow 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 2: Why Now ───────────────────────────── */
function CoordinationGraphic() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {/* Without orchestration */}
      <div className="relative bg-dark-surface/50 border border-dark-border/50 rounded-2xl p-8 overflow-hidden">
        <p className="text-sm font-medium text-red-400/80 mb-6 uppercase tracking-wider">Without orchestration</p>
        <svg viewBox="0 0 320 200" className="w-full h-auto" fill="none">
          {/* Scattered disconnected nodes */}
          {[
            { x: 60, y: 40, delay: 0 }, { x: 180, y: 30, delay: 0.3 }, { x: 260, y: 60, delay: 0.6 },
            { x: 40, y: 120, delay: 0.2 }, { x: 150, y: 100, delay: 0.5 }, { x: 240, y: 130, delay: 0.4 },
            { x: 100, y: 170, delay: 0.1 }, { x: 200, y: 170, delay: 0.7 },
          ].map((n, i) => (
            <g key={i} style={{ animation: `erratic-${(i % 2) + 1} ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${n.delay}s` }}>
              <circle cx={n.x} cy={n.y} r="8" fill="#ef4444" opacity="0.15" />
              <circle cx={n.x} cy={n.y} r="4" fill="#ef4444" opacity="0.5" />
            </g>
          ))}
          {/* Broken connection lines */}
          <line x1="64" y1="42" x2="120" y2="70" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
          <line x1="155" y1="102" x2="240" y2="130" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
          <line x1="43" y1="122" x2="100" y2="168" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
          {/* Conflict indicators */}
          <text x="120" y="75" fill="#ef4444" fontSize="14" opacity="0.5">✕</text>
          <text x="190" y="85" fill="#ef4444" fontSize="14" opacity="0.5">✕</text>
          <text x="80" y="145" fill="#ef4444" fontSize="14" opacity="0.5">?</text>
        </svg>
      </div>

      {/* With orchestration */}
      <div className="relative bg-dark-surface/50 border border-accent/20 rounded-2xl p-8 overflow-hidden">
        <div className="absolute inset-0 bg-accent/[0.02]" />
        <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wider relative z-10">With orchestration</p>
        <svg viewBox="0 0 320 200" className="w-full h-auto relative z-10" fill="none">
          {/* Orchestrated flow lines */}
          <path d="M40,100 C80,60 120,60 160,100 S240,140 280,100" stroke="#3b82f6" strokeWidth="2" opacity="0.5"
            strokeDasharray="8 4" style={{ animation: 'coordinated-flow 2s linear infinite' }} />
          <path d="M40,60 L100,60 L160,40 L220,60 L280,60" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"
            strokeDasharray="8 4" style={{ animation: 'coordinated-flow 3s linear infinite' }} />
          <path d="M40,150 L100,140 L160,160 L220,140 L280,150" stroke="#10b981" strokeWidth="1.5" opacity="0.4"
            strokeDasharray="8 4" style={{ animation: 'coordinated-flow 2.5s linear infinite' }} />

          {/* Connected nodes */}
          {[
            { x: 40, y: 100 }, { x: 100, y: 60 }, { x: 160, y: 100 },
            { x: 220, y: 60 }, { x: 280, y: 100 },
            { x: 100, y: 140 }, { x: 160, y: 40 }, { x: 220, y: 140 },
          ].map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="10" fill="#3b82f6" opacity="0.15" />
              <circle cx={n.x} cy={n.y} r="5" fill="#3b82f6" opacity="0.7" />
            </g>
          ))}
          {/* Governance checkpoints */}
          <rect x="152" y="92" width="16" height="16" rx="3" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M156 100 L159 103 L164 97" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
        </svg>
      </div>
    </div>
  )
}

function WhyNow() {
  return (
    <section className="py-32 bg-dark-base">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Why now</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-8">The coordination gap</h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="bg-gradient-to-r from-accent/10 to-transparent border-l-2 border-accent pl-6 py-4 mb-10 max-w-3xl">
            <p className="text-xl sm:text-2xl font-display font-semibold leading-snug">
              By 2028, 33% of enterprise applications will include agentic AI — up from less than 1% today.
            </p>
          </div>
        </Reveal>
        <Reveal delay={3}>
          <div className="max-w-3xl space-y-5 text-light-dim leading-relaxed">
            <p>
              Most enterprises have no plan for how those agents work together — or how to build agents they can actually trust.
            </p>
            <p>
              Agents operate in silos — making conflicting decisions, duplicating work, with no audit trail and no way to handle exceptions. The result isn't transformation. It's expensive chaos.
            </p>
            <p>
              The enterprises pulling ahead are doing two things differently. They're building agents on an orchestration foundation — where every agent is durable, governed, and stateful by design. And they're coordinating those agents with processes and people through a single platform that compounds value over time.
            </p>
            <p className="text-light font-medium">
              That foundation is agentic orchestration.
            </p>
          </div>
        </Reveal>
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
    { key: 'left', label: 'Fully automated', color: 'from-accent/20 to-accent/5', dotColor: 'bg-accent' },
    { key: 'mid', label: 'Hybrid', color: 'from-purple-500/20 to-purple-500/5', dotColor: 'bg-purple-400' },
    { key: 'right', label: 'Fully adaptive', color: 'from-mint/20 to-mint/5', dotColor: 'bg-mint' },
  ]

  return (
    <section className="py-32 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">What Camunda does</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            From fully automated to fully adaptive
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-light-dim text-lg max-w-3xl mb-16 leading-relaxed">
            Camunda handles the full spectrum of enterprise work — from straight-through processing to complex agentic workflows — on one platform.
          </p>
        </Reveal>

        {/* Spectrum bar */}
        <Reveal delay={2}>
          <div className="relative mb-4">
            <div className="flex justify-between mb-3 text-sm">
              <span className="text-accent font-medium font-display">Straight-through processing</span>
              <span className="text-mint font-medium font-display">Agentic workflows</span>
            </div>
            <div className="relative h-2 rounded-full overflow-hidden"
              style={{ background: 'linear-gradient(90deg, #FC5D0D 0%, #8b5cf6 50%, #10b981 100%)' }}>
              <div className="absolute inset-0 bg-dark-base/10" />
            </div>
            <div className="flex justify-between mt-2 text-xs text-light-dim/50">
              <span className="max-w-[280px]">Automate end-to-end processes that run millions of times with zero drift.</span>
              <span className="max-w-[300px] text-right">Orchestrate AI agents, people, and systems through workflows that adapt.</span>
            </div>
          </div>
        </Reveal>

        {/* Use case cards in three columns */}
        <Reveal delay={3}>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {zones.map((zone) => (
              <div key={zone.key} className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${zone.dotColor}`} />
                  <span className="text-xs font-medium text-light-dim uppercase tracking-wider">{zone.label}</span>
                </div>
                {useCases.filter(uc => uc.zone === zone.key).map((uc, j) => {
                  const globalIdx = useCases.indexOf(uc)
                  const isHovered = hoveredUseCase === globalIdx
                  return (
                    <div
                      key={j}
                      className={`relative bg-gradient-to-br ${zone.color} border border-dark-border/30 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        isHovered ? 'border-accent/40 -translate-y-0.5 shadow-lg shadow-accent/5' : 'hover:border-dark-border/60'
                      }`}
                      onMouseEnter={() => setHoveredUseCase(globalIdx)}
                      onMouseLeave={() => setHoveredUseCase(null)}
                    >
                      <p className={`text-sm font-medium transition-colors duration-200 ${isHovered ? 'text-light' : 'text-light/80'}`}>
                        {uc.label}
                      </p>
                      <div className={`transition-all duration-300 overflow-hidden ${isHovered ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs text-light-dim leading-relaxed">{uc.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p className="text-center text-light-dim text-lg max-w-2xl mx-auto mt-14">
            Most enterprises need both. <span className="text-light font-medium">One platform handles the full range</span> — with governance across everything.
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
    { icon: Icons.developer, label: 'Developer', hook: 'Start building', description: 'SDKs, quickstart guides, APIs, and a free trial to get orchestrating in minutes.', cta: 'Start building' },
    { icon: Icons.business, label: 'Business / LOB Leader', hook: 'See solutions for your domain', description: 'Discover how orchestration transforms operations in your industry and function.', cta: 'See solutions' },
    { icon: Icons.customer, label: 'Existing Customer', hook: "What's new", description: "Agentic orchestration capabilities, migration paths, and what's coming next.", cta: "See what's new" },
  ]

  return (
    <section className="py-32 bg-dark-base">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Start your journey</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-14">Built for how you work</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {paths.map((path, i) => (
            <Reveal key={i} delay={i + 1}>
              <a href="#" className="group block bg-dark-surface border border-dark-border/50 rounded-2xl p-6 h-full hover:border-accent/30 hover:bg-dark-elevated/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                <div className="text-light-dim group-hover:text-accent transition-colors duration-300 mb-5">
                  {path.icon}
                </div>
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">{path.hook}</p>
                <h3 className="font-display text-lg font-semibold mb-3 text-light">{path.label}</h3>
                <p className="text-sm text-light-dim leading-relaxed mb-5">{path.description}</p>
                <span className="text-sm font-medium text-accent group-hover:text-accent-hover transition-colors duration-200 inline-flex items-center gap-1.5">
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
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-surface to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-surface to-transparent z-10" />

      <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
        {doubled.map((name, i) => (
          <span key={i} className="text-lg font-display font-semibold text-light-dim/50 tracking-wide select-none flex-shrink-0">
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

function SocialProof() {
  const stories = [
    { company: 'Wellpointe', tag: 'Healthcare', tagColor: 'text-emerald-700 bg-emerald-100', description: 'Orchestrates specialty medication delivery — coordinating insurance verification, prior authorization, and temperature-controlled logistics for patients with complex chronic conditions.', metric: '60% faster order processing' },
    { company: 'Global Investment Bank', tag: 'Financial Services', tagColor: 'text-blue-700 bg-blue-100', description: 'Automates end-to-end trade settlement across multiple clearing systems with full regulatory audit trail.', metric: '12M+ transactions orchestrated daily' },
    { company: 'European Insurer', tag: 'Insurance', tagColor: 'text-purple-700 bg-purple-100', description: 'AI agents handle initial claims assessment while orchestration ensures complex claims route to specialized adjusters with complete context.', metric: '40% reduction in claims processing time' },
    { company: 'Global Retailer', tag: 'Retail', tagColor: 'text-amber-700 bg-amber-100', description: 'Orchestrates order fulfillment across 200+ warehouses, coordinating inventory, shipping, and customer communication in real time.', metric: '99.7% order accuracy' },
  ]

  return (
    <section className="py-32 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Trusted by industry leaders</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-12">
            500+ enterprises orchestrate with Camunda
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <LogoMarquee />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((story, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="bg-dark-base/50 border border-dark-border/50 rounded-2xl p-6 h-full hover:border-dark-border transition-all duration-300 hover:-translate-y-1">
                <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-4 ${story.tagColor}`}>
                  {story.tag}
                </span>
                <h3 className="font-display font-semibold text-light mb-3">{story.company}</h3>
                <p className="text-sm text-light-dim leading-relaxed mb-5">{story.description}</p>
                <p className="font-display text-xl font-bold text-accent">{story.metric}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Section 6: Agentic Enterprise Stack ───────────────────────────── */
function AgenticStack() {
  const [activeLayer, setActiveLayer] = useState(1) // 0=top, 1=middle(camunda), 2=bottom

  const layers = [
    {
      label: 'Agentic Engagement',
      subtitle: 'Where employees and customers interact',
      details: 'Conversational interfaces across every channel — Teams, Slack, web, mobile. Understands intent, takes action, maintains context. One unified experience for employees and customers.',
      style: 'from-light/5 to-transparent border-light/10',
    },
    {
      label: 'Agentic Orchestration & Automation',
      subtitle: 'Camunda',
      details: 'The coordination engine. Orchestrate AI agents, automate processes, govern decisions, manage business objects. Build, compose, and deploy — from straight-through processing to fully adaptive agentic workflows.',
      style: 'from-accent/15 to-accent/5 border-accent/30',
      isCamunda: true,
    },
    {
      label: 'Core Systems & Data',
      subtitle: 'Your existing technology investments',
      details: 'ERPs, CRMs, databases, legacy systems, AI models, third-party agents. Camunda connects to them, orchestrates across them, and maintains a unified view of business state through the Business Object Graph.',
      style: 'from-dark-elevated to-dark-surface border-dark-border/80',
    },
  ]

  return (
    <section className="py-32 bg-dark-base">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">The Agentic Enterprise Stack</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            The orchestration core your enterprise is missing
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-lg text-light-dim max-w-3xl mb-14 leading-relaxed">
            Every enterprise already has engagement channels and core systems. What's missing is the intelligent orchestration layer that connects them.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="space-y-3">
            {layers.map((layer, i) => {
              const isActive = activeLayer === i
              return (
                <button
                  key={i}
                  onClick={() => setActiveLayer(i)}
                  className={`w-full text-left rounded-2xl border bg-gradient-to-r transition-all duration-500 overflow-hidden cursor-pointer ${layer.style} ${
                    layer.isCamunda ? 'shadow-[0_0_30px_rgba(252,93,13,0.08)]' : ''
                  } ${layer.isCamunda && !isActive ? 'animate-[layer-pulse_4s_ease-in-out_infinite]' : ''}`}
                  style={{ minHeight: isActive ? '180px' : '72px' }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`font-display text-lg font-semibold ${layer.isCamunda ? 'text-accent' : 'text-light'}`}>
                          {layer.label}
                        </h3>
                        <p className={`text-sm mt-0.5 ${layer.isCamunda ? 'text-accent/70 font-medium' : 'text-light-dim'}`}>
                          {layer.subtitle}
                        </p>
                      </div>
                      <svg
                        className={`w-5 h-5 text-light-dim transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20" fill="none"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-light-dim leading-relaxed max-w-2xl">{layer.details}</p>
                    </div>
                  </div>

                  {/* Animated connection line between layers */}
                  {i < 2 && (
                    <div className="flex justify-center -mb-3 relative z-10">
                      <div className="w-px h-6 bg-gradient-to-b from-accent/20 to-transparent" />
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p className="text-light-dim text-center mt-12 max-w-2xl mx-auto leading-relaxed">
            Because every process execution generates data, the platform learns over time — optimizing routing, surfacing bottlenecks, improving agent performance. <span className="text-light font-medium">Your orchestration gets smarter the more you use it.</span>
          </p>
        </Reveal>
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
        { title: 'Durable and long-running', text: "Processes that run for minutes or months, across system outages and version changes. Orchestration that doesn't lose state, doesn't drop work, doesn't break when things take time." },
        { title: 'Evolve without disruption', text: 'Deploy new versions while current ones are running. Migrate in-flight work at runtime. Run multiple versions side by side and compare results. Upgrade continuously without ever stopping.' },
        { title: 'Scale without compromise', text: 'Horizontally scalable, low latency, event-driven. Handles millions of concurrent process instances without degradation.' },
      ],
    },
    {
      icon: Icons.people,
      headline: 'Business-led, IT-enabled',
      lead: "The business doesn't want to wait for IT. IT doesn't want to lose governance. Camunda gives both sides what they need.",
      sections: [
        { title: 'Business teams move fast', text: 'LOB leaders and business users model processes, compose workflows from pre-built building blocks, and deploy solutions using visual tools and an AI copilot. No code required to get started.' },
        { title: 'IT stays in control', text: 'Developers build the building blocks, define guardrails, set governance policies. Everything the business creates runs within the architecture IT designed. Full visibility, full compliance.' },
        { title: 'They meet in the middle', text: 'Business teams prove value quickly. When something needs to scale or integrate deeply, IT is already there — same platform, same governance. No handoff, no rebuild.' },
      ],
    },
  ]

  return (
    <section className="py-32 bg-dark-surface">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Why Camunda</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-14">Built different</h2>
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
                    ? 'bg-accent/10 border border-accent/30 text-accent'
                    : 'bg-dark-base/50 border border-dark-border/50 text-light-dim hover:border-dark-border hover:text-light'
                }`}
              >
                <span className={activeBeat === i ? 'text-accent' : 'text-light-dim'}>{beat.icon}</span>
                <span className="font-display font-semibold text-sm">{beat.headline.length > 30 ? beat.headline.slice(0, 28) + '…' : beat.headline}</span>
              </button>
            ))}
          </div>

          {/* Active beat content */}
          <div className="bg-dark-base/50 border border-dark-border/50 rounded-2xl p-8 sm:p-10 transition-all duration-300">
            {beats.map((beat, i) => (
              <div key={i} className={`transition-all duration-400 ${activeBeat === i ? 'block' : 'hidden'}`}>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-light">{beat.headline}</h3>
                <p className="text-light-dim text-lg leading-relaxed mb-8 max-w-2xl">{beat.lead}</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {beat.sections.map((sec, j) => (
                    <div key={j} className="bg-dark-surface/50 border border-dark-border/30 rounded-xl p-5">
                      <h4 className="font-display font-semibold text-light mb-2">{sec.title}</h4>
                      <p className="text-sm text-light-dim leading-relaxed">{sec.text}</p>
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

/* ───────────────────────────── Section 8: Industries ───────────────────────────── */
function Industries() {
  const [hoveredIndustry, setHoveredIndustry] = useState(null)

  const industries = [
    { icon: Icons.finance, name: 'Financial Services', hook: 'Orchestrate payments, onboarding, and compliance — end to end.', examples: ['Trade settlement', 'KYC', 'Account opening'] },
    { icon: Icons.insurance, name: 'Insurance', hook: 'Automate claims, underwriting, and policy management with AI-powered orchestration.', examples: ['Claims adjudication', 'Underwriting', 'Policy servicing'] },
    { icon: Icons.healthcare, name: 'Healthcare', hook: 'Coordinate patient journeys, medication delivery, and care management at scale.', examples: ['Patient onboarding', 'Medication management', 'Prior authorization'] },
    { icon: Icons.manufacturing, name: 'Manufacturing & Supply Chain', hook: 'Orchestrate orders, logistics, and production across your entire value chain.', examples: ['Order fulfillment', 'Shipment tracking', 'Production scheduling'] },
    { icon: Icons.arrow, name: 'See all industries', hook: 'Explore how enterprises across every sector use Camunda to orchestrate their operations.', examples: [], isLink: true },
  ]

  return (
    <section className="py-32 bg-dark-base">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Industries</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-14">
            Orchestration for your industry
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((ind, i) => (
            <Reveal key={i} delay={i + 1}>
              <a
                href="#"
                className={`group block rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 ${
                  ind.isLink
                    ? 'border-2 border-dashed border-dark-border/50 hover:border-accent/30 bg-transparent'
                    : 'bg-dark-surface border border-dark-border/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5'
                }`}
                onMouseEnter={() => setHoveredIndustry(i)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className="text-light-dim group-hover:text-accent transition-colors duration-300 mb-4">
                  {ind.icon}
                </div>
                <h3 className="font-display font-semibold text-light mb-2">{ind.name}</h3>
                <p className="text-sm text-light-dim leading-relaxed mb-4">{ind.hook}</p>

                {/* Reveal examples on hover */}
                {ind.examples.length > 0 && (
                  <div className={`transition-all duration-300 overflow-hidden ${hoveredIndustry === i ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-border/30">
                      {ind.examples.map((ex, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md">{ex}</span>
                      ))}
                    </div>
                  </div>
                )}

                {ind.isLink && (
                  <span className="text-sm font-medium text-accent inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
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
      {/* Background echoing hero */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-dark-base" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
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
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-14">
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
                    ? 'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30'
                    : 'bg-dark-elevated/80 border border-dark-border/50 hover:border-accent/30 text-light hover:shadow-lg hover:shadow-accent/5'
                }`}
              >
                <p className={`font-display text-xl font-bold mb-1 ${cta.primary ? 'text-white' : 'text-light'}`}>{cta.label}</p>
                <p className={`text-sm ${cta.primary ? 'text-white/70' : 'text-light-dim'}`}>{cta.subtext}</p>
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
    <footer className="bg-dark-base border-t border-dark-border/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-display text-lg font-bold text-light">Camunda</span>
            <span className="text-sm text-light-dim">&copy; 2026 Camunda. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-light-dim hover:text-light transition-colors duration-200">Privacy</a>
            <a href="#" className="text-sm text-light-dim hover:text-light transition-colors duration-200">Terms</a>
            <a href="#" className="text-sm text-light-dim hover:text-light transition-colors duration-200">Contact</a>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="text-light-dim hover:text-light transition-colors duration-200">{Icons.github}</a>
              <a href="#" className="text-light-dim hover:text-light transition-colors duration-200">{Icons.linkedin}</a>
              <a href="#" className="text-light-dim hover:text-light transition-colors duration-200">{Icons.twitter}</a>
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
    <div className="bg-dark-base text-light font-body min-h-screen">
      <Navbar />
      <Hero />
      <WhyNow />
      <Spectrum />
      <AgenticStack />
      <AudiencePaths />
      <SocialProof />
      <WhyCamunda />
      <Industries />
      <GetStarted />
      <Footer />
    </div>
  )
}
