import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">МЕРЕЖА <span>ГОЛОВНЕ</span></div>
      <Link href="https://t.me/zahid_ads" target="_blank" rel="noopener" className="nav-cta sweep-btn">
        Замовити рекламу
      </Link>
    </nav>
  )
}
