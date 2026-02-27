'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 100px 0px' }
    )

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach((el) => observer.observe(el))

    // Typewriter for section labels
    document.querySelectorAll<HTMLElement>('.section-label').forEach((el) => {
      const text = el.textContent ?? ''
      el.textContent = ''
      const labelObs = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) return
          let i = 0
          const t = setInterval(() => {
            el.textContent = text.slice(0, ++i)
            if (i >= text.length) clearInterval(t)
          }, 55)
          setTimeout(() => { if (el.textContent !== text) el.textContent = text }, 3000)
          labelObs.unobserve(el)
        },
        { threshold: 0, rootMargin: '200px 0px 200px 0px' }
      )
      labelObs.observe(el)
    })

    // Card tilt
    const cards = document.querySelectorAll<HTMLElement>('.tilt-card')
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = ''
      })
    })

    return () => observer.disconnect()
  }, [])

  return null
}
