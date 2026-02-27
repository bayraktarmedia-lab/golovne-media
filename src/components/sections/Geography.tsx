import Image from 'next/image'
import Link from 'next/link'

const CHANNELS = [
  { slug: 'bayranews', name: 'Байрактар News | Україна', desc: 'Головний агрегатор новин України', tg: 'https://t.me/bayranews' },
  { slug: 'zahid-golovne-ua', name: 'Захід Головне', desc: 'Найбільший регіональний Telegram-канал заходу України', tg: 'https://t.me/zahid_golovne_ua' },
  { slug: 'kyiv-golovne', name: 'Київ Головне', desc: 'Оперативні новини Києва та Київської області', tg: 'https://t.me/kyiv_golovne' },
  { slug: 'rivne-golovne', name: 'Рівне Головне', desc: 'Головні новини Рівного та Рівненської області', tg: 'https://t.me/rivne_golovne' },
  { slug: 'lviv-golovne', name: 'Львів Головне', desc: 'Актуальні події Львова та Львівської області', tg: 'https://t.me/lviv_golovne' },
  { slug: 'dnipro-main', name: 'Дніпро Головне', desc: 'Новини Дніпра та Дніпропетровської області', tg: 'https://t.me/dnipro_main' },
  { slug: 'odesa-golovne', name: 'Одеса Головне', desc: 'Оперативна інформація з Одеси та регіону', tg: 'https://t.me/odesa_golovne' },
  { slug: 'tipove-rivne', name: 'Типове Рівне', desc: 'Міський контент та новини Рівного', tg: 'https://t.me/tipove_rivne' },
  { slug: 'lutsk-tipical', name: 'Типовий Луцьк', desc: 'Міський контент та новини Луцька', tg: 'https://t.me/lutsk_tipical' },
  { slug: 'ha-golovne', name: 'Харків Головне', desc: 'Новини Харкова та Харківської області', tg: 'https://t.me/ha_golovne' },
  { slug: 'frankivsk-golovne', name: 'Івано-Франківськ Головне', desc: 'Новини Івано-Франківська та Прикарпаття', tg: 'https://t.me/frankivsk_golovne' },
  { slug: 'ternopil-golovne', name: 'Тернопіль Головне', desc: 'Актуальні події Тернополя та Тернопільської області', tg: 'https://t.me/ternopil_golovne' },
  { slug: 'volyn-golovne-ua', name: 'Волинь Головне', desc: 'Головні новини Волині та Луцька', tg: 'https://t.me/volyn_golovne_ua' },
  { slug: 'vinnytsia-golovne', name: 'Вінниця Головне', desc: 'Новини Вінниці та Вінницької області', tg: 'https://t.me/vinnytsia_golovne' },
  { slug: 'khmel-golovne', name: 'Хмельницький Головне', desc: 'Актуальні події Хмельницького та Поділля', tg: 'https://t.me/khmel_golovne' },
  { slug: 'poltava-golovne', name: 'Полтава Головне', desc: 'Новини Полтави та Полтавської області', tg: 'https://t.me/poltava_golovne' },
  { slug: 'zhytomyr-glvn', name: 'Житомир Головне', desc: 'Оперативна інформація з Житомира та області', tg: 'https://t.me/zhytomyr_glvn' },
  { slug: 'cherkasy-golovne', name: 'Черкаси Головне', desc: 'Головні новини Черкас та Черкаської області', tg: 'https://t.me/cherkasy_golovne' },
  { slug: 'chernihiv-golovne-ua', name: 'Чернігів Головне', desc: 'Новини Чернігова та Чернігівської області', tg: 'https://t.me/chernihiv_golovne_ua' },
  { slug: 'sumy-golovne-ua', name: 'Суми Головне', desc: 'Актуальні події Сум та Сумщини', tg: 'https://t.me/sumy_golovne_ua' },
  { slug: 'zakarpattia-golovne', name: 'Закарпаття Головне', desc: 'Новини Закарпаття та Ужгорода', tg: 'https://t.me/zakarpattia_golovne' },
  { slug: 'zap-golovne', name: 'Запоріжжя Головне', desc: 'Оперативна інформація із Запоріжжя та регіону', tg: 'https://t.me/zap_golovne' },
  { slug: 'kryviy-rih-golovne', name: 'Кривий Ріг Головне', desc: 'Головні новини Кривого Рогу', tg: 'https://t.me/kryviy_rih_golovne' },
  { slug: 'chernivtsi-golovne-ua', name: 'Чернівці Головне', desc: 'Новини Чернівців та Буковини', tg: 'https://t.me/chernivtsi_golovne_ua' },
  { slug: 'krop-golovne', name: 'Кропивницький Головне', desc: 'Актуальні події Кропивницького та Кіровоградщини', tg: 'https://t.me/krop_golovne' },
]

export default function Geography() {
  return (
    <section id="geography">
      <div className="container">
        <div className="section-label">Наші телеграм-канали</div>
        <h2 className="section-title reveal">Ми присутні<br />по всій Україні</h2>
        <div className="red-divider" />

        <div className="channels-grid">
          {CHANNELS.map((ch, i) => (
            <Link
              key={ch.slug}
              href={ch.tg}
              target="_blank"
              rel="noopener"
              className="ch-card"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="ch-front">
                <Image
                  src={`/channels/${ch.slug}.jpg`}
                  alt={ch.name}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 20vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="ch-back">
                <div className="ch-back-logo-wrap">
                  <Image
                    src={`/channels/${ch.slug}.jpg`}
                    alt={ch.name}
                    width={60}
                    height={60}
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <p className="ch-desc">{ch.desc}</p>
                <span className="ch-cta">Перейти до каналу →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
