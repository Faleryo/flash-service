/* =========================================================
   V4 — Chat / Conversation — HI-FI
   L'expérience = une conversation avec ton agent.
   Bulles agent (dark) / utilisateur (cream). CTA inline.
   ========================================================= */

const AgentBubble = ({ children, timestamp }) => (
  <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-end' }}>
    <div style={{ width: 32, height: 32, borderRadius: '50%', background: HF.acc, flexShrink: 0, display: 'grid', placeItems: 'center', fontWeight: 900, color: HF.dark, fontSize: 14 }}>F</div>
    <div>
      <div style={{
        maxWidth: '80%', padding: '12px 16px',
        background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.1)',
        borderRadius: '18px 18px 18px 4px',
        fontFamily: HF.ff, fontSize: 14, lineHeight: 1.5, color: HF.light,
      }}>{children}</div>
      {timestamp && <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(255,255,255,.25)', marginTop: 4, marginLeft: 4 }}>{timestamp}</div>}
    </div>
  </div>
);

const UserBubble = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
    <div style={{
      maxWidth: '75%', padding: '12px 16px',
      background: HF.accDim, border: `1px solid ${HF.accMid}`,
      borderRadius: '18px 18px 4px 18px',
      fontFamily: HF.ff, fontSize: 14, lineHeight: 1.5, color: HF.light,
    }}>{children}</div>
  </div>
);

const InlineCta = ({ children, accent = false }) => (
  <div style={{
    margin: '4px 0 8px',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: accent ? HF.acc : 'rgba(255,255,255,.1)',
    color: accent ? HF.dark : HF.light,
    fontFamily: HF.ff, fontWeight: 700, fontSize: 13,
    padding: '10px 18px', borderRadius: 999, cursor: 'pointer',
    border: accent ? 'none' : '1px solid rgba(255,255,255,.15)',
  }}>{children}</div>
);

