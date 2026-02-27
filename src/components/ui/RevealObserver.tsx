'use client'
import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    // Small delay to ensure all DOM is painted
    const init = () => {
      const revealObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              revealObs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px 80px 0px' }
      )

      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
        revealObs.observe(el)
      })

      // Typewriter for .section-label
      document.querySelectorAll<HTMLElement>('.section-label').forEach((el) => {
        const text = el.dataset.text || el.textContent || ''
        if (!el.dataset.text) el.dataset.text = text

        const labelObs = new IntersectionObserver(
          (entries) => {
            if (!entries[0].isIntersecting) return
            el.textContent = ''
            let i = 0
            const timer = setInterval(() => {
              el.textContent = text.slice(0, ++i)
              if (i >= text.length) clearInterval(timer)
            }, 55)
            // Fallback
            setTimeout(() => { el.textContent = text }, 3500)
            labelObs.unobserve(el)
          },
          { threshold: 0, rootMargin: '150px 0px 150px 0px' }
        )
        labelObs.observe(el)
      })

      // Card tilt (desktop only)
      if (window.innerWidth > 768) {
        document.querySelectorAll<HTMLElement>('.format-card, .adv-card, .client-type').forEach((card) => {
          card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect()
            const x = (e.clientX - r.left) / r.width - 0.5
            const y = (e.clientY - r.top) / r.height - 0.5
            card.style.transform = `perspective(700px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`
          })
          card.addEventListener('mouseleave', () => {
            card.style.transform = ''
          })
        })
      }
    }

    // Run after a tick to ensure all components rendered
    const timer = setTimeout(init, 100)
    return () => clearTimeout(timer)
  }, [])

  return null
}
