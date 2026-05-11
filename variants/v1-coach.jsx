/* =========================================================
   V1 — Coach Direct — HI-FI
   Hero compteur géant + simulateur inline + timeline verticale
   Ambiance fintech énergique, dark-first
   ========================================================= */

const V1Mobile = ({ promo, bonusMax, sections }) => {
  const [amount, setAmount] = React.useState(15000);
  const bon = HF.bonus(amount, bonusMax);

  return (
    <div className="mobile-frame" style={{ background: HF.dark, border: 'none', boxShadow: '0 20px 60px rgba(0,0,0,.5)' }}>
      <div className="mobile-scroll" style={{ paddingTop: 0, scrollbarWidth: 'none' }}>

        {/* NAV */}
        <div style={{
          padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(15,15,15,.9)', backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${HF.accDim}`,
        }}>
          <Logo />
          <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.5)', border: '1px solid rgba(253,252,247,.15)', padding: '4px 10px', borderRadius: 999 }}>FR · TG</div>
        </div>

        {/* HERO */}
        {sections.hero && (
          <div style={{ padding: '22px 18px 24px', background: HF.dark, position: 'relative', overflow: 'hidden' }}>
            {/* grid bg */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: `linear-gradient(${HF.accDim} 1px, transparent 1px), linear-gradient(90deg, ${HF.accDim} 1px, transparent 1px)`,
              backgroundSize: '40px 40px' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Badge>⚡ Agent officiel 1xBet · Togo</Badge>
              <div style={{ marginTop: 18, textAlign: 'center' }}>
                <div style={{ fontFamily: HF.ffM, fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(253,252,247,.4)', marginBottom: 6 }}>
                  Ton bonus de bienvenue
                </div>
                <div style={{
                  fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700,
                  fontSize: 68, lineHeight: .9, color: HF.light,
                  textShadow: `0 0 60px ${HF.accGlow}`,
                  display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10,
                }}>
                  {HF.fmt(bonusMax)}
                  <span style={{ fontSize: 20, color: HF.acc }}>XOF</span>
                </div>
                <div style={{ fontFamily: HF.ffM, fontSize: 11, color: 'rgba(253,252,247,.38)', marginTop: 8 }}>
                  300% du 1er dépôt · code <span style={{ color: HF.acc, fontWeight: 700 }}>{promo}</span>
                </div>
              </div>

              {/* Mini sim */}
              <div style={{
                marginTop: 20, background: 'rgba(255,255,255,.045)',
                border: '1px solid rgba(255,255,255,.09)', borderRadius: 16, padding: '16px 18px',
              }}>
                <div style={{ fontFamily: HF.ffM, fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(253,252,247,.3)', marginBottom: 10 }}>
                  Simule ton bonus en direct
                </div>
                <HFSlider value={amount} onChange={e => setAmount(+e.target.value)} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <div>
                    <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.35)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Dépôt</div>
                    <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 16, color: 'rgba(253,252,247,.7)' }}>{HF.fmt(amount)}</div>
                  </div>
                  <div style={{ color: 'rgba(253,252,247,.2)', fontSize: 18 }}>→</div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: HF.ffM, fontSize: 9, color: HF.acc, textTransform: 'uppercase', letterSpacing: '.08em' }}>Tu joues avec</div>
                    <div style={{ fontFamily: HF.ffM, fontWeight: 800, fontSize: 22, color: HF.acc }}>{HF.fmt(amount + bon)}</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <BtnPrimary style={{ width: '100%', padding: '16px 0' }}>
                  Activer mon code {promo} →
                </BtnPrimary>
              </div>

              {/* Social proof */}
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex' }}>
                  {['#f5a623','#7a3a12','#fdfcf7','#3a3a3a'].map((c, i) => (
                    <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: `2px solid ${HF.dark}`, marginLeft: i ? -7 : 0 }} />
                  ))}
                </div>
                <span style={{ fontFamily: HF.ff, fontSize: 11, color: 'rgba(253,252,247,.5)' }}>
                  <strong style={{ color: HF.light }}>1 240+</strong> parieurs activés cette semaine
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TUTORIEL */}
        {sections.tutorial && (
          <div style={{ padding: '24px 18px', background: HF.light }}>
            <SectionLabel dark={false}>Comment ça marche</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 32, lineHeight: 1.05, color: HF.dark, margin: '0 0 24px' }}>
              4 étapes, c'est tout.
            </h2>
            <div style={{ position: 'relative', paddingLeft: 60 }}>
              <div style={{ position: 'absolute', left: 22, top: 8, bottom: 8, width: 2, background: `linear-gradient(to bottom, ${HF.acc}, ${HF.accDim})` }} />
              {[
                ['Inscris-toi sur 1xBet', 'Numéro togolais, devise XOF. 2 minutes.'],
                [`Entre le code ${promo}`, 'Champ "Code promo" à l\'inscription. Obligatoire.'],
                ['1er dépôt CHEZ Flash Service', '⚠ Étape critique — passe par moi pour valider le bonus.'],
                ['Bonus crédité, prêt à jouer !', '300% sur ton dépôt, jusqu\'à ' + HF.fmt(bonusMax) + ' XOF.'],
              ].map(([t, d], i) => (
                <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 22, position: 'relative', alignItems: 'flex-start' }}>
                  <div style={{ position: 'absolute', left: -60, top: 0 }}>
                    <StepNum n={i + 1} accent={i === 2} />
                  </div>
                  <div style={{ paddingTop: 10, flex: 1, borderBottom: i < 3 ? '1px solid rgba(15,15,15,.07)' : 'none', paddingBottom: 22 }}>
                    <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 15, color: i === 2 ? HF.acc : HF.dark, lineHeight: 1.2, marginBottom: 4 }}>{t}</div>
                    <div style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.55)', lineHeight: 1.5 }}>{d}</div>
                    {i === 0 && (
                      <BtnGhost style={{ marginTop: 10, fontSize: 12, padding: '8px 16px' }}>Créer mon compte →</BtnGhost>
                    )}
                    {i === 1 && (
                      <div style={{ marginTop: 8 }}><PromoCode code={promo} /></div>
                    )}
                    {i === 2 && (
                      <div style={{ marginTop: 10, background: HF.accDim, border: `1px solid ${HF.accMid}`, borderRadius: 10, padding: '10px 12px' }}>
                        <div style={{ fontFamily: HF.ffM, fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: HF.acc, marginBottom: 4 }}>⚠ Étape critique</div>
                        <div style={{ fontFamily: HF.ff, fontSize: 12, color: 'rgba(15,15,15,.65)', lineHeight: 1.45 }}>
                          Contacte-moi avant de déposer pour que le bonus soit bien activé.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIPS */}
        {sections.tips && (
          <div style={{ padding: '24px 18px', background: HF.light, borderTop: '1px solid rgba(15,15,15,.07)' }}>
            <SectionLabel dark={false}>Stratégies gagnantes</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.dark, margin: '0 0 16px' }}>Joue intelligemment.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <TipCard num={1} title="Combos 3–5 sélections" desc="Le sweet spot du wager. Plus = plus de risque." />
              <TipCard num={2} title="Cotes minimum 1.40" desc="Obligation 1xBet pour valider le wager." />
              <TipCard num={3} title="Wager 5× progressif" desc="Mise 5× le bonus avant de retirer. Step by step." />
              <TipCard num={4} title="Bankroll ≤ 15% / pari" desc="Discipline = longévité. Gère ton budget." />
            </div>
          </div>
        )}

        {/* TEMOIGNAGES */}
        {sections.testimonials && (
          <div style={{ padding: '24px 18px', background: HF.dark }}>
            <SectionLabel>Ils ont activé</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.light, margin: '0 0 16px' }}>Pas que du blabla.</h2>
            {[
              { n: 'Koffi A.', l: 'Lomé', dep: 15000, bon: 45000 },
              { n: 'Afi K.', l: 'Kara', dep: 20000, bon: 60000 },
              { n: 'Yawa E.', l: 'Tsévié', dep: 10000, bon: 30000 },
            ].map((t, i) => (
              <div key={i} style={{ marginBottom: 10, padding: 14, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14 }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                  {[['Dépôt', HF.fmt(t.dep), false], ['Bonus CMD10', HF.fmt(t.bon), true], ['Total', HF.fmt(t.dep + t.bon), false]].map(([l, v, isAcc], j) => (
                    <div key={j} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 2 }}>{l}</div>
                      <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 13, color: isAcc ? HF.acc : HF.light }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: HF.ff, fontSize: 12, color: 'rgba(253,252,247,.4)', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 8 }}>
                  « Le bonus crédité direct. {t.n} — {t.l}. »
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FAQ */}
        {sections.faq && (
          <div style={{ padding: '24px 18px', background: HF.light }}>
            <SectionLabel dark={false}>FAQ</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.dark, margin: '0 0 16px' }}>T'as des questions ?</h2>
            {[
              ["C'est quoi le code CMD10 ?", "Ton code d'affiliation exclusif. Il active le bonus 300% à l'inscription sur 1xBet."],
              ["Pourquoi déposer chez Flash Service ?", "C'est la condition pour valider le bonus. Sans passer par moi, pas de 300%."],
              ["Montant minimum pour le bonus ?", "500 XOF. Le plafond de " + HF.fmt(bonusMax) + " XOF est atteint à 43 334 XOF déposés."],
              ["Le code peut changer après l'inscription ?", "Non. Il doit être saisi pendant l'inscription. Pas de retour arrière possible."],
            ].map(([q, a], i, arr) => (
              <div key={i} style={{ borderTop: '1px solid rgba(15,15,15,.08)', padding: '14px 0', ...(i === arr.length - 1 ? { borderBottom: '1px solid rgba(15,15,15,.08)' } : {}) }}>
                <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 14, color: HF.dark, marginBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
                  {q} <span style={{ color: HF.acc }}>+</span>
                </div>
                <div style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.55)', lineHeight: 1.55 }}>{a}</div>
              </div>
            ))}
          </div>
        )}

        {/* CONTACT */}
        {sections.contact && (
          <div style={{ padding: '24px 18px 80px', background: HF.dark, textAlign: 'center' }}>
            <SectionLabel>Parle à ton agent</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.light, margin: '0 0 8px' }}>Je suis là pour toi.</h2>
            <p style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(253,252,247,.5)', marginBottom: 20, lineHeight: 1.6 }}>Une question, un blocage ? Écris-moi direct.</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <div style={{ background: '#25d366', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '12px 20px', borderRadius: 999 }}>📱 WhatsApp</div>
              <div style={{ background: '#0088cc', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '12px 20px', borderRadius: 999 }}>✈ Telegram</div>
            </div>
            <div style={{ marginTop: 18, background: HF.accDim, border: `1px solid ${HF.accMid}`, borderRadius: 12, padding: '12px 16px' }}>
              <div style={{ fontFamily: HF.ff, fontSize: 12, color: 'rgba(253,252,247,.6)', lineHeight: 1.55 }}>
                <strong style={{ color: HF.acc }}>⚠ Rappel :</strong> ton 1er dépôt doit passer par Flash Service pour activer le bonus.
              </div>
            </div>
          </div>
        )}
      </div>
      {sections.contact && <FABWa />}
    </div>
  );
};

