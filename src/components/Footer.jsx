import { useI18n } from '../i18n';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

export default function Footer() {
  const { t } = useI18n();
  const navItems = [
    { label: t('nav_home'), href: '#hero' }, { label: t('nav_services'), href: '#services' },
    { label: t('nav_portfolio'), href: '#portfolio' }, { label: t('nav_about'), href: '#about' },
    { label: t('nav_process'), href: '#process' }, { label: t('nav_testimonials'), href: '#testimonials' },
    { label: t('nav_contact'), href: '#contact' },
  ];
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: 'var(--black-soft)' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 4vw, 4rem) 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/logo.jpeg" alt="UniSat" style={{ height: '48px', borderRadius: '12px' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem' }}>Univer<span style={{ color: 'var(--red)' }}>S</span>atellites</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--gray-500)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Sarl — Le futur c'est ici</div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--gray-400)', maxWidth: '300px' }}>{t('ft_desc')}</p>
            <div style={{ marginTop: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--gray-600)' }}>N°RCCM : RC/YAE/2020/B/2353</div>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem' }}>{t('ft_nav')}</h4>
            {navItems.map(n => (
              <a key={n.href} href={n.href} style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gray-400)', padding: '0.3rem 0', fontFamily: 'var(--font-display)', fontWeight: 500, transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--gray-400)'}>{n.label}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem' }}>{t('ft_services')}</h4>
            {t('ft_svc_list').map(s => (<div key={s} style={{ fontSize: '0.82rem', color: 'var(--gray-400)', padding: '0.3rem 0', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{s}</div>))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem' }}>{t('ft_contact')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: HiPhone, text: '+237 677 97 21 21 (Founder)' },
                { icon: HiPhone, text: '+237 690 62 97 27 (DG)' },
                { icon: HiPhone, text: '+237 690 62 97 27 (WhatsApp)' },
                { icon: HiMail, text: 'universatellites@gmail.com' },
                { icon: HiLocationMarker, text: 'NGOUSSO, Descente Eleveur, Yaoundé' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--gray-400)' }}>
                  <c.icon style={{ color: 'var(--red)', fontSize: '0.9rem', flexShrink: 0 }} /><span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>© {new Date().getFullYear()} UniverSatellites Sarl. {t('ft_rights')}</p>
          <p style={{ fontSize: '0.72rem', color: 'var(--gray-600)' }}>{t('ft_by')} <a href="https://pixelways.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', fontWeight: 600 }}>Pixelways Solutions Inc.</a></p>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
