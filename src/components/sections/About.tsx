export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="section-label">Про мережу</div>
          <h2 className="section-title reveal">Менше шуму, більше фактів. Головне.</h2>
          <div className="red-divider"></div>
          
          <div className="about-grid">
            <div className="about-text reveal">
              <p>Ми працюємо в новинному сегменті та будуємо медіа, яке <strong>першими інформує жителів різних міст України</strong> про ситуацію, яка відбувається довкола.</p>
              <p>Наші канали займають <strong>ТОП у багатьох містах України</strong>. Щомісячно ми обробляємо близько <strong>6000 унікальних матеріалів</strong>, які надсилають наші підписники, що підкреслює довіру до нас.</p>
            </div>
            
            <div className="about-metrics reveal">
              <div className="metric-box">
                <div className="metric-num">6</div>
                <div className="metric-label">Років у Telegram</div>
              </div>
              <div className="metric-box">
                <div className="metric-num">25</div>
                <div className="metric-label">Каналів у мережі</div>
              </div>
              <div className="metric-box">
                <div className="metric-num">26</div>
                <div className="metric-label">Людей у команді</div>
              </div>
              <div className="metric-box">
                <div className="metric-num">500<span className="accent">+</span></div>
                <div className="metric-label">Постів щодня</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
