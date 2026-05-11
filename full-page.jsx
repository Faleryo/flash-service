// Full one-pager — Flash Service (D1 base : Brutal Energy + accents Boldonse pour display)
const FullPage = () => {
  const [amount, setAmount] = React.useState(40000);
  const bonus = Math.min(amount * 3, 130000);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [copied, setCopied] = React.useState(false);

  const fmt = (n) => n.toLocaleString('fr-FR').replace(/,/g, ' ');

  const copyCode = () => {
    navigator.clipboard?.writeText('CMD10');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const steps = [
    { n: '01', t: "Clique sur l'inscription", d: "Tu cliques sur le bouton, le lien s'ouvre direct avec mon code partenaire pré-rempli." },
    { n: '02', t: "Crée ton compte", d: "Numéro + mot de passe. 30 secondes max. Vérifie que le code CMD10 est bien là." },
    { n: '03', t: "Dépose ton premier ticket", d: "Mobile Money, Flooz, Mixx by Yas — minimum 500 XOF. Le bonus 300% se débloque auto." },
    { n: '04', t: "Tu joues triplé", d: "Tes 40 000 deviennent 160 000. Place tes paris. En cas de souci, je suis là sur WhatsApp." },
  ];

  const tips = [
    { t: "Mise petit, varie tes combis", d: "Mieux vaut 5 tickets de 2 000 XOF qu'un de 10 000. Tu lis mieux le marché." },
    { t: "Évite les cotes en dessous de 1.50", d: "Le risque ne vaut pas le retour. Cible 1.80–3.20 sur les marchés que tu connais." },
    { t: "Suis l'équipe avant le championnat", d: "Forme récente, blessés, calendrier. 10 min de lecture > 10 paris au feeling." },
    { t: "Joue avec ce que tu peux perdre", d: "Le bonus aide, mais c'est ton argent. Fixe un budget mensuel et tiens-toi à ça." },
  ];

  const faqs = [
    { q: "Le code CMD10 est gratuit ?", a: "Oui. Aucun frais, aucun engagement. Tu utilises le code à l'inscription, c'est tout." },
    { q: "Pourquoi passer par un agent ?", a: "Avec moi tu débloques le bonus 300% (au lieu de 100% en direct), et j'aide en cas de souci de retrait, vérification, ou bonus non crédité." },
    { q: "C'est légal au Togo ?", a: "Oui. La plateforme est licenciée et opère légalement. Les paris sportifs sont autorisés à partir de 18 ans." },
    { q: "Combien de temps pour retirer ?", a: "Entre 5 minutes et 24h selon le moyen de paiement. Mobile Money est le plus rapide." },
    { q: "Si j'ai un problème, je fais quoi ?", a: "Tu m'écris sur WhatsApp. Je réponds entre 8h et 23h, 7j/7. Bouton vert en bas à droite." },
  ];

  return (
    <div style={{
      width: '100%',
      background: '#0a0a0a',
      color: '#fdfcf7',
      fontFamily: '"Geist", system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* === STATUS BAR === */}
      <div style={{
        height: 44, padding: '0 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em'
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

      {/* === NAV === */}
      <div style={{
        padding: '12px 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 10,
        background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(253,252,247,0.06)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, background: '#f5a623',
            display: 'grid', placeItems: 'center', fontWeight: 900, color: '#0a0a0a',
            fontSize: 15, letterSpacing: '-0.05em'
          }}>F</div>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Flash Service</span>
        </div>
        <div style={{
          padding: '6px 12px', border: '1px solid rgba(253,252,247,0.18)',
          borderRadius: 99, fontSize: 11, fontWeight: 500, opacity: 0.8
        }}>FR · TG</div>
      </div>

      {/* === HERO === */}
      <section style={{ padding: '20px 22px 28px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px 6px 6px',
          background: 'rgba(245,166,35,0.1)',
          border: '1px solid rgba(245,166,35,0.25)',
          borderRadius: 99,
          fontSize: 11, color: '#f5a623', fontWeight: 500, letterSpacing: '0.02em'
        }}>
          <span style={{
            width: 18, height: 18, borderRadius: 99, background: '#f5a623',
            display: 'grid', placeItems: 'center', color: '#0a0a0a',
            fontSize: 10, fontWeight: 700
          }}>↑</span>
          BONUS 300% · 1ER DÉPÔT
        </div>

        <h1 style={{
          margin: '18px 0 0',
          fontFamily: '"Boldonse", "Geist", system-ui',
          fontSize: 64, lineHeight: 0.88,
          letterSpacing: '-0.02em',
          fontWeight: 400,
          color: '#fdfcf7',
          textTransform: 'uppercase'
        }}>
          Triple<br/>ton<br/>
          <span style={{ color: '#f5a623' }}>premier</span><br/>
          dépôt.
        </h1>

        <p style={{
          marginTop: 16, fontSize: 16, lineHeight: 1.4,
          color: 'rgba(253,252,247,0.72)', maxWidth: 320,
          fontWeight: 500, letterSpacing: '-0.01em'
        }}>
          Code <strong style={{
            background: '#f5a623', color: '#0a0a0a', padding: '2px 7px',
            borderRadius: 5, fontWeight: 700, marginLeft: 2
          }}>CMD10</strong> activé chez ton agent à Lomé. Bonus jusqu'à <strong style={{ color: '#fdfcf7', fontWeight: 600 }}>130 000 XOF</strong> — j'accompagne du dépôt au retrait.
        </p>

        {/* CTA primary */}
        <button style={{
          marginTop: 22, width: '100%', height: 56,
          background: '#f5a623', color: '#0a0a0a',
          border: 'none', borderRadius: 12,
          fontFamily: 'inherit', fontSize: 15, fontWeight: 700,
          letterSpacing: '-0.01em', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
        }}>
          Activer mon code CMD10
          <span style={{ fontSize: 17 }}>→</span>
        </button>

        {/* Social proof row */}
        <div style={{
          marginTop: 16,
          display: 'flex', alignItems: 'center', gap: 10
        }}>
          <div style={{ display: 'flex' }}>
            {['#f5a623', '#7a3a12', '#fdfcf7', '#3a3a3a'].map((c, i) => (
              <div key={i} style={{
                width: 24, height: 24, borderRadius: 99,
                background: c, border: '2px solid #0a0a0a',
                marginLeft: i ? -7 : 0
              }}></div>
            ))}
          </div>
          <span style={{ fontSize: 12, opacity: 0.7, lineHeight: 1.3 }}>
            <strong style={{ color: '#fdfcf7', fontWeight: 600 }}>1 240+ parieurs</strong> activés cette semaine
          </span>
        </div>
      </section>

      {/* === SIMULATEUR === */}
      <section style={{
        margin: '0 22px 32px', padding: 18,
        background: 'rgba(253,252,247,0.04)',
        border: '1px solid rgba(253,252,247,0.08)',
        borderRadius: 16
      }}>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#f5a623',
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16
        }}>
          <span style={{ width: 18, height: 1, background: '#f5a623' }}></span>
          Simulateur de bonus
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <span style={{ fontSize: 11, opacity: 0.55, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tu déposes</span>
          <span style={{ fontSize: 18, fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
            {fmt(amount)} <span style={{ fontSize: 10, opacity: 0.5 }}>XOF</span>
          </span>
        </div>
        <input type="range" min="500" max="50000" step="500" value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          style={{ width: '100%', color: '#f5a623', height: 4 }} />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6,
          marginTop: 12
        }}>
          {[5000, 20000, 50000].map(v => (
            <button key={v} onClick={() => setAmount(v)} style={{
              padding: '8px 0',
              background: amount === v ? '#f5a623' : 'rgba(253,252,247,0.06)',
              color: amount === v ? '#0a0a0a' : '#fdfcf7',
              border: 'none', borderRadius: 8,
              fontFamily: 'inherit', fontSize: 11, fontWeight: 600,
              cursor: 'pointer', letterSpacing: '-0.01em'
            }}>{fmt(v)}</button>
          ))}
        </div>

        <div style={{
          marginTop: 18, paddingTop: 18,
          borderTop: '1px dashed rgba(253,252,247,0.12)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
        }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.55, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Bonus</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#f5a623', fontVariantNumeric: 'tabular-nums', marginTop: 2 }}>+{fmt(bonus)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, opacity: 0.55, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tu joues avec</div>
            <div style={{
              fontSize: 28, fontWeight: 800, color: '#f5a623',
              fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em',
              lineHeight: 1, marginTop: 4
            }}>
              {fmt(amount + bonus)} <span style={{ fontSize: 11, opacity: 0.7, fontWeight: 600 }}>XOF</span>
            </div>
          </div>
        </div>

        {amount === 50000 && (
          <div style={{
            marginTop: 12, padding: '8px 10px',
            background: 'rgba(245,166,35,0.12)', borderRadius: 8,
            fontSize: 11, color: '#f5a623', fontWeight: 500
          }}>
            ⚡ Bonus plafonné à 130 000 XOF — c'est le max.
          </div>
        )}
      </section>

      {/* === TUTORIEL === */}
      <section style={{ padding: '8px 22px 32px' }}>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#f5a623',
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12
        }}>
          <span style={{ width: 18, height: 1, background: '#f5a623' }}></span>
          Comment ça marche
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: '"Boldonse", "Geist", system-ui',
          fontSize: 38, lineHeight: 0.92,
          letterSpacing: '-0.025em',
          fontWeight: 400,
          textTransform: 'uppercase'
        }}>4 étapes,<br/>2 minutes.</h2>

        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: '16px 0',
              borderTop: '1px solid rgba(253,252,247,0.08)',
              borderBottom: i === steps.length - 1 ? '1px solid rgba(253,252,247,0.08)' : 'none',
              display: 'flex', gap: 14, alignItems: 'flex-start'
            }}>
              <div style={{
                fontFamily: '"Boldonse", "Geist", system-ui',
                fontSize: 22, color: '#f5a623',
                fontWeight: 400, letterSpacing: '-0.02em',
                flexShrink: 0, width: 32, marginTop: 2
              }}>{s.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{s.t}</div>
                <div style={{ marginTop: 5, fontSize: 13, lineHeight: 1.45, color: 'rgba(253,252,247,0.6)' }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === BANNIÈRE CODE === */}
      <section style={{ padding: '0 22px 32px' }}>
        <div style={{
          background: '#f5a623', color: '#0a0a0a',
          borderRadius: 16, padding: 20,
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: 120,
            background: 'repeating-linear-gradient(135deg, transparent 0 14px, rgba(10,10,10,0.06) 14px 15px)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', opacity: 0.7
          }}>Ton code partenaire</div>
          <div style={{
            marginTop: 4,
            fontFamily: '"Boldonse", "Geist", system-ui',
            fontSize: 56, lineHeight: 1,
            letterSpacing: '-0.02em', fontWeight: 400,
            textTransform: 'uppercase'
          }}>CMD10</div>
          <div style={{ marginTop: 8, fontSize: 13, fontWeight: 500, lineHeight: 1.4, maxWidth: 240 }}>
            À saisir à l'inscription pour débloquer les 300%.
          </div>
          <button onClick={copyCode} style={{
            marginTop: 14, padding: '10px 14px',
            background: '#0a0a0a', color: '#f5a623',
            border: 'none', borderRadius: 99,
            fontFamily: 'inherit', fontSize: 12, fontWeight: 600,
            cursor: 'pointer', letterSpacing: '-0.01em',
            display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
            {copied ? '✓ Copié' : 'Copier le code'}
            <span style={{ fontSize: 12 }}>{copied ? '' : '⎘'}</span>
          </button>
        </div>
      </section>

      {/* === CONSEILS === */}
      <section style={{ padding: '8px 22px 32px' }}>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#f5a623',
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12
        }}>
          <span style={{ width: 18, height: 1, background: '#f5a623' }}></span>
          Conseils du pro
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: '"Boldonse", "Geist", system-ui',
          fontSize: 38, lineHeight: 0.92,
          letterSpacing: '-0.025em',
          fontWeight: 400,
          textTransform: 'uppercase'
        }}>Joue<br/>malin.</h2>

        <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
          {tips.map((t, i) => (
            <div key={i} style={{
              padding: 14,
              background: 'rgba(253,252,247,0.04)',
              border: '1px solid rgba(253,252,247,0.08)',
              borderRadius: 12,
              display: 'flex', gap: 12
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: 6,
                background: '#f5a623', color: '#0a0a0a',
                display: 'grid', placeItems: 'center',
                fontSize: 12, fontWeight: 800, flexShrink: 0
              }}>{String(i+1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.25 }}>{t.t}</div>
                <div style={{ marginTop: 4, fontSize: 12, lineHeight: 1.45, color: 'rgba(253,252,247,0.6)' }}>{t.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === TÉMOIGNAGES === */}
      <section style={{ padding: '8px 22px 32px' }}>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#f5a623',
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12
        }}>
          <span style={{ width: 18, height: 1, background: '#f5a623' }}></span>
          Ils ont activé
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: '"Boldonse", "Geist", system-ui',
          fontSize: 38, lineHeight: 0.92,
          letterSpacing: '-0.025em',
          fontWeight: 400,
          textTransform: 'uppercase'
        }}>Pas que<br/>du blabla.</h2>

        <div style={{
          marginTop: 20,
          display: 'flex', gap: 10, overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: 8,
          marginLeft: -22, marginRight: -22, paddingLeft: 22, paddingRight: 22
        }}>
          {[
            { name: 'Kossi A.', loc: 'Bè-Apédoé', q: "J'ai déposé 10 000, j'ai joué avec 40 000. Premier ticket gagné, retrait en 12 min sur Mixx. Sérieux." , gain: '+30 000' },
            { name: 'Aïcha M.', loc: 'Adidogomé', q: "Je posais des questions toutes les 5 min, il a répondu à tout. Gros respect.", gain: '+85 000' },
            { name: 'Yves K.', loc: 'Tokoin', q: "Le bonus est crédité direct, c'est pas un piège. Code CMD10 ça marche.", gain: '+130 000' },
          ].map((t, i) => (
            <div key={i} style={{
              flexShrink: 0, width: 260, scrollSnapAlign: 'start',
              padding: 16,
              background: 'rgba(253,252,247,0.04)',
              border: '1px solid rgba(253,252,247,0.08)',
              borderRadius: 14
            }}>
              <div style={{
                fontSize: 13, lineHeight: 1.45,
                color: '#fdfcf7', fontWeight: 500,
                letterSpacing: '-0.01em'
              }}>« {t.q} »</div>
              <div style={{
                marginTop: 14, paddingTop: 12,
                borderTop: '1px solid rgba(253,252,247,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 11, opacity: 0.5, marginTop: 1 }}>{t.loc}</div>
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 700, color: '#f5a623',
                  fontVariantNumeric: 'tabular-nums'
                }}>{t.gain}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === FAQ === */}
      <section style={{ padding: '8px 22px 32px' }}>
        <div style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#f5a623',
          display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12
        }}>
          <span style={{ width: 18, height: 1, background: '#f5a623' }}></span>
          FAQ
        </div>
        <h2 style={{
          margin: 0,
          fontFamily: '"Boldonse", "Geist", system-ui',
          fontSize: 38, lineHeight: 0.92,
          letterSpacing: '-0.025em',
          fontWeight: 400,
          textTransform: 'uppercase'
        }}>Tu te<br/>poses<br/>la Q ?</h2>

        <div style={{ marginTop: 22 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              borderTop: '1px solid rgba(253,252,247,0.08)',
              borderBottom: i === faqs.length - 1 ? '1px solid rgba(253,252,247,0.08)' : 'none'
            }}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  width: '100%', padding: '16px 0',
                  background: 'transparent', border: 'none',
                  color: '#fdfcf7', fontFamily: 'inherit',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer', textAlign: 'left'
                }}>
                <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', flex: 1, paddingRight: 12, lineHeight: 1.3 }}>{f.q}</span>
                <span style={{
                  width: 24, height: 24, borderRadius: 99,
                  background: openFaq === i ? '#f5a623' : 'rgba(253,252,247,0.08)',
                  color: openFaq === i ? '#0a0a0a' : '#fdfcf7',
                  display: 'grid', placeItems: 'center',
                  fontSize: 14, fontWeight: 700, flexShrink: 0,
                  transition: 'all 0.2s'
                }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div style={{
                  paddingBottom: 16, fontSize: 13, lineHeight: 1.5,
                  color: 'rgba(253,252,247,0.65)', maxWidth: 320
                }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* === AGENT === */}
      <section style={{ padding: '8px 22px 32px' }}>
        <div style={{
          background: 'linear-gradient(160deg, rgba(245,166,35,0.12) 0%, rgba(245,166,35,0) 60%)',
          border: '1px solid rgba(245,166,35,0.2)',
          borderRadius: 18, padding: 22, position: 'relative'
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 99,
              background: '#f5a623', color: '#0a0a0a',
              display: 'grid', placeItems: 'center',
              fontSize: 22, fontWeight: 900, letterSpacing: '-0.04em',
              flexShrink: 0
            }}>CM</div>
            <div>
              <div style={{ fontSize: 11, color: '#f5a623', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Ton agent</div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', marginTop: 2 }}>Kodjo M.</div>
              <div style={{ fontSize: 12, opacity: 0.6, marginTop: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: '#3eb96b' }}></span>
                En ligne · Lomé
              </div>
            </div>
          </div>

          <p style={{
            margin: '18px 0 0', fontSize: 13, lineHeight: 1.5,
            color: 'rgba(253,252,247,0.72)', letterSpacing: '-0.005em'
          }}>
            3 ans en agent partenaire, plus de 1 800 inscriptions, zéro embrouille. Si t'as une question avant, pendant ou après ton inscription, je réponds.
          </p>

          <div style={{
            marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8
          }}>
            {[
              { v: '1 800+', l: 'inscriptions' },
              { v: '< 5 min', l: 'réponse moy.' },
              { v: '7j/7', l: '8h–23h' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '10px 8px',
                background: 'rgba(10,10,10,0.4)',
                border: '1px solid rgba(253,252,247,0.06)',
                borderRadius: 10, textAlign: 'center'
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#f5a623', letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontSize: 10, opacity: 0.55, marginTop: 2, letterSpacing: '0.02em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section style={{ padding: '8px 22px 32px' }}>
        <div style={{
          padding: '28px 22px',
          background: '#f5a623', color: '#0a0a0a',
          borderRadius: 18, textAlign: 'center'
        }}>
          <div style={{
            fontFamily: '"Boldonse", "Geist", system-ui',
            fontSize: 38, lineHeight: 0.92,
            letterSpacing: '-0.025em', fontWeight: 400,
            textTransform: 'uppercase'
          }}>On y va ?</div>
          <p style={{ margin: '10px 0 0', fontSize: 13, fontWeight: 500, opacity: 0.8, lineHeight: 1.4 }}>
            2 minutes pour t'inscrire, 300% sur ton premier dépôt.
          </p>
          <button style={{
            marginTop: 18, width: '100%', height: 52,
            background: '#0a0a0a', color: '#f5a623',
            border: 'none', borderRadius: 12,
            fontFamily: 'inherit', fontSize: 14, fontWeight: 700,
            letterSpacing: '-0.01em', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
          }}>
            Activer CMD10 maintenant
            <span style={{ fontSize: 16 }}>→</span>
          </button>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer style={{
        padding: '24px 22px 32px',
        borderTop: '1px solid rgba(253,252,247,0.06)',
        fontSize: 11, color: 'rgba(253,252,247,0.45)', lineHeight: 1.6
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 6, background: '#f5a623',
            display: 'grid', placeItems: 'center', fontWeight: 900, color: '#0a0a0a',
            fontSize: 12
          }}>F</div>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#fdfcf7' }}>Flash Service · Lomé</span>
        </div>
        <div>
          Jouer comporte des risques : endettement, dépendance, isolement. Réservé aux 18+. Joue avec modération.
        </div>
        <div style={{ marginTop: 12 }}>
          © 2026 · Service partenaire indépendant. Le bonus dépend des conditions de l'opérateur.
        </div>
      </footer>

      {/* === FAB WHATSAPP === */}
      <div style={{
        position: 'fixed', bottom: 22, right: 22, zIndex: 50,
        display: 'flex', alignItems: 'center', gap: 10
      }}>
        <div style={{
          padding: '8px 12px',
          background: '#fdfcf7', color: '#0a0a0a',
          borderRadius: 12, fontSize: 11, fontWeight: 600,
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          letterSpacing: '-0.01em'
        }}>Une question ?</div>
        <button style={{
          width: 56, height: 56, borderRadius: 99,
          background: '#25D366', border: 'none', cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.5)',
          display: 'grid', placeItems: 'center'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

window.FullPage = FullPage;
