import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const techs = [
  { name: 'React', cat: 'Frontend' },{ name: 'Next.js', cat: 'Frontend' },{ name: 'Vue.js', cat: 'Frontend' },
  { name: 'Node.js', cat: 'Backend' },{ name: 'Python', cat: 'Backend' },{ name: 'PHP/Laravel', cat: 'Backend' },
  { name: 'PostgreSQL', cat: 'Database' },{ name: 'MongoDB', cat: 'Database' },{ name: 'SQL Server', cat: 'Database' },
  { name: 'Power BI', cat: 'Data' },{ name: 'Tableau', cat: 'Data' },{ name: 'AWS', cat: 'Cloud' },
  { name: 'Docker', cat: 'DevOps' },{ name: 'React Native', cat: 'Mobile' },{ name: 'Flutter', cat: 'Mobile' },
  { name: 'Cisco', cat: 'Network' },{ name: 'MikroTik', cat: 'Network' },{ name: 'Figma', cat: 'Design' },{ name: 'WordPress', cat: 'CMS' },
];
export default function TechStack() {
  const { t } = useI18n();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section style={{ padding: 'clamp(2.5rem, 5vw, 5rem) 0', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', justifyContent: 'center' }}>
            <div style={{ width: '30px', height: '2px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('tech_label')}</span>
            <div style={{ width: '30px', height: '2px', background: 'var(--red)' }} />
          </motion.div>
          <motion.h3 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-200)' }}>{t('tech_title')}</motion.h3>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {techs.map((tc, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
              style={{ padding: '0.5rem 1rem', borderRadius: '50px', background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--gray-300)', transition: 'all 0.3s ease', cursor: 'default', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,6,19,0.3)'; e.currentTarget.style.color = 'var(--red)'; e.currentTarget.style.background = 'rgba(227,6,19,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--gray-300)'; e.currentTarget.style.background = 'var(--black-card)'; }}>
              {tc.name} <span style={{ fontSize: '0.6rem', color: 'var(--gray-600)', fontWeight: 400, fontFamily: 'var(--font-mono)' }}>{tc.cat}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
