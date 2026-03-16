import { useI18n } from '../i18n';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

export default function Testimonials() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const testimonials = t('test');
  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const tm = testimonials[current];

  return (
    <section id="testimonials" style={{ padding: 'clamp(3.5rem, 8vw, 7rem) 0', position: 'relative', background: 'linear-gradient(180deg, var(--black), rgba(227,6,19,0.015), var(--black))' }}>
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('test_label')}</span>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em' }}>
            {t('test_title_1')} <span style={{ color: 'var(--red)' }}>{t('test_title_red')}</span>
          </motion.h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '28px', padding: 'clamp(1.5rem, 4vw, 3rem)', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '6rem', fontWeight: 900, lineHeight: 0.8, color: 'var(--red)', opacity: 0.15, marginBottom: '1rem' }}>"</div>
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, i) => <HiStar key={i} style={{ color: '#FBBF24', fontSize: '1.2rem' }} />)}
              </div>
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.8, color: 'var(--gray-200)', fontStyle: 'italic', maxWidth: '620px', margin: '0 auto 2rem' }}>"{tm.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--red), var(--red-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
                  {tm.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>{tm.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>{tm.role}, <span style={{ color: 'var(--red)' }}>{tm.company}</span></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
            <button onClick={prev} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--white)'; }}>
              <HiChevronLeft size={20} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{ width: current === i ? '24px' : '8px', height: '8px', borderRadius: '4px', background: current === i ? 'var(--red)' : 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }} />
              ))}
            </div>
            <button onClick={next} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--white)'; }}>
              <HiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
