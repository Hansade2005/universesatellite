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
        <div style={{ maxWidth: '820px' }}>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(227,6,19,0.08)', border: '1px solid rgba(227,6,19,0.2)', borderRadius: '50px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--red)', position: 'relative', flexShrink: 0 }}>
              <span style={{ position: 'absolute', inset: '-4px', borderRadius: '50%', border: '1px solid var(--red)', animation: 'pulse-ring 2s infinite' }} />
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.6rem, 2vw, 0.75rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--red-light)', whiteSpace: 'nowrap' }}>{t('hero_badge')}</span>
          </motion.div>

          {/* Headings */}
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.h1 initial={{ y: '120%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 8vw, 5.8rem)',
                  fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.035em',
                  color: line.color === 'red' ? 'var(--red)' : 'var(--white)',
                  wordBreak: 'break-word',
                }}>{line.text}</motion.h1>
            </div>
          ))}

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)', lineHeight: 1.75, color: 'var(--gray-300)', maxWidth: '580px', marginTop: '1.5rem', marginBottom: '2rem' }}>
            {t('hero_desc')}<strong style={{ color: 'var(--white)' }}>{t('hero_desc_bold')}</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--red)', color: 'var(--white)',
              padding: '0.85rem 1.75rem', borderRadius: '60px',
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
              border: '2px solid var(--red)', boxShadow: '0 0 30px rgba(227,6,19,0.25)',
              transition: 'all 0.4s ease', whiteSpace: 'nowrap',
            }}>{t('hero_cta1')} <HiArrowRight /></a>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: 'var(--white)',
              padding: '0.85rem 1.75rem', borderRadius: '60px',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
              border: '2px solid rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease', whiteSpace: 'nowrap',
            }}>{t('hero_cta2')}</a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px', marginTop: '3rem',
              background: 'rgba(255,255,255,0.04)', borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
            }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: 'clamp(1rem, 3vw, 1.5rem) 0.75rem', textAlign: 'center',
                background: 'var(--black)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, color: 'var(--red)', lineHeight: 1 }}>
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 'clamp(0.65rem, 2vw, 0.78rem)', color: 'var(--gray-400)', marginTop: '0.3rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.6rem', color: 'var(--gray-600)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t('hero_scroll')}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><HiArrowDown style={{ color: 'var(--red)', fontSize: '1rem' }} /></motion.div>
      </motion.div>
    </section>
  );
}
