import { useI18n } from '../i18n';
export default function Marquee() {
  const { t } = useI18n();
  const items = t('marquee');
  return (
    <div style={{ padding: '1.5rem 0', overflow: 'hidden', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(227,6,19,0.02)' }}>
      <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '2rem', padding: '0 2rem', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--gray-500)', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {item}
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', opacity: 0.5, flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
