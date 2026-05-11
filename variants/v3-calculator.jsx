/* =========================================================
   V3 — Calculator First — HI-FI
   Le simulateur EST le héros. Slider géant, gains live.
   Tutoriel et FAQ en onglets sous le calculateur.
   Ambiance : outil pratique, light-first.
   ========================================================= */

const V3Mobile = ({ promo, bonusMax, sections }) => {
  const [amount, setAmount] = React.useState(15000);
  const [tab, setTab] = React.useState('tuto');
  const bon = HF.bonus(amount, bonusMax);

  return (
    <div className="mobile-frame" style={{ background: HF.light, border: 'none', boxShadow: '0 20px 60px rgba(0,0,0,.35)' }}>
      <div className="mobile-scroll" style={{ paddingTop: 0, scrollbarWidth: 'none' }}>

        {/* NAV */}
        <div style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: HF.light, borderBottom: '1px solid rgba(15,15,15,.07)', position: 'sticky', top: 0, zIndex: 10 }}>
          <Logo light={false} />
          <PromoCode code={promo} />
        </div>

        {/* CALCULATOR HERO */}
        {sections.simulator && (
          <div style={{ background: HF.dark, padding: '24px 18px 28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${HF.accDim} 1px, transparent 1px), linear-gradient(90deg, ${HF.accDim} 1px, transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <SectionLabel>Calculateur de bonus</SectionLabel>
              <div style={{ fontFamily: HF.ff, fontWeight: 600, fontSize: 16, color: 'rgba(253,252,247,.65)', marginBottom: 20 }}>
                Tu déposes combien ?
              </div>

              {/* Big deposit display */}
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 56, lineHeight: .9, color: HF.light }}>
                  {HF.fmt(amount)}
                </div>
                <div style={{ fontFamily: HF.ffM, fontSize: 12, color: 'rgba(253,252,247,.4)', marginTop: 6 }}>XOF déposés</div>
              </div>

              <HFSlider value={amount} onChange={e => setAmount(+e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.3)', marginTop: 4 }}>
                <span>500</span><span>{HF.fmt(50000)}</span>
              </div>

              {/* Quick picks */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginTop: 14 }}>
                {[5000, 15000, 30000, 50000].map(v => (
                  <button key={v} onClick={() => setAmount(v)} style={{
                    padding: '7px 0', borderRadius: 8, border: 'none', cursor: 'pointer',
                    background: amount === v ? HF.acc : 'rgba(255,255,255,.07)',
                    color: amount === v ? HF.dark : 'rgba(255,255,255,.6)',
                    fontFamily: HF.ff, fontWeight: 600, fontSize: 11,
                  }}>{HF.fmt(v / 1000)}k</button>
                ))}
              </div>

              {/* Result */}
              <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 0, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14 }}>
                <div style={{ padding: '16px 14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>Ton bonus</div>
                  <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, lineHeight: 1, color: HF.acc }}>+{HF.fmt(bon)}</div>
                  <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.3)', marginTop: 4 }}>XOF</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,.07)' }} />
                <div style={{ padding: '16px 14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>Total dispo</div>
                  <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, lineHeight: 1, color: HF.light }}>{HF.fmt(amount + bon)}</div>
                  <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.3)', marginTop: 4 }}>XOF</div>
                </div>
              </div>

              {bon >= bonusMax && (
                <div style={{ marginTop: 10, fontFamily: HF.ffM, fontSize: 11, color: HF.acc, textAlign: 'center' }}>🎯 Bonus plafonné à {HF.fmt(bonusMax)} XOF — c'est le max.</div>
              )}

              <BtnPrimary style={{ width: '100%', padding: '16px 0', marginTop: 16 }}>
                Déposer {HF.fmt(amount)} XOF chez Flash Service →
              </BtnPrimary>
            </div>
          </div>
        )}

        {/* TABS */}
        <div style={{ background: HF.light }}>
          {/* Tab bar */}
          <div style={{ display: 'flex', borderBottom: '2px solid rgba(15,15,15,.08)', padding: '0 18px' }}>
            {[
              { id: 'tuto', label: 'Comment ça marche', show: sections.tutorial },
              { id: 'tips', label: 'Conseils', show: sections.tips },
              { id: 'faq', label: 'FAQ', show: sections.faq },
            ].filter(t => t.show).map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                padding: '14px 16px', border: 'none', background: 'transparent', cursor: 'pointer',
                fontFamily: HF.ff, fontWeight: 700, fontSize: 12,
                color: tab === t.id ? HF.dark : 'rgba(15,15,15,.4)',
                borderBottom: `2px solid ${tab === t.id ? HF.acc : 'transparent'}`,
                marginBottom: -2,
              }}>{t.label}</button>
            ))}
          </div>

          {/* Tab: Tutorial */}
          {tab === 'tuto' && sections.tutorial && (
            <div style={{ padding: '20px 18px 32px' }}>
              {[
                ['01', 'Inscris-toi sur 1xBet', 'Numéro togolais, devise XOF. 2 minutes top.'],
                ['02', `Code ${promo}`, 'Champ "Code promo" à l\'inscription. Indispensable.'],
                ['03', '1er dépôt chez Flash Service', '⚠ Étape critique — passe par moi pour valider ton bonus.'],
                ['04', 'Bonus crédité !', '300% sur ton dépôt, direct sur ton compte 1xBet.'],
              ].map(([n, t, d], i) => (
                <div key={i} style={{ display: 'flex', gap: 14, paddingBottom: 18, borderBottom: i < 3 ? '1px solid rgba(15,15,15,.07)' : 'none', marginBottom: 18 }}>
                  <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 18, color: n === '03' ? HF.acc : 'rgba(15,15,15,.2)', width: 32, flexShrink: 0 }}>{n}</div>
                  <div>
                    <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 14, color: n === '03' ? HF.acc : HF.dark, marginBottom: 3 }}>{t}</div>
                    <div style={{ fontFamily: HF.ff, fontSize: 12, color: 'rgba(15,15,15,.55)', lineHeight: 1.5 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab: Tips */}
          {tab === 'tips' && sections.tips && (
            <div style={{ padding: '20px 18px 32px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <TipCard num={1} title="Combos 3–5 sélections" desc="Le sweet spot du wager. Plus = risque inutile." />
              <TipCard num={2} title="Cotes minimum 1.40" desc="Obligation 1xBet pour valider le wager." />
              <TipCard num={3} title="Wager 5× progressif" desc="Mise 5× le bonus avant de retirer." />
              <TipCard num={4} title="Bankroll ≤ 15% / pari" desc="Discipline = longévité." />
            </div>
          )}

          {/* Tab: FAQ */}
          {tab === 'faq' && sections.faq && (
            <div style={{ padding: '20px 18px 32px' }}>
              {[
                ["C'est quoi CMD10 ?", "Code d'affiliation exclusif. Active le bonus 300% à l'inscription."],
                ["Pourquoi passer par Flash Service ?", "C'est la condition pour valider le bonus. Obligatoire."],
                ["Montant minimum ?", "500 XOF. Plafond bonus : " + HF.fmt(bonusMax) + " XOF."],
                ["C'est rapide ?", "L'inscription prend 2 minutes. Le bonus est crédité dans les 5 minutes."],
              ].map(([q, a], i, arr) => (
                <div key={i} style={{ borderTop: '1px solid rgba(15,15,15,.08)', padding: '14px 0', ...(i === arr.length - 1 ? { borderBottom: '1px solid rgba(15,15,15,.08)' } : {}) }}>
                  <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 14, color: HF.dark, marginBottom: 5 }}>{q}</div>
                  <div style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.55)', lineHeight: 1.5 }}>{a}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {sections.contact && <FABWa />}
    </div>
  );
};

/* ── Desktop ── */
const V3Desktop = ({ promo, bonusMax, sections }) => {
  const [amount, setAmount] = React.useState(15000);
  const [tab, setTab] = React.useState('tuto');
  const bon = HF.bonus(amount, bonusMax);

  return (
    <div className="desktop-frame" style={{ border: 'none', boxShadow: '0 24px 80px rgba(0,0,0,.35)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ height: 34, background: '#f0ede8', borderBottom: '1px solid rgba(15,15,15,.1)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6 }}>
        {['#ff5f57','#febc2e','#28c840'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        <div style={{ marginLeft: 12, fontFamily: HF.ffM, fontSize: 11, color: 'rgba(15,15,15,.35)', background: '#fff', border: '1px solid rgba(15,15,15,.12)', padding: '3px 16px', borderRadius: 4, flex: 1, maxWidth: 360 }}>flashservice.tg</div>
      </div>

      <div className="desktop-body" style={{ background: HF.light, scrollbarWidth: 'none' }}>
        {/* NAV */}
        <div style={{ padding: '14px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: HF.light, borderBottom: '1px solid rgba(15,15,15,.07)', position: 'sticky', top: 0, zIndex: 10 }}>
          <Logo light={false} />
          <div style={{ display: 'flex', gap: 20 }}>
            {['Tutoriel', 'Conseils', 'FAQ'].map(l => (
              <span key={l} style={{ fontFamily: HF.ff, fontSize: 13, fontWeight: 600, color: 'rgba(15,15,15,.45)', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
          <BtnPrimary style={{ fontSize: 13, padding: '10px 22px' }}>Activer {promo} →</BtnPrimary>
        </div>

        {/* MAIN 2-col */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 'calc(100% - 62px)' }}>
          {/* Left: Big calculator */}
          {sections.simulator && (
            <div style={{ background: HF.dark, padding: '36px 48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${HF.accDim} 1px, transparent 1px), linear-gradient(90deg, ${HF.accDim} 1px, transparent 1px)`, backgroundSize: '56px 56px', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <SectionLabel>Calculateur de bonus</SectionLabel>
                <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 36, color: HF.light, margin: '0 0 28px', lineHeight: 1.05 }}>
                  Tu déposes combien ?
                </h2>

                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                  <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 72, lineHeight: .88, color: HF.light, textShadow: `0 0 60px ${HF.accGlow}` }}>
                    {HF.fmt(amount)}
                  </div>
                  <div style={{ fontFamily: HF.ffM, fontSize: 12, color: 'rgba(253,252,247,.4)', marginTop: 8 }}>XOF déposés</div>
                </div>

                <HFSlider value={amount} onChange={e => setAmount(+e.target.value)} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.3)', marginTop: 6, marginBottom: 16 }}>
                  <span>500 XOF</span><span>50 000 XOF</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 24 }}>
                  {[5000, 15000, 30000, 50000].map(v => (
                    <button key={v} onClick={() => setAmount(v)} style={{
                      padding: '9px 0', borderRadius: 8, border: 'none', cursor: 'pointer',
                      background: amount === v ? HF.acc : 'rgba(255,255,255,.07)',
                      color: amount === v ? HF.dark : 'rgba(255,255,255,.6)',
                      fontFamily: HF.ff, fontWeight: 600, fontSize: 12,
                    }}>{HF.fmt(v / 1000)}k</button>
                  ))}
                </div>

                <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr' }}>
                    <div style={{ padding: '20px 24px' }}>
                      <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>Ton bonus</div>
                      <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 36, color: HF.acc, lineHeight: 1 }}>+{HF.fmt(bon)}</div>
                      <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.3)', marginTop: 4 }}>XOF</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,.07)' }} />
                    <div style={{ padding: '20px 24px' }}>
                      <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>Total disponible</div>
                      <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 36, color: HF.light, lineHeight: 1 }}>{HF.fmt(amount + bon)}</div>
                      <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.3)', marginTop: 4 }}>XOF</div>
                    </div>
                  </div>
                </div>

                <BtnPrimary style={{ width: '100%', padding: '16px 0', marginTop: 20 }}>
                  Déposer {HF.fmt(amount)} XOF chez Flash Service →
                </BtnPrimary>
              </div>
            </div>
          )}

          {/* Right: Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', borderBottom: '2px solid rgba(15,15,15,.08)', padding: '0 32px' }}>
              {[
                { id: 'tuto', label: 'Comment ça marche', show: sections.tutorial },
                { id: 'tips', label: 'Conseils', show: sections.tips },
                { id: 'faq', label: 'FAQ', show: sections.faq },
              ].filter(t => t.show).map(t => (
                <button key={t.id} onClick={() => setTab(t.id)} style={{
                  padding: '16px 18px', border: 'none', background: 'transparent', cursor: 'pointer',
                  fontFamily: HF.ff, fontWeight: 700, fontSize: 13,
                  color: tab === t.id ? HF.dark : 'rgba(15,15,15,.4)',
                  borderBottom: `2px solid ${tab === t.id ? HF.acc : 'transparent'}`,
                  marginBottom: -2,
                }}>{t.label}</button>
              ))}
            </div>

            <div style={{ padding: '28px 32px', flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
              {tab === 'tuto' && sections.tutorial && (
                <div>
                  {[
                    ['01', 'Inscris-toi sur 1xBet', 'Numéro togolais, devise XOF. 2 minutes.'],
                    ['02', `Code ${promo}`, 'Champ "Code promo". Indispensable.'],
                    ['03', '1er dépôt CHEZ Flash Service', '⚠ Étape critique — contacte-moi avant.'],
                    ['04', 'Bonus crédité !', '300% sur ton dépôt.'],
                  ].map(([n, t, d], i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 20, borderBottom: i < 3 ? '1px solid rgba(15,15,15,.08)' : 'none', marginBottom: 20 }}>
                      <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 22, color: n === '03' ? HF.acc : 'rgba(15,15,15,.18)', width: 36, flexShrink: 0 }}>{n}</div>
                      <div>
                        <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 15, color: n === '03' ? HF.acc : HF.dark, marginBottom: 4 }}>{t}</div>
                        <div style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.55)', lineHeight: 1.5 }}>{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {tab === 'tips' && sections.tips && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <TipCard num={1} title="Combos 3–5 sélections" desc="Le sweet spot du wager." />
                  <TipCard num={2} title="Cotes minimum 1.40" desc="Obligation 1xBet pour valider le wager." />
                  <TipCard num={3} title="Wager 5× progressif" desc="Mise 5× le bonus avant de retirer." />
                  <TipCard num={4} title="Bankroll ≤ 15% / pari" desc="Discipline = longévité." />
                </div>
              )}
              {tab === 'faq' && sections.faq && (
                <div>
                  {[
                    ["C'est quoi CMD10 ?", "Code d'affiliation exclusif. Active le bonus 300%."],
                    ["Pourquoi Flash Service ?", "C'est la condition pour valider le bonus."],
                    ["Montant minimum ?", "500 XOF. Plafond : " + HF.fmt(bonusMax) + " XOF."],
                    ["Délai pour le bonus ?", "Moins de 5 minutes après le dépôt."],
                    ["Wager c'est quoi ?", "Miser 5× le montant du bonus avant de retirer."],
                  ].map(([q, a], i) => (
                    <div key={i} style={{ borderTop: '1px solid rgba(15,15,15,.08)', padding: '14px 0' }}>
                      <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 14, color: HF.dark, marginBottom: 5 }}>{q}</div>
                      <div style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.55)', lineHeight: 1.5 }}>{a}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {sections.contact && <FABWa />}
    </div>
  );
};

Object.assign(window, { V3Mobile, V3Desktop });
