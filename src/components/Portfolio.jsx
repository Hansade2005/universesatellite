import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tags = [['React','Node.js','Payment API'],['Vue.js','PostgreSQL','Docker'],['Cisco','VPN','Firewall'],['Python','React','PDF Gen'],['React Native','Firebase','API REST']];
const colors = ['#E30613','#FF4D5A','#B8050F','#E30613','#FF4D5A'];
const sizes = ['large','small','small','medium','medium'];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)', gridRow: sizes[index] === 'large' ? 'span 2' : 'span 1', display: 'flex', flexDirection: 'column', transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)', cursor: 'default' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(227,6,19,0.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}>
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${colors[index]}, transparent)` }} />
      <div style={{ flex: sizes[index] === 'large' ? 1 : '0 0 180px', minHeight: sizes[index] === 'large' ? '260px' : '180px', background: `linear-gradient(135deg, ${colors[index]}12, ${colors[index]}04)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ opacity: 0.08, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--white)', lineHeight: 2.2, padding: '1.5rem' }}>
          {'const app = await deploy({\n  name: "' + project.title.toLowerCase().replace(/\s/g, '-') + '",\n  region: "africa-west",\n  status: "live"\n});'}
        </div>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '50px', padding: '0.3rem 0.75rem', fontSize: '0.65rem', fontWeight: 600, color: colors[index], fontFamily: 'var(--font-display)' }}>{project.category}</div>
      </div>
      <div style={{ padding: '1.75rem 2rem 2rem' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>{project.title}</h3>
        <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--gray-400)', marginBottom: '1.25rem' }}>{project.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {tags[index].map((tg, i) => (
            <span key={i} style={{ padding: '0.25rem 0.65rem', borderRadius: '50px', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 500, background: 'rgba(227,6,19,0.08)', color: 'var(--red-light)', border: '1px solid rgba(227,6,19,0.1)' }}>{tg}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { t } = useI18n();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const projects = t('port');
  return (
    <section id="portfolio" style={{ padding: '7rem 0', position: 'relative', background: 'linear-gradient(180deg, var(--black), var(--black-soft), var(--black))' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('port_label')}</span>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em' }}>
            {t('port_title_1')} <span style={{ color: 'var(--red)' }}>{t('port_title_red')}</span>
          </motion.h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
