const G  = '#3ab690'
const G2 = '#1a9d75'
const G3 = 'rgba(58,182,144,0.1)'
const G4 = 'rgba(58,182,144,0.22)'

const PHASES = [
  {
    quarter: 'Q2 2026',
    badge: 'Live on devnet',
    badgeColor: G,
    badgeBg: G3,
    badgeBorder: G4,
    title: 'CargoFi Finance — Invoice Factoring on Solana',
    active: true,
    items: [
      '✅ Dispatch platform — AI document parsing, load management',
      '✅ Oracle service — bridges invoices to Solana on-chain automatically',
      '✅ Investor marketplace — fund deals, earn yield',
      '✅ 3 Solana programs deployed on devnet (cf-pool, cf-market, cf-kyc)',
      '⏳ Mainnet launch — post-audit security review',
    ],
  },
  {
    quarter: 'Q3 2026',
    badge: 'Next',
    badgeColor: '#58a6ff',
    badgeBg: 'rgba(88,166,255,0.1)',
    badgeBorder: 'rgba(88,166,255,0.25)',
    title: 'Mainnet + CargoFi Transport',
    active: false,
    items: [
      'Real USDC on Solana mainnet — first live invoice funded on-chain',
      'CargoFi LLC MC authority active — first trucks operating cross-border',
      'First 5 owner-operators onboarded, Laredo TX / San Luis Potosí corridor',
      'CargoFi Docs + Intel SaaS — AI-powered cross-border document validator',
      'KYC/KYB investor onboarding (Reg D 506(c))',
    ],
  },
  {
    quarter: 'Q4 2026',
    badge: 'Planned',
    badgeColor: '#a78bfa',
    badgeBg: 'rgba(167,139,250,0.1)',
    badgeBorder: 'rgba(167,139,250,0.25)',
    title: 'CargoFi Finance — Real Capital + Truck Tokens',
    active: false,
    items: [
      'Invoice factoring with external capital — angel + family office round',
      'Truck Token marketplace — fractional ownership, revenue shares on-chain',
      'Automated settlement — broker repayment triggers on-chain distribution',
      'Secondary market for invoice positions — liquidity for investors',
      'CargoFi México S. de R.L. de C.V. — cross-border operations',
    ],
  },
  {
    quarter: 'Q1 2027',
    badge: 'Roadmap',
    badgeColor: '#f79c42',
    badgeBg: 'rgba(247,156,66,0.1)',
    badgeBorder: 'rgba(247,156,66,0.25)',
    title: 'CargoFi Pay + Tokenization v2',
    active: false,
    items: [
      'CargoFi Pay — USDC rails for cross-border carrier settlements (USD → MXN)',
      'NFT title collateral — truck ownership on Solana, tradeable after 90-day lockup',
      'Retail investor access — Reg A+ filing, open to non-accredited',
      'CargoFi Holdings Delaware — institutional capital structure',
      'Expand to air & ocean freight assets',
    ],
  },
  {
    quarter: '2027+',
    badge: 'Vision',
    badgeColor: '#8b949e',
    badgeBg: 'rgba(139,148,158,0.08)',
    badgeBorder: 'rgba(139,148,158,0.2)',
    title: 'The Freight Finance Layer',
    active: false,
    items: [
      '50+ trucks tokenized — $10M+ TVL across pool and invoice marketplace',
      'Secondary trading of all CargoFi positions — real liquidity',
      'Cross-border expansion — USA, México, Colombia',
      'Institutional API — hedge funds and family offices via SDK',
      'CargoFi Protocol — open infrastructure for freight-backed DeFi',
    ],
  },
]

