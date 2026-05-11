/* Shared hi-fi components — Flash Service canvas */

const HF = {
  dark: '#0f0f0f',
  light: '#fdfcf7',
  acc: '#f5a623',
  accDim: 'rgba(245,166,35,.10)',
  accMid: 'rgba(245,166,35,.25)',
  accGlow: 'rgba(245,166,35,.38)',
  ff:  '"Syne", system-ui, sans-serif',
  ffD: '"Fraunces", serif',
  ffM: '"JetBrains Mono", monospace',
  fmt: n => Math.round(n).toLocaleString('fr-FR'),
  bonus: (dep, cap) => Math.min(dep * 3, cap),
};

/* ── Logo ── */
const Logo = ({ light = true, small = false }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: HF.ff, fontWeight: 800,
    fontSize: small ? 14 : 17, letterSpacing: '-.01em',
    color: light ? HF.light : HF.dark,
  }}>
    <div style={{
      width: small ? 24 : 30, height: small ? 24 : 30, borderRadius: 8,
      background: HF.acc, display: 'grid', placeItems: 'center',
      fontWeight: 900, color: HF.dark, fontSize: small ? 12 : 15,
    }}>F</div>
    Flash<span style={{ color: HF.acc }}>Service</span>
  </div>
);

/* ── Badge mono pill ── */
const Badge = ({ children, dark = true }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center',
    fontFamily: HF.ffM, fontSize: 10, fontWeight: 600,
    letterSpacing: '.14em', textTransform: 'uppercase',
    color: HF.acc, background: HF.accDim,
    border: `1px solid ${HF.accMid}`,
    padding: '5px 14px', borderRadius: 999,
  }}>{children}</div>
);

/* ── Section label ── */
const SectionLabel = ({ children, dark = true }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: HF.ffM, fontSize: 10, fontWeight: 600,
    letterSpacing: '.16em', textTransform: 'uppercase',
    color: dark ? HF.acc : 'rgba(15,15,15,.45)',
    marginBottom: 10,
  }}>
    <span style={{ width: 18, height: 1, background: dark ? HF.acc : 'rgba(15,15,15,.3)', display: 'block' }} />
    {children}
  </div>
);

/* ── Promo code chip ── */
const PromoCode = ({ code }) => (
  <span style={{
    display: 'inline-block',
    fontFamily: HF.ffM, fontWeight: 700, fontSize: 13,
    letterSpacing: '.12em', textTransform: 'uppercase',
    color: HF.acc, background: HF.accDim,
    border: `1px solid ${HF.accMid}`,
    padding: '4px 12px', borderRadius: 6,
  }}>{code}</span>
);

/* ── Buttons ── */
const BtnPrimary = ({ children, dark = false, style: st = {} }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    background: dark ? HF.dark : HF.acc,
    color: dark ? HF.acc : HF.dark,
    fontFamily: HF.ff, fontWeight: 700, fontSize: 14,
    padding: '14px 24px', borderRadius: 999,
    boxShadow: `0 4px 20px ${HF.accGlow}`,
    cursor: 'pointer',
    ...st,
  }}>{children}</div>
);

const BtnGhost = ({ children, light = false, style: st = {} }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    background: 'transparent',
    color: light ? HF.light : HF.acc,
    border: `1.5px solid ${light ? 'rgba(253,252,247,.25)' : HF.accMid}`,
    fontFamily: HF.ff, fontWeight: 600, fontSize: 13,
    padding: '11px 20px', borderRadius: 999,
    cursor: 'pointer',
    ...st,
  }}>{children}</div>
);

/* ── Step number ── */
const StepNum = ({ n, accent = false }) => (
  <div style={{
    width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
    display: 'grid', placeItems: 'center',
    background: accent ? HF.acc : HF.accDim,
    border: `1.5px solid ${accent ? HF.acc : HF.accMid}`,
    fontFamily: HF.ffM, fontWeight: 700, fontSize: 14,
    color: accent ? HF.dark : HF.acc,
    boxShadow: accent ? `0 0 22px ${HF.accGlow}` : 'none',
  }}>{String(n).padStart(2, '0')}</div>
);

/* ── WhatsApp FAB ── */
const FABWa = () => (
  <div style={{
    position: 'absolute', right: 14, bottom: 14,
    width: 50, height: 50, borderRadius: '50%',
    background: '#25d366', display: 'grid', placeItems: 'center',
    boxShadow: '0 4px 20px rgba(37,211,102,.4)',
    cursor: 'pointer',
  }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </div>
);

/* ── Hi-fi range slider (inline style) ── */
const HFSlider = ({ value, min = 500, max = 50000, step = 500, onChange }) => (
  <input type="range" min={min} max={max} step={step} value={value} onChange={onChange}
    style={{ width: '100%', accentColor: HF.acc, height: 4, cursor: 'pointer', display: 'block' }} />
);

/* ── Tip card ── */
const TipCard = ({ num, title, desc, dark = false }) => (
  <div style={{
    display: 'flex', gap: 12, padding: 14,
    background: dark ? 'rgba(255,255,255,.04)' : '#fff',
    border: `1px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(15,15,15,.08)'}`,
    borderRadius: 14,
  }}>
    <div style={{
      width: 28, height: 28, borderRadius: 7, flexShrink: 0,
      background: HF.accDim, display: 'grid', placeItems: 'center',
      fontFamily: HF.ffM, fontSize: 11, fontWeight: 700, color: HF.acc,
    }}>{String(num).padStart(2, '0')}</div>
    <div>
      <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 13, color: dark ? HF.light : HF.dark }}>{title}</div>
      <div style={{ fontFamily: HF.ff, fontSize: 12, color: dark ? 'rgba(253,252,247,.5)' : 'rgba(15,15,15,.5)', lineHeight: 1.45, marginTop: 3 }}>{desc}</div>
    </div>
  </div>
);

Object.assign(window, {
  HF, Logo, Badge, SectionLabel, PromoCode, BtnPrimary, BtnGhost, StepNum, FABWa, HFSlider, TipCard,
  /* stubs kept for backward compat */
  FAB: FABWa,
  Lines: () => null,
  BottomNav: () => null,
  Placeholder: () => null,
  ContactRow: () => null,
});
