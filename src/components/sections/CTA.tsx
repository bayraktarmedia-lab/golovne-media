import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <section id="cta">
      <div className="cta-inner">
        <h2 className="cta-title reveal">Забронюйте розміщення сьогодні</h2>
        <p className="cta-text reveal">
          Отримайте персональні умови на перший запуск у мережі «Головне».<br />
          Напишіть менеджеру прямо зараз.
        </p>
        <div className="cta-manager reveal">
          <Image src="/images/manager-avatar.jpg" alt="Рекламний менеджер"
            width={100} height={100} className="cta-avatar" />
          <span className="cta-manager-label">Рекламний менеджер</span>
        </div>
        <Link href="https://t.me/zahid_ads" target="_blank" rel="noopener" className="cta-btn sweep-btn reveal">
          Замовити рекламу →
        </Link>
      </div>
    </section>
  )
}
