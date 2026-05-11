/* =========================================================
   V2 — Story Onboarding — HI-FI
   Cartes plein écran style story Instagram, 1 message à la fois.
   Ton intime, coach qui parle 1-1.
   ========================================================= */

const V2Mobile = ({ promo, bonusMax, sections }) => {
  const [slide, setSlide] = React.useState(1);
  const total = 5;

  const slides = [
    {
      title: 'Salut toi 👋',
      body: `J'ai quelque chose pour toi. Un code qui peut te rapporter jusqu'à ${HF.fmt(bonusMax)} XOF sur ton premier dépôt.`,
      cta: 'Je veux savoir →',
    },
    {
      title: `Le code, c'est ${promo}.`,
      body: "Tu le mets à l'inscription sur 1xBet. C'est lui qui active les 300%. Sans lui, rien ne se passe.",
      cta: 'Et ensuite ? →',
    },
    {
      title: '4 étapes easy.',
      body: `1. Tu crées ton compte 1xBet\n2. Tu tapes ${promo}\n3. Tu déposes chez moi\n4. Le bonus tombe direct`,
      cta: 'Le dépôt, c\'est important →',
    },
    {
      title: 'Le dépôt chez Flash Service.',
      body: '⚠ Étape critique. Ton premier dépôt DOIT se faire via Flash Service. C\'est ça qui valide ton bonus. Contacte-moi avant.',
      cta: 'Combien je gagne ? →',
      critical: true,
    },
    {
      title: `Jusqu'à ${HF.fmt(bonusMax)} XOF.`,
      body: '300% de ce que tu déposes. Tu mets 20 000, tu joues avec 80 000. Simple. On commence ?',
      cta: `Activer ${promo} →`,
      final: true,
    },
  ];

  const s = slides[slide - 1];

  return (
    <div className="mobile-frame" style={{ background: s.critical ? '#1a0800' : HF.dark, border: 'none', boxShadow: '0 20px 60px rgba(0,0,0,.5)' }}>
      {/* Progress dots */}
      <div style={{ position: 'absolute', top: 16, left: 18, right: 18, display: 'flex', gap: 4, zIndex: 10 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: i < slide ? HF.acc : 'rgba(255,255,255,.2)',
            transition: 'background .3s',
          }} />
        ))}
      </div>

      {/* Header */}
      <div style={{ position: 'absolute', top: 28, left: 18, right: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: HF.acc, display: 'grid', placeItems: 'center', fontWeight: 900, color: HF.dark, fontSize: 16 }}>F</div>
          <div>
            <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 13, color: HF.light }}>Flash Service</div>
            <div style={{ fontFamily: HF.ffM, fontSize: 10, color: '#3eb96b' }}>● en ligne</div>
          </div>
        </div>
        <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(255,255,255,.4)' }}>{slide}/{total}</div>
      </div>

      {/* Slide content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '80px 22px 32px' }}>
        {/* Accent glow on critical */}
        {s.critical && (
          <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, height: 200, background: 'radial-gradient(ellipse, rgba(245,166,35,.15), transparent 70%)', pointerEvents: 'none' }} />
        )}

        <div style={{ position: 'relative', zIndex: 1 }}>
          {s.critical && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: HF.ffM, fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: HF.acc, background: HF.accDim, border: `1px solid ${HF.accMid}`, padding: '4px 12px', borderRadius: 999, marginBottom: 14 }}>
              ⚠ Étape critique
            </div>
          )}
          {s.final && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: HF.ffM, fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#3eb96b', background: 'rgba(62,185,107,.1)', border: '1px solid rgba(62,185,107,.3)', padding: '4px 12px', borderRadius: 999, marginBottom: 14 }}>
              ✓ Prêt à activer
            </div>
          )}

          <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 42, lineHeight: 1, color: s.critical ? HF.acc : HF.light, margin: '0 0 16px' }}>
            {s.title}
          </h2>

          <p style={{ fontFamily: HF.ff, fontSize: 16, lineHeight: 1.55, color: 'rgba(253,252,247,.72)', margin: '0 0 28px', whiteSpace: 'pre-line' }}>
            {s.body}
          </p>

          {/* Code highlight on slide 2 */}
          {slide === 2 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 32, letterSpacing: '.2em', color: HF.acc, background: HF.accDim, border: `2px solid ${HF.accMid}`, padding: '10px 20px', borderRadius: 10, display: 'inline-block' }}>
                {promo}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {s.final
              ? <BtnPrimary style={{ flex: 1, padding: '16px 0' }}>{s.cta}</BtnPrimary>
              : (
                <>
                  {slide > 1 && (
                    <button onClick={() => setSlide(s => s - 1)} style={{ background: 'rgba(255,255,255,.08)', border: 'none', color: HF.light, fontFamily: HF.ff, fontWeight: 600, fontSize: 13, padding: '14px 18px', borderRadius: 999, cursor: 'pointer' }}>←</button>
                  )}
                  <button onClick={() => setSlide(s => Math.min(s + 1, total))} style={{ flex: 1, background: s.critical ? HF.acc : 'rgba(255,255,255,.12)', border: 'none', color: s.critical ? HF.dark : HF.light, fontFamily: HF.ff, fontWeight: 700, fontSize: 14, padding: '14px 20px', borderRadius: 999, cursor: 'pointer' }}>
                    {s.cta}
                  </button>
                </>
              )}
          </div>
        </div>
      </div>

      {sections.contact && <FABWa />}
    </div>
  );
};

