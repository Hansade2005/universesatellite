import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowRight, HiStar, HiClock, HiCurrencyDollar, HiShieldCheck } from 'react-icons/hi';
const whyIcons = [HiStar, HiClock, HiCurrencyDollar, HiShieldCheck];

export default function WhyUs() {
  const { t } = useI18n();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const reasons = t('why');
  return (
    <section id="why" style={{ padding: 'clamp(3.5rem, 8vw, 7rem) 0', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(227,6,19,0.06) 0%, transparent 60%), var(--black)', pointerEvents: 'none' }} />
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('why_label')}</span>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            {t('why_title_1')} <span style={{ color: 'var(--red)' }}>{t('why_title_red')}</span> ?
          </motion.h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
          {reasons.map((r, i) => {
            const Icon = whyIcons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 * i }}
                style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', borderRadius: '20px', background: i === 0 ? 'linear-gradient(135deg, var(--red), var(--red-dark))' : 'rgba(255,255,255,0.02)', border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { if (i !== 0) { e.currentTarget.style.background = 'rgba(227,6,19,0.06)'; e.currentTarget.style.borderColor = 'rgba(227,6,19,0.2)'; } }}
                onMouseLeave={e => { if (i !== 0) { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; } }}>
                <Icon style={{ fontSize: '2rem', color: i === 0 ? 'rgba(255,255,255,0.9)' : 'var(--red)', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: i === 0 ? 'rgba(255,255,255,0.85)' : 'var(--gray-400)' }}>{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}
          style={{ position: 'relative', padding: 'clamp(1.75rem, 4vw, 3.5rem)', borderRadius: '24px', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(227,6,19,0.1), rgba(227,6,19,0.03))', border: '1px solid rgba(227,6,19,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--red)', borderRadius: '50%', opacity: 0.06 }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, marginBottom: '0.5rem' }}>{t('why_cta_title')}</h3>
            <p style={{ color: 'var(--gray-400)', fontSize: '1rem' }}>{t('why_cta_desc')}</p>
          </div>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--red)', color: 'var(--white)', padding: '1rem 2rem', borderRadius: '60px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', position: 'relative', zIndex: 2, whiteSpace: 'nowrap' }}>
            {t('why_cta_btn')} <HiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
