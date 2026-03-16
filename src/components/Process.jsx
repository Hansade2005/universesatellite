import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightBulb, HiPencilAlt, HiCode, HiCog, HiCheckCircle, HiSupport } from 'react-icons/hi';
const stepIcons = [HiLightBulb, HiPencilAlt, HiCode, HiCog, HiCheckCircle, HiSupport];
const stepColors = ['#E30613','#FF2D3B','#E30613','#FF2D3B','#E30613','#FF2D3B'];
const stepNums = ['01','02','03','04','05','06'];

export default function Process() {
  const { t } = useI18n();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const steps = t('proc');
  return (
    <section id="process" style={{ padding: '7rem 0', position: 'relative' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('proc_label')}</span>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em' }}>
            {t('proc_title_1')} <span style={{ color: 'var(--red)' }}>{t('proc_title_red')}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1rem', color: 'var(--gray-400)', maxWidth: '500px', margin: '1rem auto 0', lineHeight: 1.7 }}>{t('proc_subtitle')}</motion.p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {steps.map((step, i) => {
            const [cardRef, cardInView] = useInView({ threshold: 0.2, triggerOnce: true });
            const Icon = stepIcons[i];
            return (
              <motion.div key={i} ref={cardRef} initial={{ opacity: 0, y: 40 }} animate={cardInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ position: 'relative', padding: '2rem', borderRadius: '20px', background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,6,19,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: `linear-gradient(135deg, ${stepColors[i]}20, ${stepColors[i]}08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${stepColors[i]}25` }}>
                    <Icon style={{ fontSize: '1.3rem', color: stepColors[i] }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: stepColors[i], opacity: 0.7 }}>{t('proc_step')} {stepNums[i]}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--gray-400)' }}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
