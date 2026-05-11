/* =========================================================
   V5 — Magazine / Carnet du Coach — HI-FI
   Mise en page éditoriale : grille asymétrique, gros titres
   Fraunces, encarts annotés, long-form posé.
   Light-first, ambiance conseiller sérieux.
   ========================================================= */

/* ── Mobile ── */
const V5Mobile = ({ promo, bonusMax, sections }) => (
  <div className="mobile-frame" style={{ background: HF.light, border: 'none', boxShadow: '0 20px 60px rgba(0,0,0,.3)' }}>
    <div className="mobile-scroll" style={{ paddingTop: 0, scrollbarWidth: 'none' }}>

      {/* NAV / Masthead */}
      <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: HF.light, borderBottom: '2px solid rgba(15,15,15,.1)', position: 'sticky', top: 0, zIndex: 10 }}>
        <Logo light={false} />
        <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(15,15,15,.4)', letterSpacing: '.08em' }}>N°01 · 2026</div>
      </div>

      {/* HERO editorial */}
      {sections.hero && (
        <div style={{ padding: '24px 18px 0' }}>
          <SectionLabel dark={false}>Édito du coach</SectionLabel>
          <h1 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 42, lineHeight: .95, color: HF.dark, margin: '0 0 16px' }}>
            Le carnet du<br /><span style={{ color: HF.acc }}>parieur malin</span>.
          </h1>
          <p style={{ fontFamily: HF.ff, fontSize: 15, lineHeight: 1.65, color: 'rgba(15,15,15,.65)', margin: '0 0 18px' }}>
            Tu débutes sur 1xBet ? Voilà tout ce que j'aurais aimé qu'on me dise.
            Avec le code <strong style={{ color: HF.dark }}>{promo}</strong>, on commence fort.
          </p>

          {/* Hero stat block */}
          <div style={{ background: HF.dark, borderRadius: 16, padding: '20px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>Bonus max</div>
              <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 38, lineHeight: .9, color: HF.light }}>
                {HF.fmt(bonusMax)}<span style={{ fontSize: 14, color: HF.acc, marginLeft: 6 }}>XOF</span>
              </div>
              <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.4)', marginTop: 6 }}>300% du 1er dépôt</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.35)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 6 }}>Ton code</div>
              <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 18, letterSpacing: '.15em', color: HF.acc, background: HF.accDim, border: `1px solid ${HF.accMid}`, padding: '6px 14px', borderRadius: 8 }}>{promo}</div>
            </div>
          </div>
        </div>
      )}

      {/* TUTORIEL — Chapitre 1 */}
      {sections.tutorial && (
        <div style={{ padding: '0 18px 24px' }}>
          <div style={{ borderTop: '2px solid rgba(15,15,15,.12)', paddingTop: 20, marginBottom: 20 }}>
            <SectionLabel dark={false}>Chapitre 1 — Le rituel de début</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, lineHeight: 1.05, color: HF.dark, margin: '0 0 20px' }}>
              4 gestes pour<br />ouvrir la porte.
            </h2>
          </div>
          {[
            ['01', 'Crée ton compte', 'Sois honnête sur tes infos. Numéro togolais, devise XOF. Le sérieux paie.'],
            ['02', `Pose le code ${promo}`, "C'est le mot magique. Sans lui, pas de bonus."],
            ['03', 'Dépôt CHEZ Flash Service', "⚠ Non négociable : ton 1er dépôt se fait obligatoirement chez ton agent Flash Service. Sans ça, le bonus ne s'active pas."],
            ['04', 'Reçois le bonus', 'Et là, le vrai jeu commence.'],
          ].map(([n, t, d], i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: i < arr.length - 1 ? '1px dashed rgba(15,15,15,.15)' : '2px solid rgba(15,15,15,.12)' }}>
              <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 36, color: n === '03' ? HF.acc : 'rgba(15,15,15,.15)', lineHeight: 1, width: 44, flexShrink: 0 }}>{n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 15, color: n === '03' ? HF.acc : HF.dark, marginBottom: 5, lineHeight: 1.2 }}>{t}</div>
                <div style={{ fontFamily: HF.ff, fontSize: 13, lineHeight: 1.55, color: 'rgba(15,15,15,.58)' }}>{d}</div>
                {n === '03' && (
                  <div style={{ marginTop: 10 }}>
                    <BtnPrimary style={{ fontSize: 12, padding: '10px 18px' }}>Contacter Flash Service →</BtnPrimary>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SIMULATEUR — Encart pratique */}
      {sections.simulator && (
        <div style={{ margin: '0 18px 24px', background: HF.dark, borderRadius: 16, padding: '20px 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 100, background: 'repeating-linear-gradient(135deg, transparent 0 14px, rgba(245,166,35,.06) 14px 15px)', pointerEvents: 'none' }} />
          <SectionLabel>Encart pratique</SectionLabel>
          <h3 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: HF.light, margin: '0 0 14px' }}>Le calcul rapide.</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[[10000, HF.bonus(10000, bonusMax)], [20000, HF.bonus(20000, bonusMax)], [43334, HF.bonus(43334, bonusMax)]].map(([dep, bon], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(255,255,255,.05)', borderRadius: 10, border: '1px solid rgba(255,255,255,.07)' }}>
                <span style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(253,252,247,.6)' }}>Tu mets <strong style={{ color: HF.light }}>{HF.fmt(dep)} XOF</strong></span>
                <span style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 14, color: HF.acc }}>→ {HF.fmt(dep + bon)} XOF</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.3)', textAlign: 'center' }}>Bonus plafonné à {HF.fmt(bonusMax)} XOF</div>
          <BtnPrimary style={{ width: '100%', padding: '14px 0', marginTop: 16 }}>Activer le code {promo} →</BtnPrimary>
        </div>
      )}

      {/* TIPS — Chapitre 2 */}
      {sections.tips && (
        <div style={{ padding: '0 18px 24px' }}>
          <div style={{ borderTop: '2px solid rgba(15,15,15,.12)', paddingTop: 20, marginBottom: 16 }}>
            <SectionLabel dark={false}>Chapitre 2 — Le geste du pro</SectionLabel>
            <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.dark, margin: '0 0 16px' }}>Trois habitudes<br />qui changent tout.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <TipCard num={1} title="Discipline du combo" desc="3 à 5 sélections. Le risque augmente exponentiellement au-delà." />
            <TipCard num={2} title="Lecture des cotes" desc="En dessous de 1.40, tu perds plus que tu ne gagnes." />
            <TipCard num={3} title="Wager 5× progressif" desc="Mise 5× le montant du bonus avant de retirer. Step by step." />
          </div>
        </div>
      )}

      {/* TÉMOIGNAGES */}
      {sections.testimonials && (
        <div style={{ background: HF.dark, padding: '24px 18px' }}>
          <SectionLabel>Chapitre 3 — Ils témoignent</SectionLabel>
          <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.light, margin: '0 0 16px' }}>Des vrais résultats,<br />chaque semaine.</h2>
          {[
            { n: 'Koffi A.', l: 'Lomé', dep: 15000, bon: 45000, q: '« Le bonus était là 5 min après mon dépôt. Sérieux. »' },
            { n: 'Afi K.', l: 'Kara', dep: 20000, bon: 60000, q: '« Flash Service m\'a guidé étape par étape. CMD10 ça change tout. »' },
          ].map((t, i) => (
            <div key={i} style={{ marginBottom: 12, padding: 16, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                {[['Dépôt', HF.fmt(t.dep), false], ['Bonus', HF.fmt(t.bon), true], ['Total', HF.fmt(t.dep + t.bon), false]].map(([l, v, acc]) => (
                  <div key={l} style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 2 }}>{l}</div>
                    <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 13, color: acc ? HF.acc : HF.light }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontSize: 14, color: 'rgba(253,252,247,.55)', marginBottom: 6 }}>{t.q}</div>
              <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.3)' }}>{t.n} · {t.l}, Togo</div>
            </div>
          ))}
        </div>
      )}

      {/* FAQ */}
      {sections.faq && (
        <div style={{ padding: '24px 18px' }}>
          <SectionLabel dark={false}>Questions fréquentes</SectionLabel>
          <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.dark, margin: '0 0 16px' }}>Les réponses directes.</h2>
          {[
            ["C'est quoi le code CMD10 ?", "Ton code d'affiliation exclusif. Il active le bonus 300% à l'inscription sur 1xBet."],
            ["Pourquoi déposer chez Flash Service ?", "C'est la condition pour valider le bonus. Sans passer par moi, pas de 300%."],
            ["Quel montant pour le bonus max ?", "43 334 XOF de dépôt active le plafond de " + HF.fmt(bonusMax) + " XOF."],
            ["Le wager c'est quoi ?", "Tu dois miser 5× le montant du bonus sur des combinés avant de retirer."],
          ].map(([q, a], i, arr) => (
            <div key={i} style={{ borderTop: '1px solid rgba(15,15,15,.08)', padding: '14px 0', ...(i === arr.length - 1 ? { borderBottom: '1px solid rgba(15,15,15,.08)' } : {}) }}>
              <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 14, color: HF.dark, marginBottom: 5 }}>{q}</div>
              <div style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.55)', lineHeight: 1.55 }}>{a}</div>
            </div>
          ))}
        </div>
      )}

      {/* CONTACT */}
      {sections.contact && (
        <div style={{ padding: '24px 18px 80px', background: HF.dark }}>
          <SectionLabel>Conclusion</SectionLabel>
          <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 28, color: HF.light, margin: '0 0 10px' }}>Je suis là du début à la fin.</h2>
          <p style={{ fontFamily: HF.ff, fontSize: 14, color: 'rgba(253,252,247,.55)', lineHeight: 1.65, marginBottom: 20 }}>De l'inscription au premier retrait — tu n'es pas seul. Écris-moi, je réponds.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1, background: '#25d366', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '13px 0', borderRadius: 999, textAlign: 'center' }}>📱 WhatsApp</div>
            <div style={{ flex: 1, background: '#0088cc', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '13px 0', borderRadius: 999, textAlign: 'center' }}>✈ Telegram</div>
          </div>
        </div>
      )}
    </div>
    {sections.contact && <FABWa />}
  </div>
);

