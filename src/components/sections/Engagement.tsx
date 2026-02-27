'use client'
import { useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  { src: '/carousel/slide-1.jpg', alt: 'Реакції на пост' },
  { src: '/carousel/slide-2.jpg', alt: 'Статистика повідомлень' },
  { src: '/carousel/slide-3.jpg', alt: 'Пікові охоплення 1.4M' },
]

const STATS = [
  { big: '31%', desc: 'Середня залученість (ERR)' },
  { big: '1.8K+', desc: 'Середня кількість реакцій на пост' },
  { big: '~1K', desc: 'Середня кількість приватних пересилок' },
  { big: '1.4M', desc: 'Пікові охоплення на одному з каналів' },
]

export default function Engagement() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="engagement">
      <div className="container">
        <div className="section-label">Ефективність та залучення</div>
        <h2 className="section-title reveal">Жива аудиторія,<br />реальні результати</h2>
        <div className="red-divider" />

        <div className="engagement-inner">
          <div className="engagement-stats reveal-left">
            {STATS.map((s, i) => (
              <div key={i} className="engagement-stat">
                <div className="stat-big">{s.big}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="phone-mockup reveal-right">
            <div className="carousel-wrapper">
              <div className="carousel-outer">
                <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                  {SLIDES.map((slide, i) => (
                    <div key={i} className="carousel-slide">
                      <Image src={slide.src} alt={slide.alt} width={280} height={480}
                        className="carousel-img" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-dots">
                {SLIDES.map((_, i) => (
                  <button key={i} className={`carousel-dot${current === i ? ' active' : ''}`} onClick={() => setCurrent(i)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
