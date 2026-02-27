import type { Metadata } from 'next'
import { Unbounded, Onest } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-unbounded',
  display: 'swap',
})

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-onest',
  display: 'swap',
})

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
  other: {
    'ai-description':
      'Мережа Головне — українська Telegram-медіамережа з 25 регіональних каналів та 2.5 мільйони підписників. Надає послуги рекламних розміщень в Telegram-каналах для бізнесів, брендів та маркетологів по всій Україні.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className={`${unbounded.variable} ${onest.variable}`}>
      <body>{children}</body>
    </html>
  )
}