export default function RoadmapPage() {
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh', color: '#f0f6fc', fontFamily: 'Inter, sans-serif' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, inset: 'auto 0 auto 0', zIndex: 100, height: 64,
        padding: '0 clamp(16px,4vw,48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        background: 'rgba(8,12,18,0.96)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(48,54,61,0.5)',
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon-192x192.png" alt="CargoFi" style={{ height: 40, width: 40, objectFit: 'contain' }} />
        </a>
        <div style={{ display: 'flex', gap: 4 }}>
          <a href="/transport" style={{ fontSize: 13, color: '#8b949e', textDecoration: 'none', padding: '6px 14px', borderRadius: 8 }}>Transport</a>
          <a href="/finance" style={{ fontSize: 13, color: '#8b949e', textDecoration: 'none', padding: '6px 14px', borderRadius: 8 }}>Finance</a>
          <a href="https://marketplace.cargofi.io" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: '#8b949e', textDecoration: 'none', padding: '6px 14px', borderRadius: 8 }}>Marketplace</a>
          <a href="/roadmap" style={{ fontSize: 13, color: G, textDecoration: 'none', padding: '6px 14px', borderRadius: 8, background: G3, border: `1px solid ${G4}` }}>Roadmap</a>
        </div>
        <a href="https://marketplace.cargofi.io" target="_blank" rel="noreferrer"
          style={{ fontSize: 13, fontWeight: 700, color: '#fff', textDecoration: 'none',
            padding: '8px 18px', borderRadius: 8, background: `linear-gradient(135deg,${G},${G2})` }}>
          Launch App
        </a>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 64, textAlign: 'center', padding: '120px clamp(16px,4vw,48px) 64px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: G3, border: `1px solid ${G4}`,
          color: G, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '6px 14px', borderRadius: 999, marginBottom: 28,
        }}>
          Product Roadmap
        </div>

        <h1 style={{
          fontSize: 'clamp(32px,6vw,60px)', fontWeight: 900,
          letterSpacing: '-2px', lineHeight: 1.05, margin: '0 0 20px',
        }}>
          Building the{' '}
          <span style={{ color: G }}>freight finance layer</span>
        </h1>

        <p style={{ color: '#8b949e', fontSize: 'clamp(15px,2vw,18px)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto' }}>
          CargoFi is long-term infrastructure. Here&apos;s the plan — from Solana devnet today
          to the global freight capital market.
        </p>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 clamp(16px,4vw,48px) 100px' }}>
        <div style={{ position: 'relative' }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute', left: 23, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, rgba(58,182,144,0.5), rgba(58,182,144,0.04))',
            borderRadius: 2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PHASES.map((phase, i, arr) => (
              <div key={phase.quarter} style={{ display: 'flex', gap: 0 }}>
                {/* Dot + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48, flexShrink: 0 }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 22,
                    background: phase.active ? G : '#21262d',
                    border: `2px solid ${phase.active ? G : '#30363d'}`,
                    boxShadow: phase.active ? `0 0 0 4px ${G3}` : 'none',
                  }} />
                  {i < arr.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#21262d', marginTop: 4, marginBottom: 4 }} />
                  )}
                </div>

                {/* Card */}
                <div style={{
                  flex: 1, marginLeft: 20,
                  marginBottom: i < arr.length - 1 ? 40 : 0,
                  background: '#161b22',
                  border: `1px solid ${phase.active ? G4 : '#21262d'}`,
                  borderRadius: 12,
                  padding: '24px 28px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#484f58', fontFamily: 'monospace' }}>
                      {phase.quarter}
                    </span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 999,
                      color: phase.badgeColor, background: phase.badgeBg, border: `1px solid ${phase.badgeBorder}`,
                    }}>
                      {phase.badge}
                    </span>
                  </div>

                  <h3 style={{ margin: '0 0 14px', fontSize: 18, fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.3px' }}>
                    {phase.title}
                  </h3>

                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
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

        {/* Bottom CTA */}
        <div style={{
          marginTop: 64, padding: '36px 32px', borderRadius: 16,
          background: G3, border: `1px solid ${G4}`, textAlign: 'center',
        }}>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 8 }}>
            We&apos;re building in public
          </div>
          <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.7, margin: '0 0 24px', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            CargoFi is live on Solana devnet. Every invoice funded today trains the underwriting model
            that will power millions in freight financing tomorrow.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://marketplace.cargofi.io" target="_blank" rel="noreferrer"
              style={{
                display: 'inline-block', background: `linear-gradient(135deg,${G},${G2})`,
                color: '#fff', fontWeight: 700, fontSize: 14,
                padding: '11px 26px', borderRadius: 10, textDecoration: 'none',
              }}>
              Launch App →
            </a>
            <a href="/"
              style={{
                display: 'inline-block', background: 'transparent',
                color: '#8b949e', fontWeight: 600, fontSize: 14,
                padding: '11px 26px', borderRadius: 10, textDecoration: 'none',
                border: '1px solid #30363d',
              }}>
              Back to Home
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
