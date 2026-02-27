import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Мережа Головне — Медіакіт 2026 | Telegram-канали України',
  description:
    'Мережа Головне — найбільша регіональна Telegram-мережа України. 25 каналів, 2,5 млн підписників, 600 000+ середнє добове охоплення. Рекламні розміщення в Telegram.',
  keywords:
    'реклама в телеграм, telegram канали україна, медіакіт, мережа головне, рекламні розміщення телеграм, закупівля реклами телеграм',
  robots: 'index, follow',
  openGraph: {
    title: 'Мережа Головне — Медіакіт 2026',
    description:
      '25 Telegram-каналів · 2,5 млн підписників · 31% ERR · Рекламні розміщення по всій Україні',
    type: 'website',
    locale: 'uk_UA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Мережа Головне — Медіакіт 2026',
    description: '25 Telegram-каналів · 2,5 млн підписників · 31% ERR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;700;900&family=Onest:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