/* ── Desktop ── */
const V1Desktop = ({ promo, bonusMax, sections }) => {
  const [amount, setAmount] = React.useState(15000);
  const bon = HF.bonus(amount, bonusMax);

  return (
    <div className="desktop-frame" style={{ border: 'none', boxShadow: '0 24px 80px rgba(0,0,0,.4)', borderRadius: 12, overflow: 'hidden' }}>
      {/* Browser chrome */}
      <div style={{ height: 34, background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6 }}>
        {['#ff5f57','#febc2e','#28c840'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        <div style={{ marginLeft: 12, fontFamily: HF.ffM, fontSize: 11, color: 'rgba(255,255,255,.3)', background: 'rgba(255,255,255,.06)', padding: '3px 16px', borderRadius: 4, flex: 1, maxWidth: 360 }}>
          flashservice.tg
        </div>
      </div>

      <div className="desktop-body" style={{ background: HF.dark, scrollbarWidth: 'none' }}>
        {/* NAV */}
        <div style={{
          padding: '14px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(15,15,15,.9)', backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${HF.accDim}`,
        }}>
          <Logo />
          <div style={{ display: 'flex', gap: 24 }}>
            {['Tutoriel', 'Simulateur', 'Conseils', 'FAQ'].map(l => (
              <span key={l} style={{ fontFamily: HF.ff, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.5)', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
          <BtnPrimary style={{ fontSize: 13, padding: '10px 22px' }}>Activer {promo} →</BtnPrimary>
        </div>

        {/* HERO 2-col */}
        {sections.hero && (
          <div style={{ padding: '48px 48px 40px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${HF.accDim} 1px, transparent 1px), linear-gradient(90deg, ${HF.accDim} 1px, transparent 1px)`, backgroundSize: '56px 56px', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Badge>⚡ Agent officiel · Togo</Badge>
              <h1 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 54, lineHeight: .92, color: HF.light, margin: '20px 0 16px' }}>
                Triple ton<br /><span style={{ color: HF.acc }}>premier</span><br />dépôt.
              </h1>
              <p style={{ fontFamily: HF.ff, fontSize: 16, color: 'rgba(253,252,247,.6)', lineHeight: 1.6, maxWidth: 420, marginBottom: 24 }}>
                Code <PromoCode code={promo} /> activé chez ton agent à Lomé. Bonus jusqu'à <strong style={{ color: HF.light }}>{HF.fmt(bonusMax)} XOF</strong>.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <BtnPrimary>Activer mon code {promo} →</BtnPrimary>
                <BtnGhost light>Voir le simulateur</BtnGhost>
              </div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,.045)', border: '1px solid rgba(255,255,255,.09)', borderRadius: 20, padding: '28px 32px' }}>
              <div style={{ fontFamily: HF.ffM, fontSize: 10, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(253,252,247,.35)', marginBottom: 8 }}>Bonus de bienvenue</div>
              <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 72, lineHeight: .88, color: HF.light, textShadow: `0 0 60px ${HF.accGlow}` }}>
                {HF.fmt(bonusMax)} <span style={{ fontSize: 24, color: HF.acc }}>XOF</span>
              </div>
              <div style={{ fontFamily: HF.ffM, fontSize: 11, color: 'rgba(253,252,247,.35)', margin: '10px 0 20px' }}>300% du 1er dépôt · max</div>
              <HFSlider value={amount} onChange={e => setAmount(+e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                <div>
                  <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.35)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Si tu déposes</div>
                  <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 16, color: 'rgba(253,252,247,.7)' }}>{HF.fmt(amount)} XOF</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: HF.ffM, fontSize: 9, color: HF.acc, textTransform: 'uppercase', letterSpacing: '.08em' }}>Tu joues avec</div>
                  <div style={{ fontFamily: HF.ffM, fontWeight: 800, fontSize: 22, color: HF.acc }}>{HF.fmt(amount + bon)} XOF</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEPS 4-col */}
        {sections.tutorial && (
          <div style={{ padding: '32px 48px', background: HF.light }}>
            <SectionLabel dark={false}>Comment ça marche</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 36, color: HF.dark, margin: '0 0 24px' }}>4 étapes, c'est tout.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
              {[
                ['Inscription', 'Numéro togolais, XOF, 2 minutes.', false],
                [`Code ${promo}`, 'Champ "Code promo" à l\'inscription.', false],
                ['Dépôt chez Flash Service', '⚠ Étape critique — passe par moi.', true],
                ['Bonus crédité !', '300% sur ton dépôt, direct.', false],
              ].map(([t, d, crit], i) => (
                <div key={i} style={{ padding: 18, background: crit ? HF.accDim : '#fff', border: `1px solid ${crit ? HF.accMid : 'rgba(15,15,15,.08)'}`, borderRadius: 14 }}>
                  <StepNum n={i + 1} accent={crit} />
                  <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 15, color: crit ? HF.acc : HF.dark, margin: '12px 0 6px', lineHeight: 1.2 }}>{t}</div>
                  <div style={{ fontFamily: HF.ff, fontSize: 12, color: 'rgba(15,15,15,.55)', lineHeight: 1.5 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SIMU + TIPS 2-col */}
        <div style={{ padding: '32px 48px', background: HF.light, borderTop: '1px solid rgba(15,15,15,.06)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
          {sections.simulator && (
            <div style={{ background: '#fff', border: '1px solid rgba(15,15,15,.07)', borderRadius: 20, padding: '28px 32px', boxShadow: '0 4px 32px rgba(15,15,15,.06)' }}>
              <SectionLabel dark={false}>Simulateur de bonus</SectionLabel>
              <h3 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: HF.dark, margin: '0 0 20px' }}>Calcule ton bonus exact.</h3>
              <HFSlider value={amount} onChange={e => setAmount(+e.target.value)} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 10, alignItems: 'center', margin: '20px 0' }}>
                <div style={{ textAlign: 'center', background: 'rgba(15,15,15,.04)', borderRadius: 12, padding: 14, opacity: .6 }}>
                  <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(15,15,15,.4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>Sans code</div>
                  <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontSize: 20, color: 'rgba(15,15,15,.4)', fontWeight: 700 }}>0 XOF</div>
                </div>
                <div style={{ fontFamily: HF.ffM, fontSize: 11, color: 'rgba(15,15,15,.3)', textAlign: 'center' }}>VS</div>
                <div style={{ textAlign: 'center', background: HF.accDim, border: `1.5px solid ${HF.accMid}`, borderRadius: 12, padding: 14 }}>
                  <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(15,15,15,.5)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>Avec {promo}</div>
                  <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontSize: 20, color: HF.dark, fontWeight: 700 }}>{HF.fmt(bon)} XOF</div>
                </div>
              </div>
              <div style={{ background: HF.accDim, border: `1px solid ${HF.accMid}`, borderRadius: 12, padding: '12px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(15,15,15,.45)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>Total disponible</div>
                <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 22, color: '#c47d00' }}>{HF.fmt(amount + bon)} XOF</div>
              </div>
            </div>
          )}
          {sections.tips && (
            <div>
              <SectionLabel dark={false}>Stratégies</SectionLabel>
              <h3 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: HF.dark, margin: '0 0 16px' }}>Joue malin.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <TipCard num={1} title="Combos 3–5 sélections" desc="Le sweet spot du wager. Évite les accumos à 10+." />
                <TipCard num={2} title="Cotes minimum 1.40" desc="Obligation 1xBet pour valider le wager." />
                <TipCard num={3} title="Wager 5× progressif" desc="Mise 5× le bonus avant de retirer. Step by step." />
                <TipCard num={4} title="Bankroll ≤ 15% / pari" desc="Discipline = longévité. Gère ton budget." />
              </div>
            </div>
          )}
        </div>

        {/* CONTACT BAR */}
        {sections.contact && (
          <div style={{ padding: '28px 48px', background: HF.dark, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 26, color: HF.light, margin: '0 0 6px' }}>Une question ? Ton agent est là.</h3>
              <p style={{ fontFamily: HF.ff, fontSize: 14, color: 'rgba(253,252,247,.5)', margin: 0 }}>Réponse rapide, 8h–23h, 7j/7.</p>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ background: '#25d366', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 14, padding: '13px 24px', borderRadius: 999 }}>📱 WhatsApp</div>
              <div style={{ background: '#0088cc', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 14, padding: '13px 24px', borderRadius: 999 }}>✈ Telegram</div>
            </div>
          </div>
        )}
      </div>
      {sections.contact && <FABWa />}
    </div>
  );
};

Object.assign(window, { V1Mobile, V1Desktop });