/* ── Desktop ── */
const V5Desktop = ({ promo, bonusMax, sections }) => (
  <div className="desktop-frame" style={{ border: 'none', boxShadow: '0 24px 80px rgba(0,0,0,.3)', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ height: 34, background: '#f0ede8', borderBottom: '1px solid rgba(15,15,15,.1)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6 }}>
      {['#ff5f57','#febc2e','#28c840'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
      <div style={{ marginLeft: 12, fontFamily: HF.ffM, fontSize: 11, color: 'rgba(15,15,15,.35)', background: '#fff', border: '1px solid rgba(15,15,15,.12)', padding: '3px 16px', borderRadius: 4, flex: 1, maxWidth: 360 }}>flashservice.tg</div>
    </div>

    <div className="desktop-body" style={{ background: HF.light, scrollbarWidth: 'none' }}>
      {/* Masthead */}
      <div style={{ padding: '16px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid rgba(15,15,15,.1)', position: 'sticky', top: 0, background: HF.light, zIndex: 10 }}>
        <Logo light={false} />
        <div style={{ display: 'flex', gap: 24 }}>
          {['Parcours', 'Simulateur', 'Conseils', 'FAQ'].map(l => (
            <span key={l} style={{ fontFamily: HF.ff, fontSize: 13, fontWeight: 600, color: 'rgba(15,15,15,.45)', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: HF.ffM, fontSize: 11, color: 'rgba(15,15,15,.35)' }}>N°01 · 2026</span>
          <BtnPrimary style={{ fontSize: 13, padding: '10px 22px' }}>Activer {promo}</BtnPrimary>
        </div>
      </div>

      {/* HERO — 2 col asymétrique */}
      {sections.hero && (
        <div style={{ padding: '44px 56px 36px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start', borderBottom: '1px solid rgba(15,15,15,.1)' }}>
          <div>
            <SectionLabel dark={false}>Édito du coach</SectionLabel>
            <h1 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 62, lineHeight: .92, color: HF.dark, margin: '0 0 20px' }}>
              Le carnet du<br /><span style={{ color: HF.acc }}>parieur malin</span>.
            </h1>
            <p style={{ fontFamily: HF.ff, fontSize: 17, lineHeight: 1.7, color: 'rgba(15,15,15,.65)', maxWidth: 480, marginBottom: 28 }}>
              Tu débutes sur 1xBet ? Voilà tout ce que j'aurais aimé qu'on me dise. Avec le code <PromoCode code={promo} />, on commence fort — et je t'accompagne jusqu'au retrait.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <BtnPrimary>Activer le code {promo} →</BtnPrimary>
              <BtnGhost>Voir le parcours</BtnGhost>
            </div>
          </div>
          <div style={{ background: HF.dark, borderRadius: 20, padding: '28px 28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 80, background: 'repeating-linear-gradient(135deg, transparent 0 14px, rgba(245,166,35,.07) 14px 15px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <SectionLabel>Bonus de bienvenue</SectionLabel>
              <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 52, lineHeight: .9, color: HF.light, marginBottom: 4 }}>
                {HF.fmt(bonusMax)} <span style={{ fontSize: 18, color: HF.acc }}>XOF</span>
              </div>
              <div style={{ fontFamily: HF.ffM, fontSize: 11, color: 'rgba(253,252,247,.35)', marginBottom: 20 }}>300% du 1er dépôt · plafond</div>
              {sections.simulator && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[[10000, HF.bonus(10000, bonusMax)], [20000, HF.bonus(20000, bonusMax)], [43334, HF.bonus(43334, bonusMax)]].map(([dep, bon]) => (
                    <div key={dep} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,.04)', borderRadius: 8, border: '1px solid rgba(255,255,255,.06)' }}>
                      <span style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(253,252,247,.5)' }}>{HF.fmt(dep)} XOF</span>
                      <span style={{ fontFamily: HF.ffM, fontSize: 13, fontWeight: 700, color: HF.acc }}>→ {HF.fmt(dep + bon)} XOF</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* BODY — editorial 2 col */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr' }}>
        {/* Left: tutorial + tips */}
        <div style={{ padding: '36px 56px', borderRight: '1px solid rgba(15,15,15,.09)' }}>
          {sections.tutorial && (
            <div style={{ marginBottom: 36 }}>
              <SectionLabel dark={false}>Chapitre 1 — Le rituel</SectionLabel>
              <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 34, color: HF.dark, margin: '0 0 24px' }}>4 gestes pour ouvrir la porte.</h2>
              {[
                ['01', 'Crée ton compte', 'Numéro togolais, XOF comme devise. 2 minutes.'],
                ['02', `Pose le code ${promo}`, 'Champ "Code promo" à l\'inscription. Indispensable.'],
                ['03', 'Dépôt CHEZ Flash Service', '⚠ Étape critique — contacte-moi avant de déposer. Obligatoire pour valider le bonus.'],
                ['04', 'Reçois le bonus', '300% sur ton dépôt. Le vrai jeu commence.'],
              ].map(([n, t, d], i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: i < arr.length - 1 ? '1px dashed rgba(15,15,15,.14)' : 'none' }}>
                  <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 38, color: n === '03' ? HF.acc : 'rgba(15,15,15,.12)', lineHeight: 1, width: 46, flexShrink: 0 }}>{n}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 16, color: n === '03' ? HF.acc : HF.dark, marginBottom: 5, lineHeight: 1.2 }}>{t}</div>
                    <div style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.58)', lineHeight: 1.55 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {sections.tips && (
            <div>
              <SectionLabel dark={false}>Chapitre 2 — Le geste du pro</SectionLabel>
              <h2 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 34, color: HF.dark, margin: '0 0 20px' }}>Trois habitudes qui changent tout.</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <TipCard num={1} title="Combos 3–5" desc="Le sweet spot du wager. Évite les accumos à 10+." />
                <TipCard num={2} title="Cotes ≥ 1.40" desc="Condition 1xBet pour valider le wager." />
                <TipCard num={3} title="Wager 5×" desc="Miser 5× le bonus avant de retirer." />
                <TipCard num={4} title="Bankroll ≤ 15%" desc="Max 15% du solde par pari. Discipline." />
              </div>
            </div>
          )}
        </div>

        {/* Right: sidebar */}
        <div style={{ padding: '36px 40px', background: '#f5f2ec' }}>
          {sections.testimonials && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel dark={false}>Ils ont activé</SectionLabel>
              <h3 style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontWeight: 700, fontSize: 24, color: HF.dark, margin: '0 0 16px' }}>Des vrais résultats.</h3>
              {[
                { n: 'Koffi A.', l: 'Lomé', dep: 15000, bon: 45000, q: '« Bonus crédité en 5 min. »' },
                { n: 'Afi K.', l: 'Kara', dep: 20000, bon: 60000, q: '« CMD10 ça change tout. »' },
                { n: 'Yawa E.', l: 'Tsévié', dep: 10000, bon: 30000, q: '« Accompagné en temps réel. »' },
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(15,15,15,.09)' }}>
                  <div>
                    <div style={{ fontFamily: HF.ff, fontWeight: 600, fontSize: 13, color: HF.dark }}>{t.n} · {t.l}</div>
                    <div style={{ fontFamily: HF.ffD, fontStyle: 'italic', fontSize: 13, color: 'rgba(15,15,15,.55)', marginTop: 2 }}>{t.q}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 12 }}>
                    <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(15,15,15,.35)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Bonus</div>
                    <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 14, color: HF.acc }}>+{HF.fmt(t.bon)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {sections.faq && (
            <div style={{ marginBottom: 28 }}>
              <SectionLabel dark={false}>FAQ rapide</SectionLabel>
              {[
                ["C'est quoi CMD10 ?", "Code d'affiliation exclusif. Active le bonus 300%."],
                ["Pourquoi Flash Service ?", "Condition pour valider le bonus."],
                ["Wager c'est quoi ?", "Miser 5× le bonus avant de retirer."],
              ].map(([q, a], i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(15,15,15,.09)', padding: '12px 0' }}>
                  <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 13, color: HF.dark, marginBottom: 3 }}>{q}</div>
                  <div style={{ fontFamily: HF.ff, fontSize: 12, color: 'rgba(15,15,15,.55)', lineHeight: 1.5 }}>{a}</div>
                </div>
              ))}
            </div>
          )}
          {sections.contact && (
            <div>
              <SectionLabel dark={false}>Contact direct</SectionLabel>
              <p style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(15,15,15,.6)', lineHeight: 1.6, marginBottom: 14 }}>Une question ? Je réponds 8h–23h, 7j/7.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ background: '#25d366', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '12px 0', borderRadius: 999, textAlign: 'center' }}>📱 WhatsApp</div>
                <div style={{ background: '#0088cc', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '12px 0', borderRadius: 999, textAlign: 'center' }}>✈ Telegram</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    {sections.contact && <FABWa />}
  </div>
);

Object.assign(window, { V5Mobile, V5Desktop });
