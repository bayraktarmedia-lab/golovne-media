'use client'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">МЕРЕЖА <span>ГОЛОВНЕ</span></div>
      <div className="footer-copy">© 2026 Мережа Головне · Реклама в Telegram-каналах України</div>
      <button className="pdf-download-btn sweep-btn" onClick={() => (window as any).downloadPDF()}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Скачати медіакіт в PDF
      </button>
    </footer>
  )
}
