'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

function StatItem({ value, suffix, label, isDecimal }: {
  value: number; suffix: string; label: string; isDecimal?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')
  const [visible, setVisible] = useState(false)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || animated) return
    setAnimated(true)
    const duration = 1600
    const start = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const v = easeOut(t) * value
      setDisplay(isDecimal ? v.toFixed(1).replace('.', ',') : Math.floor(v).toLocaleString('uk'))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible])

  return (
    <div ref={ref} className="hero-stat">
      <span className={`hero-stat-num${visible ? ' stat-animate' : ''}`}>
        {display}{suffix}
      </span>
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
    <section id="hero">
      <div className="ukraine-map">
        <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120,180 L140,160 L180,155 L220,145 L260,140 L300,135 L340,130 L380,128 L420,130 L460,135 L500,140 L540,145 L580,150 L620,155 L660,160 L680,175 L670,195 L650,210 L630,225 L610,235 L590,245 L570,255 L550,260 L530,265 L510,268 L490,270 L470,272 L450,275 L430,278 L410,280 L390,280 L370,278 L350,275 L330,272 L310,268 L290,264 L270,258 L250,250 L230,242 L210,232 L190,220 L165,205 L140,195 Z"
            stroke="#E53935" strokeWidth="1.5" fill="rgba(229,57,53,0.04)" />
          <circle cx="400" cy="205" r="3" fill="#E53935" opacity="0.6" />
          <circle cx="300" cy="195" r="2" fill="#E53935" opacity="0.4" />
          <circle cx="500" cy="200" r="2" fill="#E53935" opacity="0.4" />
        </svg>
      </div>
      <div className="hero-content">
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
