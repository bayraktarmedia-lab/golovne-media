'use client'
import Image from 'next/image'
import { LOGOS, CLIENT_TYPES } from '@/lib/data'

export default function Clients() {
  return (
    <section id="clients">
      <div className="container">
        <div className="section-label">Клієнти</div>
        <h2 className="section-title reveal">З нами працюють</h2>
        <div className="red-divider" />
      </div>

      <div className="clients-marquee">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="marquee-item">
              <Image src={logo.src} alt={logo.alt} width={180} height={58}
                style={{ height: 58, width: 'auto', maxWidth: 200, objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="clients-grid">
          {CLIENT_TYPES.map((ct, i) => (
            <div key={i} className="client-type reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="ct-label">{ct.label}</span>
              <div className="ct-emoji">{ct.emoji}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
