import Link from 'next/link'
import { FORMATS } from '@/lib/data'

export default function Formats() {
  return (
    <section id="formats">
      <div className="container">
        <div className="section-label">Формати</div>
        <h2 className="section-title reveal">Формати розміщень</h2>
        <div className="red-divider" />
        <div className="formats-grid">
          {FORMATS.map((f, i) => (
            <div
              key={i}
              className={`format-card reveal${f.featured ? ' format-card--featured' : ''}`}
              style={{
                background: f.featured ? undefined : 'var(--bg-2)',
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="format-num">{f.num}</div>
              <h3 className="format-title">{f.title}</h3>
              <div className="format-divider" />
              <p className="format-desc">{f.desc}</p>
              {f.desc2 && <p className="format-desc" style={{ marginTop: 12 }}>{f.desc2}</p>}
              {f.exampleUrl && (
                <Link href={f.exampleUrl} target="_blank" rel="noopener" className="format-example">
                  Приклад рекламного розміщення →
                </Link>
              )}
              <div className="format-list-label">Кому підійде:</div>
              <ul className="format-list">
                {f.list.map((item, j) => <li key={j}>— {item}</li>)}
              </ul>
              <Link href="https://t.me/zahid_ads" target="_blank" rel="noopener" className="format-btn sweep-btn">
                Обираю це →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
