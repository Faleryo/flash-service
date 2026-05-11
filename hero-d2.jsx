// D2 — Cream Editorial (Cream + Orange + Fraunces display)
const HeroD2 = () => {
  const [amount, setAmount] = React.useState(40000);
  const bonus = Math.min(amount * 3, 130000);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1600;
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
      background: '#fdfcf7',
      color: '#1a1612',
      fontFamily: '"Geist", system-ui, sans-serif',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative'
    }}>
      {/* Subtle paper grain */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 20% 10%, rgba(245,166,35,0.06), transparent 50%), radial-gradient(circle at 90% 80%, rgba(122,58,18,0.04), transparent 50%)'
      }}></div>

      {/* Status bar */}
      <div style={{
        height: 44, padding: '0 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em',
        flexShrink: 0, position: 'relative', zIndex: 1
      }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: 11 }}>●●●●</span>
          <span>5G</span>
          <span style={{ width: 22, height: 11, border: '1.2px solid #1a1612', borderRadius: 3, position: 'relative', display: 'inline-block' }}>
            <span style={{ position: 'absolute', inset: 1, background: '#1a1612', borderRadius: 1, width: '70%' }}></span>
          </span>
        </span>
      </div>

      {/* Top bar */}
      <div style={{
        padding: '14px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexShrink: 0, position: 'relative', zIndex: 1
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 99, background: '#1a1612',
            display: 'grid', placeItems: 'center', fontWeight: 900, color: '#f5a623',
            fontSize: 14, letterSpacing: '-0.05em',
            fontFamily: '"Fraunces", serif', fontStyle: 'italic'
          }}>f</div>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Flash Service</span>
        </div>
        <div style={{
          padding: '6px 10px', background: '#1a1612', color: '#fdfcf7',
          borderRadius: 99, fontSize: 10, fontWeight: 600, letterSpacing: '0.04em'
        }}>AGENT · LOMÉ</div>
      </div>

      {/* Hero content */}
      <div style={{ padding: '20px 22px 0', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>

        {/* Editorial line */}
        <div style={{
          fontSize: 11, fontWeight: 500, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#7a3a12',
          display: 'flex', alignItems: 'center', gap: 10
        }}>
          <span style={{ width: 20, height: 1, background: '#7a3a12' }}></span>
          Bonus de bienvenue · N°01
        </div>

        {/* Display headline */}
        <h1 style={{
          margin: '14px 0 0',
          fontFamily: '"Fraunces", serif',
          fontSize: 46, lineHeight: 0.92,
          letterSpacing: '-0.035em',
          fontWeight: 400,
          color: '#1a1612',
          textWrap: 'balance'
        }}>
          Triple ton<br />
          <em style={{ fontWeight: 300, color: '#7a3a12' }}>premier dépôt</em><br />
          easy.
        </h1>

        <div style={{
          marginTop: 14, fontSize: 14, lineHeight: 1.45,
          color: 'rgba(26,22,18,0.7)', maxWidth: 280
        }}>
          Jusqu'à <strong style={{ color: '#1a1612', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{fmt(counter)} XOF</strong> de bonus avec le code <span style={{
            fontFamily: '"Fraunces", serif', fontStyle: 'italic',
            color: '#7a3a12', fontWeight: 500
          }}>CMD10</span>.
        </div>

        {/* Sim row, editorial style */}
        <div style={{
          marginTop: 22, padding: '16px 0',
          borderTop: '1px solid rgba(26,22,18,0.12)',
          borderBottom: '1px solid rgba(26,22,18,0.12)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={{ fontSize: 10, color: '#7a3a12', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Dépôt</span>
            <span style={{
              fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 500,
              fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em'
            }}>{fmt(amount)} <span style={{ fontSize: 11, opacity: 0.5 }}>XOF</span></span>
          </div>
          <input type="range" min="500" max="50000" step="500" value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            style={{ width: '100%', accentColor: '#7a3a12', height: 4 }} />
          <div style={{
            marginTop: 14, display: 'flex',
            justifyContent: 'space-between', alignItems: 'flex-end'
          }}>
            <div>
              <div style={{ fontSize: 10, color: '#7a3a12', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Tu joues avec</div>
              <div style={{
                fontFamily: '"Fraunces", serif', fontSize: 34, fontWeight: 500,
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.035em',
                color: '#1a1612', lineHeight: 1, marginTop: 4
              }}>{fmt(amount + bonus)}<span style={{ fontSize: 12, opacity: 0.5, marginLeft: 4 }}>XOF</span></div>
            </div>
            <div style={{
              fontSize: 10, padding: '4px 8px',
              background: '#f5a623', color: '#1a1612',
              borderRadius: 4, fontWeight: 700, letterSpacing: '0.02em'
            }}>+300%</div>
          </div>
        </div>

        {/* CTA */}
        <button style={{
          marginTop: 18, width: '100%', height: 52,
          background: '#1a1612', color: '#fdfcf7',
          border: 'none', borderRadius: 99,
          fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
          letterSpacing: '-0.01em', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
        }}>
          <span style={{
            background: '#f5a623', color: '#1a1612',
            padding: '3px 7px', borderRadius: 4, fontSize: 11,
            fontWeight: 700, letterSpacing: '0.02em'
          }}>CMD10</span>
          Activer mon bonus
        </button>

        <div style={{
          marginTop: 'auto', paddingTop: 14, paddingBottom: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: 11, color: 'rgba(26,22,18,0.6)'
        }}>
          <span>★★★★★ <span style={{ marginLeft: 4 }}>1 240 parieurs</span></span>
          <span style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic' }}>depuis 2023</span>
        </div>
      </div>
    </div>
  );
};

window.HeroD2 = HeroD2;
