import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useI18n } from '../i18n';

export default function Navbar() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const navLinks = [
    { label: t('nav_home'), href: '#hero' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_portfolio'), href: '#portfolio' },
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_process'), href: '#process' },
    { label: t('nav_testimonials'), href: '#testimonials' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) { setActiveSection('#' + sections[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lang]);

  const langBtn = {
    padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.72rem',
    fontFamily: 'var(--font-mono)', fontWeight: 600, cursor: 'pointer',
    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--gray-300)', transition: 'all 0.3s',
    display: 'flex', alignItems: 'center', gap: '0.35rem',
  };

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '0.6rem 0' : '1rem 0',
          background: scrolled ? 'rgba(6,6,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(227,6,19,0.08)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logo.jpeg" alt="UniSat Logo" style={{ height: '42px', borderRadius: '10px' }} />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                <span style={{ color: '#E83E5B' }}>UniverS</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                <span style={{ color: '#ffffff' }}>atellites</span>
              </div>
              <div style={{ fontSize: '0.55rem', color: 'var(--gray-500)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                Sarl — Le futur c'est ici
              </div>
            </div>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
            {navLinks.map((link, i) => (
              <motion.a key={link.href + lang} href={link.href}
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i + 0.3, duration: 0.5 }}
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '0.82rem',
                  position: 'relative', padding: '0.3rem 0',
                  color: activeSection === link.href ? 'var(--red)' : 'var(--gray-300)', transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                onMouseLeave={e => { e.currentTarget.style.color = activeSection === link.href ? 'var(--red)' : 'var(--gray-300)'; }}>
                {link.label}
                {activeSection === link.href && (
                  <motion.div layoutId="nav-indicator" style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '2px', background: 'var(--red)', borderRadius: '1px' }} />
                )}
              </motion.a>
            ))}

            <button onClick={toggle} style={langBtn}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--gray-300)'; }}>
              {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
            </button>

            <motion.a href="#contact" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                background: 'var(--red)', color: 'var(--white)', padding: '0.6rem 1.4rem', borderRadius: '50px',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.82rem', transition: 'all 0.3s ease', border: '2px solid var(--red)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--red)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--red)'; e.currentTarget.style.color = 'var(--white)'; }}>
              {t('nav_cta')}
            </motion.a>
          </div>

          <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="mobile-controls">
            <button onClick={toggle} style={{ ...langBtn, fontSize: '0.68rem', padding: '0.3rem 0.6rem' }}>
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--white)', fontSize: '1.75rem', cursor: 'pointer', zIndex: 1100 }}>
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1040 }} />
            <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '85%', maxWidth: '380px',
                background: 'rgba(6,6,8,0.98)', backdropFilter: 'blur(30px)', zIndex: 1050,
                display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem',
                borderLeft: '1px solid rgba(227,6,19,0.15)',
              }}>
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem',
                    padding: '0.85rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
                    color: activeSection === link.href ? 'var(--red)' : 'var(--white)',
                  }}>{link.label}</motion.a>
              ))}
              <motion.a href="#contact" onClick={() => setMobileOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                style={{ marginTop: '2rem', background: 'var(--red)', padding: '1rem', borderRadius: '14px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>
                {t('nav_cta')}
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </>
  );
}
