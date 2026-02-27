import Nav from '@/components/ui/Nav'
import CursorDot from '@/components/ui/CursorDot'
import RevealObserver from '@/components/ui/RevealObserver'
import Hero from '@/components/sections/Hero'
import Clients from '@/components/sections/Clients'
import Formats from '@/components/sections/Formats'
import Advantages from '@/components/sections/Advantages'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Мережа Головне',
  description: 'Найбільша регіональна Telegram-медіамережа України. 25 каналів, 2.5 млн підписників.',
  url: 'https://holovne.media',
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'advertising', identifier: '@zahid_ads' },
    { '@type': 'ContactPoint', contactType: 'advertising', identifier: '@bayraktar_ads' },
  ],
  foundingDate: '2020',
  areaServed: 'UA',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CursorDot />
      <RevealObserver />
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Formats />
        <Advantages />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