/* ── Desktop ── */
const V2Desktop = ({ promo, bonusMax, sections }) => {
  const [slide, setSlide] = React.useState(1);
  const total = 5;

  const steps = [
    { n: '01', label: 'Bienvenue', active: slide >= 1 },
    { n: '02', label: `Code ${promo}`, active: slide >= 2 },
    { n: '03', label: '4 étapes', active: slide >= 3 },
    { n: '04', label: '1er dépôt', active: slide >= 4, critical: true },
    { n: '05', label: 'Bonus', active: slide >= 5 },
  ];

  const slideContent = [
    { title: 'Salut toi 👋', body: `J'ai quelque chose pour toi. Un code qui peut te rapporter jusqu'à ${HF.fmt(bonusMax)} XOF sur ton premier dépôt. 300% de ce que tu mets.` },
    { title: `Le code : ${promo}`, body: `Tu le saisit pendant ton inscription sur 1xBet. Ce code est exclusif à Flash Service. Sans lui, le bonus de 300% n'est pas activé.` },
    { title: '4 étapes, easy.', body: `1. Inscription sur 1xBet (numéro togolais, XOF)\n2. Code ${promo} dans le champ dédié\n3. 1er dépôt CHEZ Flash Service\n4. Bonus crédité direct sur ton compte` },
    { title: '⚠ Étape critique.', body: 'Ton premier dépôt DOIT se faire via Flash Service. C\'est la condition pour valider le bonus. Contacte-moi avant de déposer — c\'est gratuit et ça prend 2 minutes.' },
    { title: `Jusqu'à ${HF.fmt(bonusMax)} XOF.`, body: '300% de ton premier dépôt. Tu mets 43 000 XOF, tu joues avec 172 000 XOF. On commence ?' },
  ][slide - 1];

  return (
    <div className="desktop-frame" style={{ border: 'none', boxShadow: '0 24px 80px rgba(0,0,0,.4)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ height: 34, background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6 }}>
        {['#ff5f57','#febc2e','#28c840'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        <div style={{ marginLeft: 12, fontFamily: HF.ffM, fontSize: 11, color: 'rgba(255,255,255,.3)', background: 'rgba(255,255,255,.06)', padding: '3px 16px', borderRadius: 4, flex: 1, maxWidth: 360 }}>flashservice.tg</div>
      </div>

      <div className="desktop-body" style={{ background: HF.dark, display: 'grid', gridTemplateColumns: '1fr 2fr', height: 'calc(100% - 34px)', scrollbarWidth: 'none' }}>
        {/* Left: story map */}
        <div style={{ borderRight: '1px solid rgba(255,255,255,.07)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Logo />
          <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 20, marginBottom: 16 }}>Ton parcours</div>
          {steps.map((s, i) => (
            <button key={i} onClick={() => setSlide(i + 1)} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 14px', borderRadius: 12, cursor: 'pointer', border: 'none',
              background: slide === i + 1 ? (s.critical ? HF.accDim : 'rgba(255,255,255,.08)') : 'transparent',
              transition: 'background .2s',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                display: 'grid', placeItems: 'center',
                background: s.active ? (s.critical ? HF.acc : HF.accDim) : 'rgba(255,255,255,.06)',
                fontFamily: HF.ffM, fontSize: 12, fontWeight: 700,
                color: s.active ? (s.critical ? HF.dark : HF.acc) : 'rgba(255,255,255,.25)',
              }}>{s.active ? (slide > i + 1 ? '✓' : s.n) : s.n}</div>
              <span style={{ fontFamily: HF.ff, fontSize: 13, fontWeight: 600, color: slide === i + 1 ? HF.light : 'rgba(255,255,255,.4)' }}>{s.label}</span>
            </button>
          ))}
          <div style={{ marginTop: 'auto' }}>
            <div style={{ height: 1, background: 'rgba(255,255,255,.07)', marginBottom: 20 }} />
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: '#25d366', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 12, padding: '9px 16px', borderRadius: 999 }}>WhatsApp</div>
              <div style={{ background: '#0088cc', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 12, padding: '9px 16px', borderRadius: 999 }}>Telegram</div>
            </div>
          </div>
        </div>

        {/* Right: story card */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px 56px 48px' }}>
          {/* progress */}
          <div style={{ position: 'absolute', top: 28, left: 56, right: 56, display: 'flex', gap: 6 }}>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i < slide ? HF.acc : 'rgba(255,255,255,.15)' }} />
            ))}
          </div>

          <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 58, lineHeight: 1, color: slide === 4 ? HF.acc : HF.light, margin: '0 0 20px' }}>
            {slideContent.title}
          </div>
          <p style={{ fontFamily: HF.ff, fontSize: 18, lineHeight: 1.65, color: 'rgba(253,252,247,.65)', margin: '0 0 36px', maxWidth: 560, whiteSpace: 'pre-line' }}>
            {slideContent.body}
          </p>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            {slide > 1 && (
              <button onClick={() => setSlide(s => s - 1)} style={{ background: 'rgba(255,255,255,.08)', border: 'none', color: HF.light, fontFamily: HF.ff, fontWeight: 600, fontSize: 14, padding: '14px 22px', borderRadius: 999, cursor: 'pointer' }}>← Précédent</button>
            )}
            {slide < total
              ? <BtnPrimary dark={slide === 4} style={{ fontSize: 15, padding: '15px 32px' }} onClick={() => setSlide(s => s + 1)}>Suivant →</BtnPrimary>
              : <BtnPrimary style={{ fontSize: 15, padding: '15px 32px' }}>Activer {promo} →</BtnPrimary>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { V2Mobile, V2Desktop });
