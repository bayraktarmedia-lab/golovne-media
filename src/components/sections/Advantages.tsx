import { ADVANTAGES } from '@/lib/data'

export default function Advantages() {
  return (
    <section id="advantages">
      <div className="container">
        <div className="section-label">Переваги</div>
        <h2 className="section-title reveal">Чому обирають нас</h2>
        <div className="red-divider" />
        <div className="adv-grid">
          {ADVANTAGES.map((adv, i) => (
            <div key={i} className="adv-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="adv-num">{adv.num}</div>
              <h3 className="adv-title">{adv.title}</h3>
              <p className="adv-text">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
