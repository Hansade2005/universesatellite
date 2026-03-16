import { useI18n } from '../i18n';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone, HiMail, HiGlobe, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  const { t } = useI18n();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: HiPhone, label: t('ct_phone'), value: '+237 677 97 21 21', href: 'tel:+237677972121', sub: 'Founder : ONANENA OLOUME' },
    { icon: HiPhone, label: t('ct_mobile'), value: '+237 690 62 97 27', href: 'tel:+237690629727', sub: 'DG : BONA Beleng Brice' },
    { icon: HiPhone, label: t('ct_phone') + ' 3', value: '+237 654 47 90 00', href: 'tel:+237654479000' },
    { icon: HiPhone, label: t('ct_whatsapp'), value: '+237 690 62 97 27', href: 'https://wa.me/237690629727' },
    { icon: HiMail, label: t('ct_email'), value: 'universatellites@gmail.com', href: 'mailto:universatellites@gmail.com' },
    { icon: HiGlobe, label: t('ct_web'), value: 'www.universsatellite.com', href: 'https://www.universsatellite.com' },
    { icon: HiLocationMarker, label: t('ct_address'), value: 'NGOUSSO, Descente Eleveur, Yaoundé', href: null },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '237690629727';
    const parts = [
      t('ct_wa_header'),
      t('ct_wa_source'),
      '',
      t('ct_wa_name') + ' ' + form.name,
    ];
    if (form.email) parts.push(t('ct_wa_email') + ' ' + form.email);
    if (form.phone) parts.push(t('ct_wa_phone') + ' ' + form.phone);
    parts.push('');
    parts.push(t('ct_wa_msg'));
    parts.push(form.message);
    parts.push('');
    parts.push(t('ct_wa_footer'));
    const text = parts.join('\n');
    window.open('https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text), '_blank');
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }, 3000);
  };

  const inputStyle = {
    width: '100%', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', color: 'var(--white)',
    fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none', transition: 'all 0.3s ease',
  };

  return (
    <section id="contact" style={{ padding: 'clamp(3.5rem, 8vw, 7rem) 0', position: 'relative', background: 'linear-gradient(180deg, var(--black), rgba(227,6,19,0.015))' }}>
      <div className="container" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>{t('ct_label')}</span>
            <div style={{ width: '40px', height: '2px', background: 'var(--red)' }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            {t('ct_title_1')} <span style={{ color: 'var(--red)' }}>{t('ct_title_red')}</span>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-300)', marginBottom: '2.5rem' }}>{t('ct_intro')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map((c, i) => {
                const Inner = (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s ease' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(227,6,19,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <c.icon style={{ color: 'var(--red)', fontSize: '1.15rem' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--gray-500)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{c.label}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.88rem', marginTop: '0.15rem' }}>{c.value}</div>
                      {c.sub && <div style={{ fontSize: '0.65rem', color: 'var(--red)', marginTop: '0.1rem', fontStyle: 'italic' }}>{c.sub}</div>}
                    </div>
                  </div>
                );
                return c.href ? (
                  <motion.a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                    onMouseEnter={e => { e.currentTarget.firstChild.style.background = 'rgba(227,6,19,0.06)'; e.currentTarget.firstChild.style.borderColor = 'rgba(227,6,19,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.firstChild.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.firstChild.style.borderColor = 'rgba(255,255,255,0.06)'; }}>
                    {Inner}
                  </motion.a>
                ) : (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}>{Inner}</motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ background: 'var(--black-card)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t('ct_form_title')}</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <input type="text" placeholder={t('ct_name')} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} required />
                <input type="email" placeholder={t('ct_email_input')} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} required />
              </div>
              <input type="tel" placeholder={t('ct_phone_input')} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
              <textarea placeholder={t('ct_message')} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} required />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                  background: submitted ? '#22c55e' : '#25D366', color: 'var(--white)', padding: '1rem 2rem',
                  borderRadius: '14px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                  border: 'none', cursor: 'pointer', transition: 'background 0.3s ease', marginTop: '0.5rem',
                }}>
                {submitted ? t('ct_sent') : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {t('ct_send')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
