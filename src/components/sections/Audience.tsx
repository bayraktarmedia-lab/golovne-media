import Link from 'next/link'

export default function Audience() {
  return (
    <section id="audience">
      <div className="container">
        <div className="section-label">Аудиторія</div>
        <h2 className="section-title reveal">Хто читає<br />наші канали</h2>
        <div className="red-divider" />

        <div className="audience-inner">
          {[
            { icon: '👩', percent: '59%', label: 'Жінки', note: 'Активна та платоспроможна аудиторія', featured: false },
            { icon: '📊', percent: '25–45', label: 'Основний вік', note: 'Переважно активне та платоспроможне населення', featured: true },
            { icon: '👨', percent: '41%', label: 'Чоловіки', note: 'Залучена аудиторія з високим рівнем пересилок', featured: false },
          ].map((card, i) => (
            <div key={i} className="audience-card reveal" style={{
              transitionDelay: `${i * 0.1}s`,
              borderColor: card.featured ? 'rgba(229,57,53,0.4)' : undefined,
            }}>
              <div className="audience-icon">{card.icon}</div>
              <div className="audience-percent">{card.percent}</div>
              <div className="audience-label">{card.label}</div>
              <div className="audience-note">{card.note}</div>
            </div>
          ))}
        </div>

        <div className="telemetrio-block reveal">
          <p className="telemetrio-text">
            Детальну аналітику наших телеграм-каналів можна знайти на сервісі{' '}
            <span style={{ color: 'var(--white)' }}>Telemetrio</span>
          </p>
          <Link
            href="https://telemetr.io/ru/net/zakhid_golovne_novini_lviv_rivne_khmelnitskii"
            target="_blank"
            rel="noopener"
            className="telemetrio-btn sweep-btn"
          >
            Дивитись →
          </Link>
        </div>
      </div>
    </section>
  )
}
