'use client'

import { useState } from 'react'

const G  = '#3ab690'
const G2 = '#1a9d75'
const G3 = 'rgba(58,182,144,0.1)'
const G4 = 'rgba(58,182,144,0.22)'

export default function FinancePage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', amount: '', details: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 800))
    setStatus('done')
  }

  return (
    <main style={{ background: '#080c12', color: '#f0f6fc', fontFamily: "'Inter', system-ui, sans-serif", minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        input,textarea,select{font-family:inherit;}
        @keyframes fadein{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:768px){.hide-mobile{display:none!important}}
      `}</style>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #161b22', padding: '0 clamp(16px,4vw,48px)',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(8,12,18,0.98)', backdropFilter: 'blur(16px)',
        position: 'sticky', top: 0, zIndex: 50 }}>
        <a href="/" style={{ textDecoration: 'none', fontSize: 20, fontWeight: 900,
          letterSpacing: '-0.5px', color: '#f0f6fc' }}>
          Cargo<span style={{ color: G }}>Fi</span>
        </a>
        <div className="hide-mobile" style={{ display: 'flex', gap: 4 }}>
          {[['Transport','/transport'],['Finance','/finance'],['Marketplace','https://marketplace.cargofi.io'],['Roadmap','/roadmap']].map(([l,h]) => (
            <a key={l} href={h} target={h.startsWith('http')?'_blank':undefined}
              rel={h.startsWith('http')?'noreferrer':undefined}
              style={{ fontSize:13, color: l==='Finance'? G : '#8b949e',
                textDecoration:'none', padding:'6px 14px', borderRadius:8 }}>{l}</a>
          ))}
        </div>
        <a href="#apply"
          style={{ fontSize:13, fontWeight:700, color:'#fff', textDecoration:'none',
            padding:'8px 18px', borderRadius:8, background:`linear-gradient(135deg,${G},${G2})` }}>
          Get funded
        </a>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '0 clamp(16px,4vw,48px)',
        textAlign: 'center', overflow: 'hidden',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 700, height: 400, borderRadius: '50%', pointerEvents: 'none',
          background: `radial-gradient(ellipse, rgba(210,153,34,0.06) 0%, transparent 70%)` }}/>
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto', animation: 'fadein 0.8s ease-out' }}>
          <h1 style={{ fontSize: 'clamp(40px,6.5vw,80px)', fontWeight: 900,
            letterSpacing: '-2.5px', lineHeight: 1.0, marginBottom: 22 }}>
            Your invoice, funded<br/>
            <span style={{ color: G }}>in minutes</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2vw,19px)', color: '#8b949e',
            maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.75 }}>
            You delivered the load. The broker owes you money. We advance 97% immediately — you keep moving while we collect.
          </p>
          <a href="#apply"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 36px', borderRadius: 12, fontSize: 16, fontWeight: 700,
              textDecoration: 'none', color: '#fff',
              background: `linear-gradient(135deg,${G},${G2})`,
              boxShadow: `0 0 48px rgba(58,182,144,0.25)` }}>
            Get funded →
          </a>
        </div>
      </section>

      {/* How it compares */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #161b22',
        padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900,
            letterSpacing: '-1.2px', textAlign: 'center', marginBottom: 40 }}>
            CargoFi vs traditional factoring
          </h2>
          <div style={{ border: '1px solid #21262d', borderRadius: 16, overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              background: '#161b22', padding: '14px 24px', borderBottom: '1px solid #21262d' }}>
              <span style={{ fontSize: 12, color: '#484f58', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}></span>
              <span style={{ fontSize: 13, fontWeight: 700, color: G, textAlign: 'center' }}>CargoFi Finance</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#484f58', textAlign: 'center' }}>Traditional Factor</span>
            </div>
            {[
              ['Advance rate', '97%', '80–90%'],
              ['Time to funding', 'Minutes', 'Next day, 2pm cutoff'],
              ['Total fee', '3%', '3–5% + hidden fees'],
              ['Contract lock-in', 'Per invoice', 'Long-term contract'],
              ['Recourse', 'Non-recourse', 'Often recourse'],
              ['Process', 'Digital, 1 click', 'Manual, fax & email'],
            ].map(([label, us, them], i) => (
              <div key={label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                padding: '16px 24px', borderBottom: i < 5 ? '1px solid #161b22' : 'none',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                <span style={{ fontSize: 14, color: '#8b949e' }}>{label}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: G, textAlign: 'center' }}>{us}</span>
                <span style={{ fontSize: 14, color: '#484f58', textAlign: 'center' }}>{them}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900,
            letterSpacing: '-1.2px', textAlign: 'center', marginBottom: 48 }}>
            Three steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 12 }}>
            {[
              { n: '01', title: 'Submit your invoice',
                desc: 'Load delivered. Upload your rate confirmation and BOL in CargoFi Dispatch. Takes 60 seconds.' },
              { n: '02', title: 'Receive 97% immediately',
                desc: 'CargoFi sends the advance to your bank account or USDC wallet within minutes of approval.' },
              { n: '03', title: 'We collect from the broker',
                desc: 'The broker pays CargoFi on their normal schedule. You never chase payment again.' },
            ].map(s => (
              <div key={s.n} style={{ background: '#161b22', border: '1px solid #21262d',
                borderRadius: 16, padding: '28px 24px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, color: G,
                  background: G3, border: `1px solid ${G4}`,
                  padding: '2px 8px', borderRadius: 6, display: 'inline-block', marginBottom: 18 }}>{s.n}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #161b22',
        padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 48, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900,
              letterSpacing: '-1px', marginBottom: 20 }}>Who qualifies</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Active MC Number and DOT',
                'Cross-border or domestic dry van',
                'Invoice from a creditworthy broker',
                'Clean delivery — BOL and rate confirmation',
              ].map(r => (
                <div key={r} style={{ display: 'flex', gap: 12, fontSize: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: G, fontWeight: 700, marginTop: 1 }}>—</span>
                  <span style={{ color: '#8b949e', lineHeight: 1.6 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 900,
              letterSpacing: '-1px', marginBottom: 20 }}>What you need</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Signed rate confirmation',
                'Bill of Lading (BOL)',
                'Broker name and load number',
                'Bank account or USDC wallet for payout',
              ].map(r => (
                <div key={r} style={{ display: 'flex', gap: 12, fontSize: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: G, fontWeight: 700, marginTop: 1 }}>—</span>
                  <span style={{ color: '#8b949e', lineHeight: 1.6 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" style={{ padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900,
              letterSpacing: '-1.5px', marginBottom: 14 }}>Get funded</h2>
            <p style={{ color: '#8b949e', fontSize: 15, lineHeight: 1.7 }}>
              Tell us about your operation. We&apos;ll review and get back to you within 2 hours.
            </p>
          </div>

          {status === 'done' ? (
            <div style={{ background: G3, border: `1px solid ${G4}`, borderRadius: 16,
              padding: '40px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 16, color: G, fontWeight: 900 }}>Done.</div>
              <p style={{ fontSize: 16, color: '#f0f6fc', fontWeight: 600, marginBottom: 8 }}>
                We received your request.
              </p>
              <p style={{ fontSize: 14, color: '#8b949e' }}>
                Our team reviews and responds in under 2 hours during business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'name',    type: 'text',  placeholder: 'Your name',           required: true  },
                { name: 'email',   type: 'email', placeholder: 'Email address',        required: true  },
                { name: 'company', type: 'text',  placeholder: 'Company / MC Number',  required: true  },
                { name: 'amount',  type: 'text',  placeholder: 'Invoice amount (USD)',  required: true  },
              ].map(f => (
                <input key={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                  value={form[f.name as keyof typeof form]}
                  onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                  style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10,
                    padding: '14px 16px', fontSize: 14, color: '#f0f6fc', outline: 'none' }}/>
              ))}
              <textarea placeholder="Broker name, load number, origin, destination, any details..."
                rows={4} value={form.details}
                onChange={e => setForm(p => ({ ...p, details: e.target.value }))}
                style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10,
                  padding: '14px 16px', fontSize: 14, color: '#f0f6fc', outline: 'none',
                  resize: 'vertical', fontFamily: 'inherit' }}/>
              <button type="submit" disabled={status === 'loading'}
                style={{ padding: '15px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  fontSize: 15, fontWeight: 700, color: '#fff',
                  background: `linear-gradient(135deg,${G},${G2})`,
                  opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Sending...' : 'Submit request'}
              </button>
              <p style={{ fontSize: 12, color: '#484f58', textAlign: 'center', marginTop: 4 }}>
                Or email us directly at{' '}
                <a href="mailto:finance@cargofi.io" style={{ color: G, textDecoration: 'none' }}>finance@cargofi.io</a>
              </p>
            </form>
          )}
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #161b22', padding: '20px clamp(16px,4vw,48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <a href="/" style={{ textDecoration: 'none', fontSize: 17, fontWeight: 900, letterSpacing: '-0.5px' }}>
          Cargo<span style={{ color: G }}>Fi</span>
        </a>
        <span style={{ fontSize: 12, color: '#30363d' }}>© 2026 CargoFi LLC · Texas</span>
        <a href="mailto:finance@cargofi.io" style={{ fontSize: 12, color: '#30363d', textDecoration: 'none' }}>
          finance@cargofi.io
        </a>
      </footer>
    </main>
  )
}
