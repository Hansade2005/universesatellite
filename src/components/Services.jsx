import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiCog, HiGlobe, HiColorSwatch, HiSupport, HiAcademicCap } from 'react-icons/hi';

const icons = [HiCode, HiCog, HiGlobe, HiColorSwatch, HiSupport, HiAcademicCap];

function ServiceCard({ service, index, icon: Icon, isHighlighted }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative', background: isHighlighted ? 'linear-gradient(135deg, rgba(227,6,19,0.12), rgba(227,6,19,0.04))' : 'var(--black-card)',
        border: isHighlighted ? '1px solid rgba(227,6,19,0.25)' : '1px solid rgba(255,255,255,0.06)',
        borderRadius: '24px', padding: '2.5rem 2rem', overflow: 'hidden', cursor: 'default',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)', display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(227,6,19,0.3)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(227,6,19,0.08)'; }}
      onMouseLeave={e => { e.currentTarget.style.border = isHighlighted ? '1px solid rgba(227,6,19,0.25)' : '1px solid rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
      <div style={{ position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '2px', background: isHighlighted ? 'linear-gradient(90deg, var(--red), transparent)' : 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)' }} />
      <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 900, color: isHighlighted ? 'rgba(227,6,19,0.08)' : 'rgba(255,255,255,0.02)', lineHeight: 1 }}>{String(index + 1).padStart(2, '0')}</div>
      <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: isHighlighted ? 'linear-gradient(135deg, var(--red), var(--red-dark))' : 'linear-gradient(135deg, rgba(227,6,19,0.15), rgba(227,6,19,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Icon style={{ fontSize: '1.5rem', color: isHighlighted ? 'white' : 'var(--red)' }} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{service.title}</h3>
      <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--gray-400)', marginBottom: '1.5rem', flex: 1 }}>{service.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {service.features.map((f, i) => (
          <span key={i} style={{ padding: '0.3rem 0.75rem', borderRadius: '50px', fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 500, background: isHighlighted ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)', color: isHighlighted ? 'rgba(255,255,255,0.8)' : 'var(--gray-500)', border: '1px solid rgba(255,255,255,0.06)' }}>{f}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useI18n();
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const services = t('svc');

  return (
    <section id="services" style={{ padding: '7rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', left: '-15%', top: '30%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(227,6,19,0.05), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('svc_label')}</span>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', maxWidth: '700px', margin: '0 auto' }}>
            {t('svc_title_1')} <span style={{ color: 'var(--red)' }}>{t('svc_title_red')}</span> {t('svc_title_2')}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1rem', color: 'var(--gray-400)', maxWidth: '550px', margin: '1rem auto 0', lineHeight: 1.7 }}>{t('svc_subtitle')}</motion.p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.25rem' }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} index={i} icon={icons[i]} isHighlighted={i === 0} />)}
        </div>
      </div>
    </section>
  );
}