/* ── Mobile ── */
const V4Mobile = ({ promo, bonusMax, sections }) => (
  <div className="mobile-frame" style={{ background: HF.dark, border: 'none', boxShadow: '0 20px 60px rgba(0,0,0,.5)', display: 'flex', flexDirection: 'column' }}>

    {/* Chat header */}
    <div style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(255,255,255,.08)', flexShrink: 0, background: 'rgba(15,15,15,.95)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ width: 38, height: 38, borderRadius: '50%', background: HF.acc, display: 'grid', placeItems: 'center', fontWeight: 900, color: HF.dark, fontSize: 17, flexShrink: 0 }}>F</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 15, color: HF.light }}>Flash Service</div>
        <div style={{ fontFamily: HF.ffM, fontSize: 10, color: '#3eb96b' }}>● en ligne · Lomé</div>
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ background: '#25d366', width: 32, height: 32, borderRadius: '50%', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </div>
        <div style={{ background: '#0088cc', width: 32, height: 32, borderRadius: '50%', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </div>
      </div>
    </div>

    {/* Messages */}
    <div className="mobile-scroll" style={{ paddingTop: 16, paddingBottom: 80, flex: 1, scrollbarWidth: 'none' }}>
      <div style={{ padding: '0 14px' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(255,255,255,.3)', background: 'rgba(255,255,255,.06)', padding: '4px 12px', borderRadius: 999 }}>Aujourd'hui</span>
        </div>

        {sections.hero && (
          <>
            <AgentBubble timestamp="09:41">
              Salut 👋 Bienvenue chez Flash Service. Je suis ton agent 1xBet au Togo.
            </AgentBubble>
            <AgentBubble>
              T'as un code promo dans la poche : <strong style={{ color: HF.acc }}>{promo}</strong>. Il te donne <strong>jusqu'à {HF.fmt(bonusMax)} XOF</strong> de bonus sur ton premier dépôt.
              <div style={{ marginTop: 10 }}>
                <InlineCta>Je veux savoir →</InlineCta>
              </div>
            </AgentBubble>
            <UserBubble>Vas-y, explique</UserBubble>
          </>
        )}

        {sections.tutorial && (
          <>
            <AgentBubble>
              C'est simple. 4 étapes :
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  ['01', 'Inscription 1xBet', 'Numéro togolais, devise XOF'],
                  ['02', `Code ${promo}`, 'Dans le champ "Code promo"'],
                  ['03', '1er dépôt', 'Chez Flash Service — étape critique'],
                  ['04', 'Bonus crédité', 'Direct sur ton compte'],
                ].map(([n, t, d]) => (
                  <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: HF.ffM, fontSize: 11, fontWeight: 700, color: n === '03' ? HF.acc : 'rgba(253,252,247,.4)', width: 22, flexShrink: 0, paddingTop: 1 }}>{n}</div>
                    <div>
                      <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 13, color: n === '03' ? HF.acc : HF.light }}>{t}</div>
                      <div style={{ fontFamily: HF.ff, fontSize: 12, color: 'rgba(253,252,247,.5)' }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AgentBubble>
            <UserBubble>Le dépôt chez toi c'est obligatoire ?</UserBubble>
            <AgentBubble>
              <strong style={{ color: HF.acc }}>⚠ Oui, c'est l'étape critique.</strong> Ton premier dépôt DOIT passer par moi pour que le bonus soit validé. Si tu déposes seul, pas de 300%.
              <div style={{ marginTop: 10 }}>
                <InlineCta accent>Me contacter avant de déposer →</InlineCta>
              </div>
            </AgentBubble>
          </>
        )}

        {sections.simulator && (
          <>
            <UserBubble>Combien je gagne si je mets 20 000 XOF ?</UserBubble>
            <AgentBubble>
              Facile. Avec le code {promo} :
              <div style={{ marginTop: 10, background: 'rgba(245,166,35,.08)', border: `1px solid ${HF.accMid}`, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, textAlign: 'center' }}>
                  {[['Dépôt', '20 000', false], ['Bonus', '+60 000', true], ['Total', '80 000', false]].map(([l, v, acc]) => (
                    <div key={l}>
                      <div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>{l}</div>
                      <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 15, color: acc ? HF.acc : HF.light }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 6, fontFamily: HF.ff, fontSize: 13, color: 'rgba(253,252,247,.55)' }}>En XOF. Le bonus max est de {HF.fmt(bonusMax)} XOF.</div>
            </AgentBubble>
          </>
        )}

        {sections.tips && (
          <>
            <UserBubble>Des conseils pour bien utiliser le bonus ?</UserBubble>
            <AgentBubble>
              Oui, le wager c'est la clé. Retiens ça :
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Combos 3–5 sélections (pas 10)', 'Cotes mini 1.40 par sélection', 'Wager 5× avant de retirer', 'Max 15% du solde par pari'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: HF.accDim, border: `1px solid ${HF.accMid}`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: HF.ffM, fontSize: 9, fontWeight: 700, color: HF.acc }}>✓</span>
                    </div>
                    <span style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(253,252,247,.7)', lineHeight: 1.4 }}>{t}</span>
                  </div>
                ))}
              </div>
            </AgentBubble>
          </>
        )}

        {sections.contact && (
          <>
            <UserBubble>Comment je te contacte ?</UserBubble>
            <AgentBubble>
              WhatsApp ou Telegram — je réponds 8h–23h, 7j/7.
              <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <div style={{ background: '#25d366', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 12, padding: '9px 16px', borderRadius: 999 }}>📱 WhatsApp</div>
                <div style={{ background: '#0088cc', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 12, padding: '9px 16px', borderRadius: 999 }}>✈ Telegram</div>
              </div>
            </AgentBubble>
            <AgentBubble>
              Prêt à activer ton bonus ?
              <div style={{ marginTop: 10 }}>
                <InlineCta accent>Activer le code {promo} →</InlineCta>
              </div>
            </AgentBubble>
          </>
        )}
      </div>
    </div>

    {/* Input bar */}
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px', background: 'rgba(15,15,15,.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{ flex: 1, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 999, padding: '10px 16px', fontFamily: HF.ff, fontSize: 13, color: 'rgba(253,252,247,.35)' }}>
        Écris un message…
      </div>
      <div style={{ width: 38, height: 38, borderRadius: '50%', background: HF.acc, display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
        <span style={{ fontSize: 16, color: HF.dark }}>↑</span>
      </div>
    </div>
  </div>
);

/* ── Desktop ── */
const V4Desktop = ({ promo, bonusMax, sections }) => (
  <div className="desktop-frame" style={{ border: 'none', boxShadow: '0 24px 80px rgba(0,0,0,.4)', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ height: 34, background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6 }}>
      {['#ff5f57','#febc2e','#28c840'].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
      <div style={{ marginLeft: 12, fontFamily: HF.ffM, fontSize: 11, color: 'rgba(255,255,255,.3)', background: 'rgba(255,255,255,.06)', padding: '3px 16px', borderRadius: 4, flex: 1, maxWidth: 360 }}>flashservice.tg</div>
    </div>

    <div className="desktop-body" style={{ background: HF.dark, display: 'grid', gridTemplateColumns: '2fr 1fr', height: 'calc(100% - 34px)', scrollbarWidth: 'none' }}>
      {/* Left: Chat */}
      <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,.07)' }}>
        {/* Chat header */}
        <div style={{ padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid rgba(255,255,255,.07)', background: 'rgba(255,255,255,.03)', flexShrink: 0 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: HF.acc, display: 'grid', placeItems: 'center', fontWeight: 900, color: HF.dark, fontSize: 20 }}>F</div>
          <div>
            <div style={{ fontFamily: HF.ff, fontWeight: 700, fontSize: 16, color: HF.light }}>Flash Service</div>
            <div style={{ fontFamily: HF.ffM, fontSize: 11, color: '#3eb96b' }}>● en ligne · Lomé, Togo</div>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px 100px', scrollbarWidth: 'none' }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <span style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(255,255,255,.3)', background: 'rgba(255,255,255,.06)', padding: '4px 12px', borderRadius: 999 }}>Aujourd'hui</span>
          </div>
          <AgentBubble timestamp="09:41">Salut 👋 Bienvenue chez Flash Service. Je suis ton agent 1xBet au Togo.</AgentBubble>
          <AgentBubble>T'as le code <strong style={{ color: HF.acc }}>{promo}</strong> qui te donne <strong>jusqu'à {HF.fmt(bonusMax)} XOF</strong> de bonus. 300% du 1er dépôt.<div style={{ marginTop: 10 }}><InlineCta>Je veux savoir →</InlineCta></div></AgentBubble>
          <UserBubble>Vas-y, explique</UserBubble>
          <AgentBubble>4 étapes — inscription, code {promo}, dépôt chez moi, bonus crédité. <strong style={{ color: HF.acc }}>⚠ Le dépôt DOIT passer par Flash Service.</strong><div style={{ marginTop: 10 }}><InlineCta accent>Me contacter avant de déposer →</InlineCta></div></AgentBubble>
          <UserBubble>Si je mets 20 000 XOF, j'ai combien ?</UserBubble>
          <AgentBubble>
            <div style={{ background: 'rgba(245,166,35,.08)', border: `1px solid ${HF.accMid}`, borderRadius: 10, padding: '12px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, textAlign: 'center' }}>
              {[['Dépôt', '20 000', false], ['Bonus +300%', '+60 000', true], ['Total', '80 000', false]].map(([l, v, acc]) => (
                <div key={l}><div style={{ fontFamily: HF.ffM, fontSize: 9, color: 'rgba(253,252,247,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 4 }}>{l}</div><div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 18, color: acc ? HF.acc : HF.light }}>{v}</div></div>
              ))}
            </div>
          </AgentBubble>
          <AgentBubble>Prêt à activer ?<div style={{ marginTop: 10 }}><InlineCta accent>Activer le code {promo} →</InlineCta></div></AgentBubble>
        </div>

        {/* Input */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: '33.33%', padding: '12px 28px', background: 'rgba(15,15,15,.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ flex: 1, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 999, padding: '10px 20px', fontFamily: HF.ff, fontSize: 14, color: 'rgba(253,252,247,.35)' }}>Écris un message…</div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: HF.acc, display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: 17, color: HF.dark }}>↑</span>
          </div>
        </div>
      </div>

      {/* Right: Info panel */}
      <div style={{ padding: '28px 24px', overflowY: 'auto', scrollbarWidth: 'none' }}>
        <Logo small />
        <div style={{ marginTop: 24 }}>
          <SectionLabel>Ton code</SectionLabel>
          <div style={{ fontFamily: HF.ffM, fontWeight: 700, fontSize: 28, letterSpacing: '.15em', color: HF.acc, background: HF.accDim, border: `1px solid ${HF.accMid}`, padding: '12px 16px', borderRadius: 10, textAlign: 'center', marginBottom: 20 }}>{promo}</div>
        </div>
        {sections.simulator && (
          <div>
            <SectionLabel>Bonus rapide</SectionLabel>
            {[10000, 20000, 43334].map(dep => {
              const b = HF.bonus(dep, bonusMax);
              return (
                <div key={dep} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                  <span style={{ fontFamily: HF.ff, fontSize: 13, color: 'rgba(253,252,247,.5)' }}>{HF.fmt(dep)} XOF</span>
                  <span style={{ fontFamily: HF.ffM, fontSize: 13, fontWeight: 700, color: HF.acc }}>+{HF.fmt(b)}</span>
                </div>
              );
            })}
            <div style={{ fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.25)', marginTop: 8 }}>Bonus plafonné à {HF.fmt(bonusMax)} XOF</div>
          </div>
        )}
        <div style={{ marginTop: 24 }}>
          <SectionLabel>Contact direct</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ background: '#25d366', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '11px 16px', borderRadius: 999, textAlign: 'center' }}>📱 WhatsApp</div>
            <div style={{ background: '#0088cc', color: '#fff', fontFamily: HF.ff, fontWeight: 700, fontSize: 13, padding: '11px 16px', borderRadius: 999, textAlign: 'center' }}>✈ Telegram</div>
          </div>
          <div style={{ marginTop: 14, fontFamily: HF.ffM, fontSize: 10, color: 'rgba(253,252,247,.25)', lineHeight: 1.6 }}>Réponse rapide · 8h–23h · 7j/7</div>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { V4Mobile, V4Desktop });
