import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiShieldCheck, HiLightningBolt, HiUsers, HiCheckCircle, HiGlobe, HiClock } from 'react-icons/hi';
const valueIcons = [HiShieldCheck, HiLightningBolt, HiUsers, HiCheckCircle, HiGlobe, HiClock];

export default function About() {
  const { t } = useI18n();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const values = t('about_values');
  return (
    <section id="about" style={{ padding: 'clamp(3.5rem, 8vw, 7rem) 0', position: 'relative' }}>
      <div className="container" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }} className="about-grid">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(227,6,19,0.06), rgba(227,6,19,0.02))', border: '1px solid rgba(227,6,19,0.1)', padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '140px', height: '140px', background: 'var(--red)', borderRadius: '24px', transform: 'rotate(15deg)', opacity: 0.08 }} />
              <img src="/logo.jpeg" alt="UniSat" style={{ width: '160px', borderRadius: '18px', marginBottom: '2rem', position: 'relative', zIndex: 2 }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1 }}>
                  <div><span style={{ color: '#E83E5B' }}>Univer</span></div>
                  <div><span style={{ color: '#ffffff' }}>Satellites</span></div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 500, color: 'var(--gray-400)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.4rem' }}>Sarl • Le futur c'est ici</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '2rem', position: 'relative', zIndex: 2 }}>
                {[
                  { label: 'N° RCCM', value: 'RC/YAE/2022/B/2353' },
                  { label: t('about_founded'), value: '2020' },
                  { label: t('about_registered'), value: '2022' },
                  { label: t('about_hq'), value: t('about_hq_val') },
                  { label: t('about_team'), value: t('about_team_val') },
                ].map((info, i) => (
                  <div key={i} style={{ padding: '0.85rem 1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ fontSize: '0.6rem', color: 'var(--gray-500)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{info.label}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem' }}>{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('about_label')}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              {t('about_title_1')} <span style={{ color: 'var(--red)' }}>{t('about_title_red')}</span>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--gray-300)', marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--white)' }}>
                <span style={{ color: '#E83E5B' }}>UniverS</span> <span style={{ color: '#ffffff' }}>atellites</span> Sarl (UniS@t)
              </strong> {t('about_p1')}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'var(--gray-300)', marginBottom: '2.5rem' }}>
              {t('about_p2_1')} <strong style={{ color: 'var(--white)' }}>{t('about_p2_addr')}</strong>{t('about_p2_2')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {values.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(227,6,19,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(227,6,19,0.1)' }}>
                      <Icon style={{ color: 'var(--red)', fontSize: '0.9rem' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem' }}>{v.title}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--gray-500)', lineHeight: 1.4 }}>{v.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}
