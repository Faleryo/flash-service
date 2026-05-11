// D3 — Sticker Pack (Yellow dominant + Black + Boldonse display)
const HeroD3 = () => {
  const [amount, setAmount] = React.useState(40000);
  const bonus = Math.min(amount * 3, 130000);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1500;
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
      background: '#f5a623',
      color: '#0a0a0a',
      fontFamily: '"Geist", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative'
    }}>
      {/* Diagonal stripe pattern at top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 220,
        background: 'repeating-linear-gradient(135deg, transparent 0 18px, rgba(10,10,10,0.04) 18px 19px)',
        pointerEvents: 'none'
      }}></div>

      {/* Status bar */}
      <div style={{
        height: 44, padding: '0 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em',
        flexShrink: 0, position: 'relative', zIndex: 2
      }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: 11 }}>●●●●</span>
          <span>5G</span>
          <span style={{ width: 22, height: 11, border: '1.2px solid #0a0a0a', borderRadius: 3, position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'absolute', inset: 1, background: '#0a0a0a', borderRadius: 1, width: '70%' }}></span>
          </span>
        </span>
      </div>

      {/* Top bar */}
      <div style={{
        padding: '12px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexShrink: 0, position: 'relative', zIndex: 2
      }}>
        <div style={{
          padding: '6px 10px 6px 6px',
          background: '#0a0a0a', color: '#f5a623',
          borderRadius: 99,
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 12, fontWeight: 700, letterSpacing: '-0.01em'
        }}>
          <span style={{
            width: 20, height: 20, borderRadius: 99, background: '#f5a623',
            color: '#0a0a0a', display: 'grid', placeItems: 'center',
            fontSize: 11, fontWeight: 900
          }}>F</span>
          FLASH SERVICE
        </div>
        <div style={{
          width: 36, height: 36, borderRadius: 99, background: '#0a0a0a',
          display: 'grid', placeItems: 'center', color: '#f5a623',
          fontSize: 14
        }}>☰</div>
      </div>

      {/* Sticker badges floating */}
      <div style={{
        position: 'absolute', top: 96, right: -18,
        background: '#0a0a0a', color: '#f5a623',
        padding: '6px 24px 6px 14px',
        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
        transform: 'rotate(8deg)',
        zIndex: 3, borderRadius: 4
      }}>BONUS · 300% · 300% · 300%</div>

      <div style={{
        position: 'absolute', top: 280, left: -10,
        background: '#fdfcf7', color: '#0a0a0a',
        padding: '4px 14px',
        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
        transform: 'rotate(-6deg)',
        zIndex: 3, borderRadius: 4,
        border: '1.5px solid #0a0a0a'
      }}>★ AGENT VÉRIFIÉ</div>

      {/* Hero content */}
      <div style={{ padding: '12px 22px 0', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>

        {/* Display: massive condensed */}
        <h1 style={{
          margin: '8px 0 0',
          fontFamily: '"Boldonse", "Geist", system-ui',
          fontSize: 76, lineHeight: 0.85,
          letterSpacing: '-0.02em',
          fontWeight: 400,
          color: '#0a0a0a',
          textTransform: 'uppercase'
        }}>
          Vas-y<br />Easy.
        </h1>

        <div style={{
          marginTop: 14, fontSize: 14, lineHeight: 1.4,
          color: '#0a0a0a', fontWeight: 500, maxWidth: 270
        }}>
          Tu déposes chez moi, je triple ton ticket. Code <strong>CMD10</strong>, point.
        </div>

        {/* Big counter card */}
        <div style={{
          marginTop: 18,
          background: '#0a0a0a', color: '#f5a623',
          borderRadius: 14, padding: 16,
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute', top: 12, right: 12,
            fontSize: 9, color: '#fdfcf7', opacity: 0.5,
            fontWeight: 600, letterSpacing: '0.1em'
          }}>JUSQU'À</div>
          <div style={{
            fontFamily: '"Boldonse", "Geist", system-ui',
            fontSize: 48, lineHeight: 0.95,
            letterSpacing: '-0.03em',
            fontWeight: 400,
            fontVariantNumeric: 'tabular-nums',
            color: '#f5a623'
          }}>{fmt(counter)}</div>
          <div style={{
            marginTop: 6, fontSize: 11, color: '#fdfcf7',
            opacity: 0.7, letterSpacing: '0.08em', fontWeight: 600
          }}>XOF DE BONUS · 1ER DÉPÔT</div>

          {/* Mini sim */}
          <div style={{
            marginTop: 14, paddingTop: 12,
            borderTop: '1px dashed rgba(245,166,35,0.3)'
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontSize: 11, color: '#fdfcf7', opacity: 0.7, marginBottom: 6
            }}>
              <span>Si tu déposes {fmt(amount)}</span>
              <span style={{ color: '#f5a623', fontWeight: 700, opacity: 1 }}>+{fmt(bonus)}</span>
            </div>
            <input type="range" min="500" max="50000" step="500" value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              style={{ width: '100%', accentColor: '#f5a623', height: 4 }} />
          </div>
        </div>

        {/* CTA — sticker style */}
        <button style={{
          marginTop: 14, width: '100%', height: 56,
          background: '#0a0a0a', color: '#f5a623',
          border: 'none', borderRadius: 12,
          fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
          letterSpacing: '-0.01em', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 8px 0 18px',
          boxShadow: '4px 4px 0 #0a0a0a'
        }}>
          <span>Activer code CMD10</span>
          <span style={{
            width: 40, height: 40, borderRadius: 8,
            background: '#f5a623', color: '#0a0a0a',
            display: 'grid', placeItems: 'center',
            fontSize: 18, fontWeight: 900
          }}>→</span>
        </button>

        <div style={{
          marginTop: 'auto', paddingTop: 14, paddingBottom: 14,
          display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: '#0a0a0a', display: 'inline-block' }}></span>
          <span>1 240 parieurs activés cette semaine</span>
        </div>
      </div>
    </div>
  );
};

window.HeroD3 = HeroD3;
