'use client'

export default function Engagement() {
  return (
    <>
      <section id="engagement">
        <div className="container">
          <div className="section-label">Ефективність та залучення</div>
          <h2 className="section-title reveal">Жива аудиторія,<br />реальні результати</h2>
          <div className="red-divider"></div>
          
          <div className="engagement-inner">
            <div className="engagement-stats reveal">
              <div className="engagement-stat">
                <div className="stat-big">31%</div>
                <div className="stat-desc">Середня залученість<br />(ERR)</div>
              </div>
              <div className="engagement-stat">
                <div className="stat-big">1.8K+</div>
                <div className="stat-desc">Середня кількість<br />реакцій на пост</div>
              </div>
              <div className="engagement-stat">
                <div className="stat-big">~1K</div>
                <div className="stat-desc">Середня кількість<br />приватних пересилок</div>
              </div>
              <div className="engagement-stat">
                <div className="stat-big">1.4M</div>
                <div className="stat-desc">Пікові охоплення на<br />одному з каналів</div>
              </div>
            </div>
      
            <div className="phone-mockup reveal">
              <div className="carousel-wrapper">
                <div className="carousel-outer">
                <div className="carousel-track" id="carouselTrack">
                              
                  <div className="carousel-slide">
                    <img src="/carousel/slide-1.jpg" className="carousel-img" alt="Реакції на пост" />
                  </div>
      
                  
                  <div className="carousel-slide">
                    <img src="/carousel/slide-2.jpg" className="carousel-img" alt="Message Statistics" />
                  </div>
      
                  
                  <div className="carousel-slide">
                    <img src="/carousel/slide-3.jpg" className="carousel-img" alt="Message Statistics 1.4M" />
                  </div>
      </div>
                </div>
      
                
                <div className="carousel-dots">
                  <div className="carousel-dot active" onClick={() => (window as any).goToSlide(0)}}></div>
                  <div className="carousel-dot" onClick={() => (window as any).goToSlide(1)}}></div>
                  <div className="carousel-dot" onClick={() => (window as any).goToSlide(2)}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
