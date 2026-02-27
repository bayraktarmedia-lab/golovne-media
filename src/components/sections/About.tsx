export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">Про мережу</div>
        <h2 className="section-title reveal">Менше шуму, більше фактів. Головне.</h2>
        <div className="red-divider" />

        <div className="about-grid">
          <div className="about-text reveal-left">
            <p>Ми працюємо в новинному сегменті та будуємо медіа, яке <strong>першими інформує жителів різних міст України</strong> про ситуацію, яка відбувається довкола.</p>
            <p>Наші канали займають <strong>ТОП у багатьох містах України</strong>. Щомісячно ми обробляємо близько <strong>6000 унікальних матеріалів</strong>, які надсилають наші підписники, що підкреслює довіру до нас.</p>
          </div>

          <div className="about-metrics reveal-right">
            {[
              { num: '6', label: 'Років у Telegram' },
              { num: '25', label: 'Каналів у мережі' },
              { num: '26', label: 'Людей у команді' },
              { num: '500+', label: 'Постів щодня' },
            ].map((m, i) => (
              <div key={i} className="metric-box">
                <div className="metric-num">{m.num}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
