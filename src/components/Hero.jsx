import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setVal(Math.round((1 - Math.pow(1 - progress, 4)) * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, x: 60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="hero-visual"
      style={{ position: 'relative', width: '100%', maxWidth: '520px', aspectRatio: '1', margin: '0 auto' }}
    >
      {/* Main glow circle */}
      <div style={{
        position: 'absolute', inset: '5%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(227,6,19,0.1) 0%, rgba(227,6,19,0.03) 50%, transparent 70%)',
        border: '1px solid rgba(227,6,19,0.08)',
      }} />

      {/* Outer orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', inset: '2%', borderRadius: '50%',
          border: '1px dashed rgba(227,6,19,0.12)',
        }}
      >
        {/* Orbiting dot */}
        <div style={{
          position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)',
          width: '10px', height: '10px', borderRadius: '50%', background: 'var(--red)',
          boxShadow: '0 0 15px rgba(227,6,19,0.5)',
        }} />
      </motion.div>

      {/* Inner orbit ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', inset: '18%', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <div style={{
          position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)',
          width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-display)', fontSize: '0.55rem', fontWeight: 600,
          color: 'rgba(255,255,255,0.7)', textAlign: 'center', whiteSpace: 'nowrap',
        }}>
          Univers Satellites<br />(UniS@t)
        </div>
      </motion.div>

      {/* Center logo */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '28%', height: '28%', borderRadius: '24px',
          background: 'var(--black-card)', border: '1px solid rgba(227,6,19,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(227,6,19,0.1)',
          overflow: 'hidden',
        }}
      >
        <img src="/logo.jpeg" alt="UniSat" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
      </motion.div>

      {/* Floating tech cards */}
      {/* Top-right: Code card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute', top: '8%', right: '2%',
          background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px', padding: '0.85rem 1rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--gray-400)', lineHeight: 1.8, whiteSpace: 'pre' }}>
          <span style={{ color: 'var(--red)' }}>const</span> app = <span style={{ color: '#6EE7B7' }}>deploy</span>{'({\n'}
          {'  '}region: <span style={{ color: '#FBBF24' }}>"africa"</span>{',\n'}
          {'  '}status: <span style={{ color: '#6EE7B7' }}>"live"</span> ✓{'\n}'}
        </div>
      </motion.div>

      {/* Bottom-left: Network card */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute', bottom: '12%', left: '0%',
          background: 'var(--black-card)', border: '1px solid rgba(227,6,19,0.15)',
          borderRadius: '14px', padding: '0.75rem 1rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: '0.6rem',
        }}
      >
        <div style={{
          width: '32px', height: '32px', borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--red), var(--red-dark))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem' }}>Network</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#6EE7B7' }}>99.9% uptime</div>
        </div>
      </motion.div>

      {/* Top-left: Shield card */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          position: 'absolute', top: '18%', left: '0%',
          background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px', padding: '0.65rem 0.85rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.68rem', color: 'var(--gray-300)' }}>Sécurisé</span>
      </motion.div>

      {/* Bottom-right: Users card */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', bottom: '20%', right: '0%',
          background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px', padding: '0.65rem 0.85rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex' }}>
          {['var(--red)', '#FF4D5A', '#B8050F'].map((c, i) => (
            <div key={i} style={{
              width: '22px', height: '22px', borderRadius: '50%', background: c,
              border: '2px solid var(--black-card)', marginLeft: i > 0 ? '-8px' : 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.5rem', fontWeight: 700,
            }}>
              {['O', 'B', 'U'][i]}
            </div>
          ))}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--gray-400)' }}>50+ clients</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const lines = [
    { text: t('hero_line1'), color: 'white', delay: 0.3 },
    { text: t('hero_line2'), color: 'red', delay: 0.4 },
    { text: t('hero_line3'), color: 'white', delay: 0.5 },
  ];
  const stats = [
    { num: 5, suffix: '+', label: t('hero_stat1') },
    { num: 100, suffix: '+', label: t('hero_stat2') },
    { num: 50, suffix: '+', label: t('hero_stat3') },
    { num: 98, suffix: '%', label: t('hero_stat4') },
  ];

  return (
    <section id="hero" style={{ minHeight: '100vh', minHeight: '100dvh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 15% 25%, rgba(227,6,19,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 75%, rgba(227,6,19,0.06) 0%, transparent 60%), var(--black)' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6.5rem', paddingBottom: '2rem', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
          {/* Left - Content */}
          <div style={{ maxWidth: '700px' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(227,6,19,0.08)', border: '1px solid rgba(227,6,19,0.2)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--red)', position: 'relative', flexShrink: 0 }}>
                <span style={{ position: 'absolute', inset: '-4px', borderRadius: '50%', border: '1px solid var(--red)', animation: 'pulse-ring 2s infinite' }} />
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.6rem, 2vw, 0.75rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red-light)', whiteSpace: 'nowrap' }}>{t('hero_badge')}</span>
            </motion.div>

            {lines.map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.h1 initial={{ y: '120%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 6vw, 4.8rem)',
                    fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.035em',
                    color: line.color === 'red' ? 'var(--red)' : 'var(--white)', wordBreak: 'break-word',
                  }}>{line.text}</motion.h1>
              </div>
            ))}

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
              style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', lineHeight: 1.75, color: 'var(--gray-300)', maxWidth: '540px', marginTop: '1.5rem', marginBottom: '2rem' }}>
              {t('hero_desc')}<strong style={{ color: 'var(--white)' }}>{t('hero_desc_bold')}</strong>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--red)', color: 'var(--white)',
                padding: '0.85rem 1.75rem', borderRadius: '60px', fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', border: '2px solid var(--red)', boxShadow: '0 0 30px rgba(227,6,19,0.25)',
                transition: 'all 0.4s ease', whiteSpace: 'nowrap',
              }}>{t('hero_cta1')} <HiArrowRight /></a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'var(--white)',
                padding: '0.85rem 1.75rem', borderRadius: '60px', fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', border: '2px solid rgba(255,255,255,0.15)', transition: 'all 0.3s ease', whiteSpace: 'nowrap',
              }}>{t('hero_cta2')}</a>
            </motion.div>
          </div>

          {/* Right - Visual (hidden on mobile via CSS) */}
          <HeroVisual />
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', marginTop: '3rem',
            background: 'rgba(255,255,255,0.04)', borderRadius: '16px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: 'clamp(1rem, 3vw, 1.5rem) 0.75rem', textAlign: 'center', background: 'var(--black)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, color: 'var(--red)', lineHeight: 1 }}>
                <CountUp end={s.num} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 'clamp(0.65rem, 2vw, 0.78rem)', color: 'var(--gray-400)', marginTop: '0.3rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.6rem', color: 'var(--gray-600)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t('hero_scroll')}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><HiArrowDown style={{ color: 'var(--red)', fontSize: '1rem' }} /></motion.div>
      </motion.div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1.1fr 1fr !important; }
        }
        @media (max-width: 1023px) {
          .hero-visual { display: none !important; }
        }
        @media (min-width: 768px) {
          .hero-grid + div { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
