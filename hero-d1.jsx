// D1 — Brutal Energy (Black + Yellow, Geist)
const HeroD1 = () => {
  const [amount, setAmount] = React.useState(40000);
  const bonus = Math.min(amount * 3, 130000);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCounter(Math.round(eased * 130000));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const fmt = (n) => n.toLocaleString('fr-FR').replace(/,/g, ' ');

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0a0a0a',
      color: '#fdfcf7',
      fontFamily: '"Geist", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative'
    }}>
      {/* Status bar */}
      <div style={{
        height: 44, padding: '0 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em',
        flexShrink: 0
      }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center', opacity: 0.9 }}>
          <span style={{ fontSize: 11 }}>●●●●</span>
          <span>5G</span>
          <span style={{ width: 22, height: 11, border: '1.2px solid #fdfcf7', borderRadius: 3, position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'absolute', inset: 1, background: '#fdfcf7', borderRadius: 1, width: '70%' }}></span>
          </span>
        </span>
      </div>

      {/* Top bar */}
      <div style={{
        padding: '14px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: '#f5a623',
            display: 'grid', placeItems: 'center', fontWeight: 900, color: '#0a0a0a',
            fontSize: 14, letterSpacing: '-0.05em'
          }}>F</div>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Flash Service</span>
        </div>
        <div style={{
          padding: '6px 12px', border: '1px solid rgba(253,252,247,0.18)',
          borderRadius: 99, fontSize: 11, fontWeight: 500, opacity: 0.8
        }}>FR · TG</div>
      </div>

      {/* Hero content */}
      <div style={{ padding: '8px 22px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 10px 6px 6px',
          background: 'rgba(245,166,35,0.1)',
          border: '1px solid rgba(245,166,35,0.25)',
          borderRadius: 99, alignSelf: 'flex-start',
          fontSize: 11, color: '#f5a623', fontWeight: 500, letterSpacing: '0.02em'
        }}>
          <span style={{
            width: 18, height: 18, borderRadius: 99, background: '#f5a623',
            display: 'grid', placeItems: 'center', color: '#0a0a0a',
            fontSize: 10, fontWeight: 700
          }}>↑</span>
          BONUS 300% · 1ER DÉPÔT
        </div>

        {/* Big number */}
        <div style={{ marginTop: 18 }}>
          <div style={{
            fontSize: 68, lineHeight: 0.92, letterSpacing: '-0.045em',
            fontWeight: 800, color: '#fdfcf7',
            fontVariantNumeric: 'tabular-nums',
            display: 'flex', alignItems: 'baseline', gap: 6
          }}>
            {fmt(counter)}
            <span style={{ fontSize: 16, fontWeight: 600, color: '#f5a623', letterSpacing: '-0.01em' }}>XOF</span>
          </div>
          <div style={{
            marginTop: 14, fontSize: 18, lineHeight: 1.25,
            fontWeight: 500, letterSpacing: '-0.02em',
            color: 'rgba(253,252,247,0.78)', textWrap: 'balance'
          }}>
            Triple ton premier dépôt avec le code <span style={{
              background: '#f5a623', color: '#0a0a0a', padding: '2px 7px',
              borderRadius: 5, fontWeight: 700, letterSpacing: '-0.01em'
            }}>CMD10</span> — direct chez ton agent.
          </div>
        </div>

        {/* Sim card */}
        <div style={{
          marginTop: 22,
          background: 'rgba(253,252,247,0.04)',
          border: '1px solid rgba(253,252,247,0.08)',
          borderRadius: 14, padding: 14
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={{ fontSize: 11, opacity: 0.55, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tu déposes</span>
            <span style={{ fontSize: 16, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>{fmt(amount)} <span style={{ fontSize: 10, opacity: 0.5 }}>XOF</span></span>
          </div>
          <input type="range" min="500" max="50000" step="500" value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            style={{
              width: '100%', accentColor: '#f5a623', height: 4
            }} />
          <div style={{
            marginTop: 12, paddingTop: 12,
            borderTop: '1px dashed rgba(253,252,247,0.12)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'
          }}>
            <span style={{ fontSize: 11, opacity: 0.55, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tu joues avec</span>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#f5a623', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>
              {fmt(amount + bonus)} <span style={{ fontSize: 11, opacity: 0.7 }}>XOF</span>
            </span>
          </div>
        </div>

        {/* CTA */}
        <button style={{
          marginTop: 16, width: '100%', height: 54,
          background: '#f5a623', color: '#0a0a0a',
          border: 'none', borderRadius: 12,
          fontFamily: 'inherit', fontSize: 15, fontWeight: 700,
          letterSpacing: '-0.01em', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
        }}>
          Activer mon code CMD10
          <span style={{ fontSize: 16 }}>→</span>
        </button>

        {/* Social proof */}
        <div style={{
          marginTop: 'auto', paddingTop: 16, paddingBottom: 14,
          display: 'flex', alignItems: 'center', gap: 10
        }}>
          <div style={{ display: 'flex' }}>
            {['#f5a623', '#7a3a12', '#fdfcf7', '#3a3a3a'].map((c, i) => (
              <div key={i} style={{
                width: 22, height: 22, borderRadius: 99,
                background: c, border: '2px solid #0a0a0a',
                marginLeft: i ? -7 : 0
              }}></div>
            ))}
          </div>
          <span style={{ fontSize: 11, opacity: 0.65, lineHeight: 1.3 }}>
            <strong style={{ color: '#fdfcf7', fontWeight: 600 }}>1 240+ parieurs</strong> activés cette semaine
          </span>
        </div>
      </div>
    </div>
  );
};

window.HeroD1 = HeroD1;
