'use client'

import { useState } from 'react'

const G  = '#3ab690'
const G2 = '#1a9d75'
const G3 = 'rgba(58,182,144,0.1)'
const G4 = 'rgba(58,182,144,0.22)'

export default function TransportPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', unit: '', mc: '', details: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [tab, setTab] = useState<'oo' | 'shipper'>('oo')

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
        input,textarea{font-family:inherit;}
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
              style={{ fontSize:13, color: l==='Transport'? G : '#8b949e',
                textDecoration:'none', padding:'6px 14px', borderRadius:8 }}>{l}</a>
          ))}
        </div>
        <a href="#join"
          style={{ fontSize:13, fontWeight:700, color:'#fff', textDecoration:'none',
            padding:'8px 18px', borderRadius:8, background:`linear-gradient(135deg,${G},${G2})` }}>
          Join as OO
        </a>
      </nav>

      {/* Hero — Kenworth photo full bleed */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '80px clamp(16px,4vw,48px) 64px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0,
          backgroundImage: "url('/img/hero-trucks.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center 55%',
          filter: 'brightness(0.2) saturate(0.5)' }}/>
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,12,18,0.1) 0%, transparent 35%, rgba(8,12,18,0.95) 100%)' }}/>
        <div style={{ position: 'relative', maxWidth: 820, animation: 'fadein 0.8s ease-out' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            background: G3, border: `1px solid ${G4}`, borderRadius: 999,
            padding: '5px 16px', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: G }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3fb950',
              display: 'inline-block' }}/>
            Recruiting owner-operators — Laredo corridor
          </div>
          <h1 style={{ fontSize: 'clamp(42px,6.5vw,82px)', fontWeight: 900,
            letterSpacing: '-2.5px', lineHeight: 0.98, marginBottom: 22,
            textShadow: '0 4px 60px rgba(0,0,0,0.8)' }}>
            Run under a carrier<br/>that actually<br/>
            <span style={{ color: G }}>works for you</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#8b949e',
            maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.75 }}>
            CargoFi dispatches the Laredo–Midwest and Laredo–East Coast corridor. Competitive rates, on-time payment, and a team that treats you like a partner — not a number.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#join"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700,
                textDecoration: 'none', color: '#fff',
                background: `linear-gradient(135deg,${G},${G2})`,
                boxShadow: `0 0 48px rgba(58,182,144,0.28)` }}>
              Apply as owner-operator
            </a>
            <a href="#lanes"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 32px', borderRadius: 12, fontSize: 15, fontWeight: 700,
                textDecoration: 'none', color: '#f0f6fc',
                background: 'rgba(22,27,34,0.8)', border: '1px solid rgba(48,54,61,0.8)' }}>
              See our lanes
            </a>
          </div>
        </div>
      </section>

      {/* Why run with CargoFi */}
      <section style={{ background: '#0d1117', borderTop: '1px solid #161b22',
        padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 900,
              letterSpacing: '-1.2px', marginBottom: 14 }}>Why run with CargoFi</h2>
            <p style={{ color: '#8b949e', fontSize: 15, maxWidth: 460, margin: '0 auto' }}>
              We built the system from the inside. We know what OOs actually need.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 14 }}>
            {[
              { title: 'On-time payment',
                desc: 'We pay within 24 hours of delivery confirmation. No games, no excuses, no waiting on the broker.' },
              { title: 'Instant factoring',
                desc: 'Need cash before delivery is confirmed? We advance 97% of the invoice in minutes through CargoFi Finance.' },
              { title: 'Real loads, real rates',
                desc: 'We find loads that make sense for your truck. No cheap freight, no deadhead traps.' },
              { title: 'Dispatch you can reach',
                desc: 'A team that picks up the phone. No automated systems, no ticketing — a real dispatcher on your loads.' },
              { title: 'Cross-border expertise',
                desc: 'We handle the paperwork, the crossings, the coordination. SLP to Chicago or New York — we know the corridor.' },
              { title: 'Transparency',
                desc: 'You see every load, every rate, every deduction. No surprises on your settlement.' },
            ].map(c => (
              <div key={c.title}
                style={{ background: '#161b22', border: '1px solid #21262d',
                  borderRadius: 16, padding: '24px 22px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: '#f0f6fc' }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lanes */}
      <section id="lanes" style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 900,
              letterSpacing: '-1.2px', marginBottom: 12 }}>Lanes we run</h2>
            <p style={{ color: '#8b949e', fontSize: 15, maxWidth: 440, margin: '0 auto' }}>
              Home base: Laredo TX / Nuevo Laredo. The most active land port in North America.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Mexico */}
            <div style={{ fontSize: 11, fontWeight: 700, color: '#484f58',
              textTransform: 'uppercase', letterSpacing: '0.1em', padding: '8px 0 4px' }}>
              Mexico origin
            </div>
            {[
              { from: 'San Luis Potosí', to: 'Nuevo Laredo / Laredo TX', desc: 'Primary corridor. SLP manufacturing to border crossing.' },
              { from: 'Monterrey',       to: 'Laredo TX',                desc: 'Industrial hub to US distribution.' },
            ].map(l => (
              <div key={l.from} style={{ background: '#161b22', border: '1px solid #21262d',
                borderRadius: 12, padding: '18px 22px',
                display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ fontWeight: 700, color: '#f0f6fc', fontSize: 14, minWidth: 260 }}>
                  {l.from} <span style={{ color: G }}>→</span> {l.to}
                </div>
                <div style={{ fontSize: 13, color: '#484f58', flex: 1 }}>{l.desc}</div>
              </div>
            ))}

            {/* Midwest */}
            <div style={{ fontSize: 11, fontWeight: 700, color: '#484f58',
              textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 0 4px' }}>
              Midwest
            </div>
            {[
              { from: 'Laredo TX', to: 'Kansas City MO / KS',  desc: 'Mid-continent distribution hub.' },
              { from: 'Laredo TX', to: 'Chicago IL',            desc: 'Largest inland distribution market. High-frequency lane.' },
              { from: 'Laredo TX', to: 'Detroit MI',            desc: 'Auto parts and manufacturing.' },
              { from: 'Laredo TX', to: 'Cleveland OH',          desc: 'Industrial midwest.' },
            ].map(l => (
              <div key={l.to} style={{ background: '#161b22', border: '1px solid #21262d',
                borderRadius: 12, padding: '18px 22px',
                display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ fontWeight: 700, color: '#f0f6fc', fontSize: 14, minWidth: 260 }}>
                  {l.from} <span style={{ color: G }}>→</span> {l.to}
                </div>
                <div style={{ fontSize: 13, color: '#484f58', flex: 1 }}>{l.desc}</div>
              </div>
            ))}

            {/* East Coast */}
            <div style={{ fontSize: 11, fontWeight: 700, color: '#484f58',
              textTransform: 'uppercase', letterSpacing: '0.1em', padding: '16px 0 4px' }}>
              East Coast
            </div>
            {[
              { from: 'Laredo TX', to: 'Nashville TN',      desc: 'Southeast manufacturing and distribution.' },
              { from: 'Laredo TX', to: 'Charlotte NC',      desc: 'Carolinas distribution corridor.' },
              { from: 'Laredo TX', to: 'Columbia SC',       desc: 'Southeast industrial.' },
              { from: 'Laredo TX', to: 'Philadelphia PA',   desc: 'Northeast I-95 corridor.' },
              { from: 'Laredo TX', to: 'New York NY',       desc: 'Highest-volume destination. Premium rates.' },
            ].map(l => (
              <div key={l.to} style={{ background: '#161b22', border: '1px solid #21262d',
                borderRadius: 12, padding: '18px 22px',
                display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ fontWeight: 700, color: '#f0f6fc', fontSize: 14, minWidth: 260 }}>
                  {l.from} <span style={{ color: G }}>→</span> {l.to}
                </div>
                <div style={{ fontSize: 13, color: '#484f58', flex: 1 }}>{l.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply / Join */}
      <section id="join" style={{ background: '#0d1117', borderTop: '1px solid #161b22',
        padding: 'clamp(80px,10vw,120px) clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900,
              letterSpacing: '-1.5px', marginBottom: 14 }}>Join CargoFi Transport</h2>
            <p style={{ color: '#8b949e', fontSize: 15, lineHeight: 1.7 }}>
              We are actively recruiting owner-operators for the Laredo corridor. Tell us about your unit.
            </p>
          </div>

          {/* Tab */}
          <div style={{ display: 'flex', background: '#161b22', borderRadius: 10,
            padding: 4, marginBottom: 28 }}>
            {[['oo','Owner-operator'],['shipper','I have freight']] .map(([k,l]) => (
              <button key={k} onClick={() => setTab(k as 'oo'|'shipper')}
                style={{ flex: 1, padding: '9px 0', borderRadius: 7, border: 'none',
                  cursor: 'pointer', fontSize: 13, fontWeight: 600, transition: 'all 0.15s',
                  background: tab===k ? '#1c2333' : 'transparent',
                  color: tab===k ? '#f0f6fc' : '#484f58' }}>{l}</button>
            ))}
          </div>

          {status === 'done' ? (
            <div style={{ background: G3, border: `1px solid ${G4}`, borderRadius: 16,
              padding: '40px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 36, color: G, fontWeight: 900, marginBottom: 14 }}>Done.</div>
              <p style={{ fontSize: 15, color: '#f0f6fc', fontWeight: 600, marginBottom: 8 }}>We received your application.</p>
              <p style={{ fontSize: 13, color: '#8b949e' }}>Our dispatch team will reach out within 24 hours.</p>
            </div>
          ) : tab === 'oo' ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'name',  type: 'text',  placeholder: 'Full name',            required: true  },
                { name: 'phone', type: 'tel',   placeholder: 'Phone / WhatsApp',     required: true  },
                { name: 'email', type: 'email', placeholder: 'Email address',        required: false },
                { name: 'unit',  type: 'text',  placeholder: 'Truck year, make & model (e.g. 2020 Kenworth T680)', required: true },
                { name: 'mc',    type: 'text',  placeholder: 'MC Number (if you have authority)', required: false },
              ].map(f => (
                <input key={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                  value={form[f.name as keyof typeof form]}
                  onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                  style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10,
                    padding: '14px 16px', fontSize: 14, color: '#f0f6fc', outline: 'none' }}/>
              ))}
              <textarea placeholder="Tell us about yourself — experience, preferred lanes, anything else..."
                rows={3} value={form.details}
                onChange={e => setForm(p => ({ ...p, details: e.target.value }))}
                style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10,
                  padding: '14px 16px', fontSize: 14, color: '#f0f6fc', outline: 'none',
                  resize: 'vertical', fontFamily: 'inherit' }}/>
              <button type="submit" disabled={status === 'loading'}
                style={{ padding: '15px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  fontSize: 15, fontWeight: 700, color: '#fff',
                  background: `linear-gradient(135deg,${G},${G2})`,
                  opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Sending...' : 'Apply now'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'name',    placeholder: 'Your name',              type: 'text',  required: true  },
                { name: 'email',   placeholder: 'Email address',          type: 'email', required: true  },
                { name: 'company', placeholder: 'Company name',           type: 'text',  required: true  },
              ].map(f => (
                <input key={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                  value={form[f.name as keyof typeof form]}
                  onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                  style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10,
                    padding: '14px 16px', fontSize: 14, color: '#f0f6fc', outline: 'none' }}/>
              ))}
              <textarea placeholder="Origin, destination, commodity, frequency..."
                rows={4} value={form.details}
                onChange={e => setForm(p => ({ ...p, details: e.target.value }))}
                style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10,
                  padding: '14px 16px', fontSize: 14, color: '#f0f6fc', outline: 'none',
                  resize: 'vertical', fontFamily: 'inherit' }}/>
              <button type="submit" disabled={status === 'loading'}
                style={{ padding: '15px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  fontSize: 15, fontWeight: 700, color: '#fff',
                  background: `linear-gradient(135deg,${G},${G2})` }}>
                {status === 'loading' ? 'Sending...' : 'Get a quote'}
              </button>
            </form>
          )}

          <p style={{ fontSize: 12, color: '#484f58', textAlign: 'center', marginTop: 16 }}>
            Questions?{' '}
            <a href="mailto:dispatch@cargofi.io" style={{ color: G, textDecoration: 'none' }}>dispatch@cargofi.io</a>
          </p>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #161b22', padding: '20px clamp(16px,4vw,48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <a href="/" style={{ textDecoration: 'none', fontSize: 17, fontWeight: 900, letterSpacing: '-0.5px' }}>
          Cargo<span style={{ color: G }}>Fi</span>
        </a>
        <span style={{ fontSize: 12, color: '#30363d' }}>© 2026 CargoFi LLC · Texas · Laredo Corridor</span>
        <a href="mailto:dispatch@cargofi.io" style={{ fontSize: 12, color: '#30363d', textDecoration: 'none' }}>
          dispatch@cargofi.io
        </a>
      </footer>
    </main>
  )
}
