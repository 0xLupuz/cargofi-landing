'use client'

import { useState, useEffect, useRef } from 'react'

const G  = '#3ab690'
const G2 = '#1a9d75'
const G3 = 'rgba(58,182,144,0.1)'
const G4 = 'rgba(58,182,144,0.22)'

/* ── Solana logo SVG ────────────────────────────────── */
function SolanaLogo({ size = 20 }: { size?: number }) {
  const id = `sg${size}`
  return (
    <svg width={size * 1.3} height={size} viewBox="0 0 397 312" fill="none">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9945FF"/>
          <stop offset="100%" stopColor="#14F195"/>
        </linearGradient>
      </defs>
      <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill={`url(#${id})`}/>
      <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1L333.1 73.8c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill={`url(#${id})`}/>
      <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill={`url(#${id})`}/>
    </svg>
  )
}

/* ── Corridor Map — full route ──────────────────────── */
function CorridorMap() {
  // ViewBox: ~850x520, covers MX + continental US to east coast
  // Approximate key city coords (relative, not geodetically precise)
  const cities = {
    slp:       { x: 230, y: 400, label: 'San Luis Potosí', main: true  },
    mty:       { x: 255, y: 355, label: 'Monterrey'                    },
    nlaredo:   { x: 265, y: 310, label: 'Nuevo Laredo',   border: true },
    laredo:    { x: 270, y: 300, label: 'Laredo TX',      border: true, main: true },
    satx:      { x: 280, y: 272, label: 'San Antonio'                  },
    dallas:    { x: 298, y: 252, label: 'Dallas'                       },
    kc:        { x: 350, y: 215, label: 'Kansas City'                  },
    chicago:   { x: 430, y: 185, label: 'Chicago'                      },
    detroit:   { x: 470, y: 175, label: 'Detroit'                      },
    cleveland: { x: 500, y: 190, label: 'Cleveland'                    },
    nashville: { x: 430, y: 245, label: 'Nashville'                    },
    charlotte: { x: 510, y: 255, label: 'Charlotte'                    },
    sc:        { x: 530, y: 268, label: 'Columbia SC'                  },
    philly:    { x: 560, y: 210, label: 'Philadelphia'                 },
    nyc:       { x: 580, y: 195, label: 'New York'                     },
  }

  const midwest  = [cities.laredo, cities.satx, cities.dallas, cities.kc, cities.chicago, cities.detroit, cities.cleveland]
  const eastcoast = [cities.dallas, cities.nashville, cities.charlotte, cities.sc, cities.philly, cities.nyc]
  const mexico    = [cities.slp, cities.mty, cities.nlaredo]

  const pathD = (pts: typeof midwest) =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')

  return (
    <div style={{ width: '100%', maxWidth: 700, margin: '0 auto', position: 'relative' }}>
      <svg viewBox="60 160 600 280" style={{ width: '100%', overflow: 'visible' }}>
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={G} stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#58a6ff" stopOpacity="0.6"/>
          </linearGradient>
          <filter id="cityGlow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Mexico route */}
        <path d={pathD(mexico)} fill="none" stroke={G} strokeWidth="2"
          strokeDasharray="5 3" opacity="0.9">
          <animate attributeName="stroke-dashoffset" from="0" to="16" dur="2s" repeatCount="indefinite"/>
        </path>

        {/* Midwest route */}
        <path d={pathD(midwest)} fill="none" stroke="url(#routeGrad)" strokeWidth="1.5"
          strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite"/>
        </path>

        {/* East Coast route */}
        <path d={pathD(eastcoast)} fill="none" stroke="#58a6ff" strokeWidth="1.5"
          strokeDasharray="6 4" opacity="0.55">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3.5s" repeatCount="indefinite"/>
        </path>

        {/* Border dashed line */}
        <line x1="160" y1="304" x2="620" y2="304" stroke="#30363d" strokeWidth="1" strokeDasharray="4 4"/>

        {/* City dots */}
        {Object.values(cities).map(c => (
          <g key={c.label}>
            {'main' in c && c.main ? (
              <>
                <circle cx={c.x} cy={c.y} r={5} fill={G} filter="url(#cityGlow)"/>
                <circle cx={c.x} cy={c.y} r={10} fill="none" stroke={G} strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" from="5" to="16" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <text x={c.x + 8} y={c.y + 4} fontSize="9" fill={G} fontWeight="700">{c.label}</text>
              </>
            ) : 'border' in c && c.border ? (
              <>
                <circle cx={c.x} cy={c.y} r={3.5} fill="#d29922"/>
                <text x={c.x + 6} y={c.y + 4} fontSize="8" fill="#d29922">{c.label}</text>
              </>
            ) : (
              <>
                <circle cx={c.x} cy={c.y} r={2.5} fill="#484f58"/>
                <text x={c.x + 5} y={c.y + 3} fontSize="7.5" fill="#484f58">{c.label}</text>
              </>
            )}
          </g>
        ))}

        {/* Labels */}
        <text x="170" y="370" fontSize="9" fill="#30363d" fontWeight="600" letterSpacing="2">MÉXICO</text>
        <text x="320" y="225" fontSize="9" fill="#30363d" fontWeight="600" letterSpacing="2">UNITED STATES</text>

        {/* Volume badge */}
        <rect x="295" y="285" width="90" height="26" rx="6" fill="#161b22" stroke={G4} strokeWidth="1"/>
        <text x="340" y="296" textAnchor="middle" fontSize="8" fill={G} fontWeight="700">$800B / year</text>
        <text x="340" y="306" textAnchor="middle" fontSize="7" fill="#484f58">USA–MEX trade</text>
      </svg>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 12, flexWrap: 'wrap' }}>
        {[
          { color: G,        label: 'Mexico corridor' },
          { color: '#58a6ff', label: 'East Coast lanes' },
          { color: '#d29922', label: 'Border crossing' },
        ].map(l => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#484f58' }}>
            <div style={{ width: 20, height: 2, background: l.color, borderRadius: 1 }}/>
            {l.label}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Animated counter ───────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let s = 0; const step = target / 80
      const tick = () => { s = Math.min(s + step, target); setVal(Math.round(s)); if (s < target) requestAnimationFrame(tick) }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ── Main ───────────────────────────────────────────── */
export default function Landing() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <main style={{ background: '#080c12', color: '#f0f6fc', fontFamily: "'Inter', system-ui, sans-serif", overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::selection{background:${G4};}
        @keyframes pulse{0%,100%{opacity:0.5}50%{opacity:1}}
        @keyframes fadein{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .card-hover{transition:transform 0.2s ease,border-color 0.2s ease;}
        .card-hover:hover{transform:translateY(-4px);border-color:${G4} !important;}
        .nav-link{font-size:13px;color:#8b949e;text-decoration:none;padding:6px 14px;border-radius:8px;transition:color 0.15s;}
        .nav-link:hover{color:#f0f6fc;}
        @media(max-width:768px){.hide-mobile{display:none!important}}
      `}</style>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, inset: 'auto 0 auto 0', zIndex: 100, height: 64,
        padding: '0 clamp(16px,4vw,48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        background: scrolled ? 'rgba(8,12,18,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(48,54,61,0.5)' : '1px solid transparent',
        transition: 'all 0.3s',
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon-192x192.png" alt="CargoFi" style={{ height: 40, width: 40, objectFit: 'contain' }} />
        </a>
        <div className="hide-mobile" style={{ display: 'flex', gap: 4 }}>
          <a href="https://dispatch.cargofi.io" target="_blank" rel="noreferrer" className="nav-link">Dispatch</a>
          <a href="/transport"  className="nav-link">Transport</a>
          <a href="/finance"    className="nav-link">Finance</a>
          <a href="https://marketplace.cargofi.io" target="_blank" rel="noreferrer" className="nav-link">Marketplace</a>
          <a href="/roadmap"    className="nav-link">Roadmap</a>
        </div>
        <a href="https://marketplace.cargofi.io" target="_blank" rel="noreferrer"
          style={{ fontSize: 13, fontWeight: 700, color: '#fff', textDecoration: 'none',
            padding: '8px 18px', borderRadius: 8, background: `linear-gradient(135deg,${G},${G2})` }}>
          Launch App
        </a>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '120px clamp(16px,4vw,48px) 80px', overflow: 'hidden' }}>
        {/* Kenworth photo background */}
        <div style={{ position: 'absolute', inset: 0,
          backgroundImage: "url('/img/hero-trucks.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center 40%',
          filter: 'brightness(0.22) saturate(0.6)' }}/>
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,12,18,0.2) 0%, transparent 40%, rgba(8,12,18,1) 100%)' }}/>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 700, height: 500, borderRadius: '50%', pointerEvents: 'none',
          background: `radial-gradient(ellipse, rgba(58,182,144,0.10) 0%, transparent 70%)`,
          animation: 'pulse 5s ease-in-out infinite' }}/>

        <div style={{ position: 'relative', maxWidth: 860, animation: 'fadein 0.9s ease-out' }}>
          <h1 style={{ fontSize: 'clamp(48px, 7.5vw, 92px)', fontWeight: 900,
            letterSpacing: '-3px', lineHeight: 0.98, marginBottom: 24,
            textShadow: '0 4px 60px rgba(0,0,0,0.6)' }}>
            Financial<br/>
            infrastructure<br/>
            <span style={{ color: G }}>for freight</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px,2vw,19px)', color: '#8b949e',
            maxWidth: 520, margin: '0 auto 52px', lineHeight: 1.75 }}>
            Carriers get paid in minutes, not 45 days.<br/>
            Investors earn real yield from real freight.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/transport" style={{ display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '15px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700,
              textDecoration: 'none', color: '#fff',
              background: `linear-gradient(135deg,${G},${G2})`,
              boxShadow: `0 0 48px rgba(58,182,144,0.28)` }}>
              I&apos;m a Carrier
            </a>
            <a href="https://marketplace.cargofi.io" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '15px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700,
                textDecoration: 'none', color: '#f0f6fc',
                background: 'rgba(22,27,34,0.8)', border: '1px solid rgba(48,54,61,0.8)' }}>
              I&apos;m an Investor
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #161b22', borderBottom: '1px solid #161b22',
        padding: '36px clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px,1fr))', gap: 28, textAlign: 'center' }}>
          {[
            { target: 48, suffix: 'B+', label: 'Freight factoring market' },
            { target: 21, suffix: 'K+', label: 'In yield pool' },
            { target: 3,  suffix: '%',  label: 'Fee per invoice' },
            { target: 4,  suffix: '',   label: 'Solana programs' },
            { target: 0,  suffix: '',   label: 'Defaults' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 900,
                color: G, letterSpacing: '-1px', lineHeight: 1 }}>
                <Counter target={s.target} suffix={s.suffix}/>
              </div>
              <div style={{ fontSize: 11, color: '#484f58', marginTop: 6,
                textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Corridor */}
      <section style={{ padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
          gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: G, letterSpacing: '0.14em',
              textTransform: 'uppercase', marginBottom: 14 }}>Our corridor</div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900,
              letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 20 }}>
              The most active<br/>trade route<br/>in North America
            </h2>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8, marginBottom: 32, maxWidth: 420 }}>
              San Luis Potosí — Monterrey — Laredo — and into the heart of the US. We cover the full corridor, from factory floor in Mexico to distribution center in Chicago, Charlotte, or New York.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Mexico',     'SLP · Monterrey · Nuevo Laredo'],
                ['Midwest',    'Kansas City · Chicago · Detroit · Cleveland'],
                ['East Coast', 'Nashville · Charlotte · SC · Philadelphia · NYC'],
              ].map(([region, cities]) => (
                <div key={region} style={{ display: 'flex', gap: 14, fontSize: 14 }}>
                  <span style={{ color: G, fontWeight: 700, minWidth: 76, flexShrink: 0 }}>{region}</span>
                  <span style={{ color: '#484f58' }}>{cities}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)', width: '130%', height: '130%',
              borderRadius: '50%', pointerEvents: 'none',
              background: `radial-gradient(ellipse, rgba(58,182,144,0.05) 0%, transparent 70%)` }}/>
            <CorridorMap/>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #161b22',
        padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900,
              letterSpacing: '-1.5px', marginBottom: 14 }}>The problem is on both sides</h2>
            <p style={{ color: '#8b949e', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
              $48 billion in freight invoices waiting 30–45 days to get paid. A cash flow crisis for carriers. An untapped asset class for investors.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 16 }}>
            {[
              {
                img: '/img/carrier-freight.jpg',
                label: 'For Carriers', color: G,
                title: 'You delivered. Now wait 45 days.',
                body: "Load delivered. BOL signed. The broker owes $3,500 and you'll see it next month — if they pay on time. Fuel and repairs can't wait.",
              },
              {
                img: '/img/finance-chart.jpg',
                label: 'For Investors', color: '#58a6ff',
                title: 'High yield. Impossible to access.',
                body: 'Freight factoring generates 20–40% APY on short-duration capital. Until now it required institutional minimums, US banking, and personal relationships.',
              },
            ].map(c => (
              <div key={c.title} className="card-hover"
                style={{ borderRadius: 20, overflow: 'hidden',
                  background: '#161b22', border: '1px solid #21262d' }}>
                <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover',
                      filter: 'brightness(0.65) saturate(0.75)' }}/>
                  <div style={{ position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(22,27,34,1) 0%, transparent 55%)' }}/>
                </div>
                <div style={{ padding: '24px 28px 30px' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
                    textTransform: 'uppercase', color: c.color,
                    background: `${c.color}14`, border: `1px solid ${c.color}28`,
                    padding: '3px 10px', borderRadius: 999 }}>{c.label}</span>
                  <h3 style={{ fontSize: 19, fontWeight: 800, margin: '14px 0 10px',
                    letterSpacing: '-0.4px' }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: '#8b949e', lineHeight: 1.7 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900,
              letterSpacing: '-1.5px', marginBottom: 14 }}>One platform. Two sides.</h2>
            <p style={{ color: '#8b949e', fontSize: 16, maxWidth: 460, margin: '0 auto' }}>
              CargoFi connects freight operations to global on-chain capital.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 16 }}>
            {[
              { tag: 'For Carriers', name: 'CargoFi Transport',
                desc: 'Smart dispatch for owner-operators and fleets. Real loads, competitive rates, cross-border USA–MEX. We are actively recruiting OOs for the Laredo corridor.',
                points: ['Load matching & dispatch', 'Full corridor: SLP → East Coast', 'Recruiting owner-operators now'],
                href: '/transport', cta: 'Learn more', accent: G },
              { tag: 'For Carriers', name: 'CargoFi Finance',
                desc: 'Submit your invoice, receive 97% in minutes. CargoFi collects from the broker — you keep moving without waiting.',
                points: ['97% advance rate', 'Minutes not days', '3% total fee'],
                href: '/finance', cta: 'Request advance', accent: '#d29922' },
              { tag: 'For Investors', name: 'CargoFi Marketplace',
                desc: 'Fund real freight invoices on-chain. Earn yield automatically. Deposit into the pool for passive income, or fund individual deals.',
                points: ['27–116% est. APY', 'USDC yield pool', 'Truck asset tokens'],
                href: 'https://marketplace.cargofi.io', cta: 'Open Marketplace', accent: '#58a6ff' },
            ].map(p => (
              <div key={p.name} className="card-hover"
                style={{ background: '#0d1117', border: '1px solid #21262d',
                  borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: p.accent,
                    background: `${p.accent}12`, border: `1px solid ${p.accent}28`,
                    padding: '3px 10px', borderRadius: 999 }}>{p.tag}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.3px', marginBottom: 10 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.points.map(pt => (
                    <li key={pt} style={{ fontSize: 13, color: '#484f58', display: 'flex', gap: 10 }}>
                      <span style={{ color: p.accent, flexShrink: 0, fontWeight: 700 }}>—</span>{pt}
                    </li>
                  ))}
                </ul>
                <a href={p.href} target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
                  style={{ fontSize: 13, fontWeight: 700, color: p.accent, textDecoration: 'none', marginTop: 'auto' }}>
                  {p.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #161b22',
        padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 12 }}>
              How it works
            </h2>
            <p style={{ color: '#8b949e', fontSize: 15 }}>Carrier to investor. Under 2 minutes.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 8 }}>
            {[
              { n: '01', title: 'Carrier submits', desc: 'Load delivered. BOL uploaded in Dispatch with one tap.' },
              { n: '02', title: 'Instant advance', desc: '97% of the invoice sent immediately. No paperwork, no wait.' },
              { n: '03', title: 'Listed on-chain', desc: 'Solana smart contract lists the deal. Investors fund from their wallet.' },
              { n: '04', title: 'Broker pays — done', desc: 'Wire detected. Oracle settles on-chain. Investor receives principal + yield.' },
            ].map((s, i) => (
              <div key={s.n} style={{ position: 'relative', padding: 6 }}>
                <div style={{ background: '#161b22', border: '1px solid #21262d',
                  borderRadius: 16, padding: '22px 20px', height: '100%' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, color: G,
                      background: G3, border: `1px solid ${G4}`,
                      padding: '2px 8px', borderRadius: 6 }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hide-mobile" style={{ position: 'absolute', right: -12, top: '50%',
                    transform: 'translateY(-50%)', color: '#30363d', fontSize: 18, zIndex: 1 }}>›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solana section */}
      <section style={{ position: 'relative', padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)',
        textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 600, height: 600, borderRadius: '50%', pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(153,69,255,0.05) 0%, transparent 70%)' }}/>
        <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <SolanaLogo size={36}/>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900,
            letterSpacing: '-1.5px', marginBottom: 18 }}>Why Solana</h2>
          <p style={{ fontSize: 16, color: '#8b949e', lineHeight: 1.8, marginBottom: 48, maxWidth: 580, margin: '0 auto 48px' }}>
            Traditional factoring runs on banking hours, wire cutoffs, and 2-day settlement. Solana settles in 400ms, 24/7, for fractions of a cent. Any investor worldwide can fund a US freight invoice and receive yield the moment the broker pays — no bank account required.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 48 }}>
            {[
              ['400ms', 'Block time'],
              ['< $0.001', 'Per transaction'],
              ['24 / 7', 'No cutoffs'],
              ['Global', 'Any investor, anywhere'],
            ].map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.5px',
                  background: 'linear-gradient(90deg,#9945FF,#14F195)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{v}</div>
                <div style={{ fontSize: 11, color: '#484f58', marginTop: 6,
                  textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: G, textTransform: 'uppercase' }}>Roadmap</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 0' }}>
              Built in stages. Profitable from day one.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              {
                quarter: 'Q2 2026',
                badge: 'Live on devnet',
                badgeColor: G,
                badgeBg: G3,
                badgeBorder: G4,
                title: 'CargoFi Finance — Invoice Factoring',
                items: [
                  'Dispatch platform + AI document parsing',
                  'Oracle bridges invoices to Solana on-chain',
                  'Investor marketplace — fund deals, earn yield',
                  '3 Solana programs deployed on devnet',
                ],
                active: true,
              },
              {
                quarter: 'Q3 2026',
                badge: 'Next',
                badgeColor: '#58a6ff',
                badgeBg: 'rgba(88,166,255,0.1)',
                badgeBorder: 'rgba(88,166,255,0.25)',
                title: 'Mainnet Launch + CargoFi Transport',
                items: [
                  'Real USDC on Solana mainnet',
                  'CargoFi LLC — MC authority active, first trucks operating',
                  'First 5 carriers onboarded, cross-border routes USA–MX',
                  'CargoFi México S. de R.L. de C.V. incorporated',
                ],
                active: false,
              },
              {
                quarter: 'Q4 2026',
                badge: 'Planned',
                badgeColor: '#a78bfa',
                badgeBg: 'rgba(167,139,250,0.1)',
                badgeBorder: 'rgba(167,139,250,0.25)',
                title: 'Truck Token Marketplace + Scale',
                items: [
                  'Fractional truck ownership on-chain (pending Reg D)',
                  'CargoFi Pay — USDC settlement rails for carriers',
                  'Expand to 10+ trucks, $1M+ monthly invoice volume',
                  'Open to accredited investors globally',
                ],
                active: false,
              },
            ].map((phase, i, arr) => (
              <div key={phase.quarter} style={{ display: 'flex', gap: 0 }}>
                {/* Timeline */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48, flexShrink: 0 }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 20,
                    background: phase.active ? G : '#21262d',
                    border: `2px solid ${phase.active ? G : '#30363d'}`,
                    boxShadow: phase.active ? `0 0 12px ${G4}` : 'none',
                  }}/>
                  {i < arr.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#21262d', marginTop: 4, marginBottom: 4 }}/>
                  )}
                </div>

                {/* Content */}
                <div style={{
                  flex: 1, marginLeft: 20, marginBottom: i < arr.length - 1 ? 40 : 0,
                  paddingBottom: i < arr.length - 1 ? 0 : 0,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#484f58', fontFamily: 'monospace' }}>{phase.quarter}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 999,
                      color: phase.badgeColor, background: phase.badgeBg, border: `1px solid ${phase.badgeBorder}`,
                    }}>{phase.badge}</span>
                  </div>
                  <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 700, color: '#f0f6fc' }}>{phase.title}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {phase.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: '#8b949e', lineHeight: 1.5 }}>
                        <span style={{ color: phase.active ? G : '#30363d', marginTop: 2, flexShrink: 0 }}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #161b22',
        padding: 'clamp(80px,10vw,100px) clamp(16px,4vw,48px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900,
            letterSpacing: '-1.5px', marginBottom: 16 }}>Get early access</h2>
          <p style={{ color: '#8b949e', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
            Be the first to know when CargoFi opens to new carriers and investors.
          </p>
          {submitted ? (
            <div style={{ background: G3, border: `1px solid ${G4}`, borderRadius: 14,
              padding: '22px 28px', color: G, fontSize: 16, fontWeight: 600 }}>
              You&apos;re on the list. We&apos;ll be in touch.
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true) }}
              style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '0 auto 32px', flexWrap: 'wrap' }}>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{ flex: 1, minWidth: 180, background: '#161b22', border: '1px solid #30363d',
                  borderRadius: 10, padding: '13px 16px', fontSize: 14, color: '#f0f6fc',
                  outline: 'none', fontFamily: 'inherit' }}/>
              <button type="submit"
                style={{ padding: '13px 24px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: 700, color: '#fff',
                  background: `linear-gradient(135deg,${G},${G2})` }}>
                Join Waitlist
              </button>
            </form>
          )}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
            {[
              ['Dispatch',    'https://dispatch.cargofi.io'],
              ['Transport',   '/transport'],
              ['Finance',     '/finance'],
              ['Marketplace', 'https://marketplace.cargofi.io'],
              ['@cargo_fi',   'https://twitter.com/cargo_fi'],
            ].map(([l, h]) => (
              <a key={l} href={h}
                target={h.startsWith('http') ? '_blank' : undefined}
                rel={h.startsWith('http') ? 'noreferrer' : undefined}
                style={{ fontSize: 13, color: '#484f58', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = '#484f58')}>
                {l} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #161b22', padding: '20px clamp(16px,4vw,48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon-192x192.png" alt="CargoFi" style={{ height: 28, width: 28, objectFit: 'contain' }} />
        <span style={{ fontSize: 12, color: '#30363d' }}>© 2026 CargoFi LLC · Texas</span>
        <a href="mailto:contact@cargofi.io" style={{ fontSize: 12, color: '#30363d', textDecoration: 'none' }}>contact@cargofi.io</a>
      </footer>
    </main>
  )
}
