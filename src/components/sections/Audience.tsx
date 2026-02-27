export default function Audience() {
  return (
    <>
      <section id="audience">
        <div className="container">
          <div className="section-label">Аудиторія</div>
          <h2 className="section-title reveal">Хто читає<br />наші канали</h2>
          <div className="red-divider"></div>
          
          <div className="audience-inner">
            <div className="audience-card reveal">
              <div className="audience-icon">👩</div>
              <div className="audience-percent">59%</div>
              <div className="audience-label">Жінки</div>
              <div className="audience-note">Активна та платоспроможна аудиторія</div>
            </div>
            
            <div className="audience-card age-card reveal" style={{borderColor: "rgba(229,57,53,0.4)"}}>
              <div className="audience-icon">📊</div>
              <div className="audience-percent">25–45</div>
              <div className="audience-label">Основний вік</div>
              <div className="audience-note">Переважно активне та платоспроможне населення</div>
            </div>
            
            <div className="audience-card reveal">
              <div className="audience-icon">👨</div>
              <div className="audience-percent">41%</div>
              <div className="audience-label">Чоловіки</div>
              <div className="audience-note">Залучена аудиторія з високим рівнем пересилок</div>
            </div>
          </div>
      
          <div className="telemetrio-block reveal">
            <p className="telemetrio-text">Детальну аналітику наших телеграм-каналів можна знайти на сервісі <span style={{color: "var(--white)"}}>Telemetrio</span></p>
            <a href="https://telemetr.io/ru/net/zakhid_golovne_novini_lviv_rivne_khmelnitskii" target="_blank" rel="noopener" className="telemetrio-btn">Дивитись →</a>
          </div>
        </div>
      </section>
    </>
  )
}
