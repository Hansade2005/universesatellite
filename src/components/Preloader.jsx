import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => { if (p >= 100) { clearInterval(interval); return 100; } return p + Math.random() * 15 + 5; });
    }, 150);
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--black)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '1.5rem', padding: '2rem', width: '100%', height: '100%',
          }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ position: 'relative', width: '90px', height: '90px', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(227,6,19,0.1)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', inset: 0, border: '2px solid transparent', borderTopColor: 'var(--red)', borderRadius: '50%', animation: 'spin-slow 1.2s linear infinite' }} />
            <div style={{ position: 'absolute', inset: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo.jpeg" alt="" style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', letterSpacing: '-0.02em' }}>
              Univer<span style={{ color: 'var(--red)' }}>S</span> Satellite
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--gray-500)', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '0.4rem' }}>
              Le futur c'est ici
            </div>
          </motion.div>
          <div style={{ width: '140px', maxWidth: '60%' }}>
            <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div initial={{ width: '0%' }} animate={{ width: `${Math.min(progress, 100)}%` }} transition={{ duration: 0.3 }}
                style={{ height: '100%', background: 'var(--red)', borderRadius: '2px' }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gray-500)' }}>
              {Math.min(Math.round(progress), 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
