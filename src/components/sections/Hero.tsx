'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

function StatItem({ value, suffix, label, isDecimal }: {
  value: number; suffix: string; label: string; isDecimal?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated) {
        setAnimated(true)
        obs.disconnect()
        const duration = 1600
        const start = performance.now()
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const v = easeOut(t) * value
          setDisplay(isDecimal ? v.toFixed(1).replace('.', ',') : Math.floor(v).toString())
          if (t < 1) requestAnimationFrame(tick)
          else setDisplay(isDecimal ? value.toFixed(1).replace('.', ',') : value.toString())
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, isDecimal, animated])

  return (
    <div ref={ref} className="hero-stat">
      <span className="hero-stat-num">{display}{suffix}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!titleRef.current || window.scrollY >= window.innerHeight) return
      titleRef.current.style.transform = `translateY(${window.scrollY * 0.06}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg)' }}>
      
      {/* Ukraine map background */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: 0.22, pointerEvents: 'none', userSelect: 'none',
        zIndex: 0,
      }}>
        <svg viewBox="0 0 900 450" style={{ width: '85%', maxWidth: 960 }} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ukraine outline - approximate */}
          <path
            d="M 80 230 L 95 200 L 110 185 L 130 175 L 155 165 L 180 158 L 205 152 L 230 148 L 255 143 L 278 138 L 300 132 L 322 128 L 345 124 L 368 121 L 392 119 L 416 118 L 440 119 L 464 121 L 487 124 L 510 128 L 533 133 L 555 138 L 576 144 L 596 151 L 615 159 L 633 168 L 648 179 L 660 192 L 668 207 L 670 222 L 665 238 L 654 252 L 638 264 L 620 274 L 600 283 L 578 291 L 555 298 L 530 304 L 505 309 L 479 313 L 452 316 L 425 317 L 398 317 L 371 315 L 344 311 L 317 306 L 290 299 L 263 291 L 238 281 L 214 270 L 191 257 L 169 243 L 148 232 L 110 225 Z"
            stroke="#E53935"
            strokeWidth="1.5"
            fill="rgba(229,57,53,0.05)"
          />
          {/* City dots */}
          <circle cx="416" cy="218" r="4" fill="#E53935" opacity="0.7"/>
          <circle cx="290" cy="210" r="3" fill="#E53935" opacity="0.45"/>
          <circle cx="540" cy="215" r="3" fill="#E53935" opacity="0.45"/>
          <circle cx="350" cy="235" r="2.5" fill="#E53935" opacity="0.35"/>
          <circle cx="480" cy="230" r="2.5" fill="#E53935" opacity="0.35"/>
          <circle cx="190" cy="200" r="2" fill="#E53935" opacity="0.3"/>
          <circle cx="600" cy="195" r="2" fill="#E53935" opacity="0.3"/>
          <circle cx="380" cy="270" r="2" fill="#E53935" opacity="0.25"/>
          {/* Connecting lines */}
          <line x1="416" y1="218" x2="290" y2="210" stroke="#E53935" strokeWidth="0.5" opacity="0.15"/>
          <line x1="416" y1="218" x2="540" y2="215" stroke="#E53935" strokeWidth="0.5" opacity="0.15"/>
          <line x1="416" y1="218" x2="350" y2="235" stroke="#E53935" strokeWidth="0.5" opacity="0.15"/>
          <line x1="416" y1="218" x2="480" y2="230" stroke="#E53935" strokeWidth="0.5" opacity="0.15"/>
        </svg>
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-eyebrow">Медіакіт 2026</div>
        <h1 ref={titleRef} className="hero-title">
          МЕРЕЖА<br /><span>ГОЛОВНЕ</span>
        </h1>
        <p className="hero-sub">
          Найбільша регіональна Telegram-мережа України.<br />
          25 каналів · вся країна · реальна аудиторія
        </p>
        <div className="hero-stats">
          <StatItem value={2.5} suffix="млн" label="підписників" isDecimal />
          <StatItem value={600} suffix="тис+" label="добове охоплення" />
          <StatItem value={31} suffix="%" label="середній ERR" />
        </div>
        <Link href="https://t.me/zahid_ads" target="_blank" rel="noopener" className="hero-cta sweep-btn">
          Замовити рекламу →
        </Link>
        <div className="hero-scroll">
          <span>Гортай</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  )
}
