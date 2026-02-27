export default function CTA() {
  return (
    <>
      <section id="cta">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title reveal">Забронюйте розміщення сьогодні</h2>
            <p className="cta-text reveal">Отримайте персональні умови на перший запуск у мережі «Головне».<br />Напишіть менеджеру прямо зараз.</p>
            
            <div className="cta-manager reveal">
              <img src="/images/manager-avatar.jpg" alt="Рекламний менеджер" className="cta-avatar" />
              <div className="cta-manager-label">Рекламний менеджер</div>
            </div>
      
            <a href="https://t.me/zahid_ads" target="_blank" rel="noopener" className="cta-btn reveal">Замовити рекламу →</a>
          </div>
        </div>
      </section>
    </>
  )
}
