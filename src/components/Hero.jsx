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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

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
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(227,6,19,0.07), transparent 50%), radial-gradient(ellipse 80% 60% at 15% 25%, rgba(227,6,19,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 75%, rgba(227,6,19,0.06) 0%, transparent 60%), var(--black)`, transition: 'background 0.3s ease' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', right: '12%', top: '15%', width: '120px', height: '120px', border: '1px solid rgba(227,6,19,0.15)', borderRadius: '20px', transform: 'rotate(45deg)' }} />
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} style={{ position: 'absolute', right: '25%', bottom: '20%', width: '80px', height: '80px', background: 'var(--red)', borderRadius: '16px', opacity: 0.06 }} />
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.04, scale: 1 }} transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'absolute', right: '-8%', top: '5%', width: '55vw', maxWidth: '650px' }}>
        <svg viewBox="0 0 400 400" fill="none"><ellipse cx="150" cy="250" rx="130" ry="40" fill="white"/><path d="M150 250L280 80" stroke="white" strokeWidth="8" strokeLinecap="round"/><circle cx="280" cy="80" r="15" fill="white"/><path d="M290 60Q320 40 310 70" stroke="white" strokeWidth="4" fill="none"/><path d="M300 50Q340 25 325 65" stroke="white" strokeWidth="3" fill="none"/></svg>
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '7rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '820px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(227,6,19,0.08)', border: '1px solid rgba(227,6,19,0.2)', borderRadius: '50px', padding: '0.5rem 1.25rem', marginBottom: '2rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--red)', position: 'relative' }}>
              <span style={{ position: 'absolute', inset: '-4px', borderRadius: '50%', border: '1px solid var(--red)', animation: 'pulse-ring 2s infinite' }} />
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--red-light)' }}>{t('hero_badge')}</span>
          </motion.div>

          {lines.map((line, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <motion.h1 initial={{ y: '120%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7.5vw, 5.8rem)', fontWeight: 900, lineHeight: 1.03, letterSpacing: '-0.035em', color: line.color === 'red' ? 'var(--red)' : 'var(--white)' }}>{line.text}</motion.h1>
            </div>
          ))}

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.75, color: 'var(--gray-300)', maxWidth: '580px', marginTop: '1.75rem', marginBottom: '2.5rem' }}>
            {t('hero_desc')}<strong style={{ color: 'var(--white)' }}>{t('hero_desc_bold')}</strong>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'var(--red)', color: 'var(--white)', padding: '1rem 2.25rem', borderRadius: '60px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', transition: 'all 0.4s ease', border: '2px solid var(--red)', boxShadow: '0 0 30px rgba(227,6,19,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = 'var(--white)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(227,6,19,0.25)'; }}>
              {t('hero_cta1')} <HiArrowRight />
            </a>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'transparent', color: 'var(--white)', padding: '1rem 2.25rem', borderRadius: '60px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', border: '2px solid rgba(255,255,255,0.15)', transition: 'all 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--white)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}>
              {t('hero_cta2')}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}
            style={{ display: 'flex', gap: '2px', marginTop: '4.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ flex: 1, padding: '1.5rem 1rem', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none', minWidth: '140px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--red)', lineHeight: 1 }}><CountUp end={s.num} suffix={s.suffix} /></div>
                <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', marginTop: '0.4rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.65rem', color: 'var(--gray-600)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t('hero_scroll')}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><HiArrowDown style={{ color: 'var(--red)', fontSize: '1.1rem' }} /></motion.div>
      </motion.div>
    </section>
  );
}
