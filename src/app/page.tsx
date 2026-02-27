import Scripts from '@/components/ui/Scripts'
import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Engagement from '@/components/sections/Engagement'
import Geography from '@/components/sections/Geography'
import Audience from '@/components/sections/Audience'
import Clients from '@/components/sections/Clients'
import Formats from '@/components/sections/Formats'
import Advantages from '@/components/sections/Advantages'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Мережа Головне',
  description: 'Найбільша регіональна Telegram-медіамережа України. 25 каналів, 2.5 млн підписників.',
  url: 'https://holovne.media',
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'advertising', identifier: '@zahid_ads' }],
  foundingDate: '2020',
  areaServed: 'UA',
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Scripts />
      <Nav />
      <main>
        <Hero />
        <About />
        <Engagement />
        <Geography />
        <Audience />
        <Clients />
        <Formats />
        <Advantages />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
