// ─── FORMATS ─────────────────────────────────────────────────
export interface Format {
  num: string
  title: string
  desc: string
  desc2?: string
  exampleUrl?: string
  list: string[]
  featured: boolean
}

export const FORMATS: Format[] = [
  {
    num: '01',
    title: 'Прямі розміщення',
    desc: 'Розміщення рекламного матеріалу, мета якого — отримати підписників чи клієнтів на свій продукт чи послугу.',
    exampleUrl: 'https://t.me/zahid_golovne_ua/61471',
    list: ['Телеграм-каналам', 'Instagram та Telegram магазинам', 'Локальному бізнесу', 'Організаторам концертів та івентів', 'Онлайн сервісам', 'Інфопродуктам', 'тощо'],
    featured: false,
  },
  {
    num: '02',
    title: 'Нативне розміщення',
    desc: 'Мета нативної реклами — донести певну інформацію до аудиторії та отримати впізнаваність чи довіру до бренду, особистості.',
    exampleUrl: 'https://t.me/bayranews/84395',
    list: ['Публічним особам', 'Національним брендам', 'Організаторам івентів'],
    featured: false,
  },
  {
    num: '03',
    title: 'Оптові розміщення',
    desc: 'Ви можете запустити рекламу, яку побачить більше 600 000 осіб за добу та отримати максимальні охоплення чи конверсії.',
    desc2: 'Перевага в тому, що для оптових розміщень діють унікальні умови. Тому ви не лише отримаєте багато охоплень, але й економите кошти.',
    list: ['Телеграм-каналам', 'Instagram та Telegram магазинам', 'Локальному бізнесу', 'Організаторам концертів та івентів', 'Онлайн сервісам', 'Інфопродуктам', 'Публічним особам', 'Національним брендам'],
    featured: true,
  },
]

// ─── LOGOS ──────────────────────────────────────────────────
export const LOGOS = [
  { src: '/logos/lifecell.png', alt: 'lifecell' },
  { src: '/logos/pumb.png', alt: 'ПУМБ' },
  { src: '/logos/kyivstar.png', alt: 'Київстар' },
  { src: '/logos/silpo.png', alt: 'Сільпо' },
  { src: '/logos/atb.png', alt: 'АТБ' },
  { src: '/logos/obnova.png', alt: 'Obnova' },
  { src: '/logos/jysk.png', alt: 'JYSK' },
  { src: '/logos/uklon.png', alt: 'Uklon' },
  { src: '/logos/nova-poshta.png', alt: 'Нова Пошта' },
  { src: '/logos/foxtrot.png', alt: 'Фокстрот' },
  { src: '/logos/comfy.png', alt: 'Comfy' },
  { src: '/logos/bmw.png', alt: 'BMW' },
  { src: '/logos/pepsi.png', alt: 'Pepsi' },
  { src: '/logos/bolt.png', alt: 'Bolt' },
  { src: '/logos/megogo.png', alt: 'Megogo' },
  { src: '/logos/okwine.png', alt: 'OKwine' },
  { src: '/logos/dila.png', alt: 'Діла' },
  { src: '/logos/apteka911.png', alt: 'Аптека 911' },
]

// ─── CLIENT TYPES ────────────────────────────────────────────
export const CLIENT_TYPES = [
  { emoji: '🏬', label: 'Національні бренди' },
  { emoji: '💻', label: 'Онлайн-сервіси' },
  { emoji: '🎙️', label: 'Публічні особи' },
  { emoji: '🛍️', label: 'Instagram та Telegram магазини' },
  { emoji: '📍', label: 'Локальний бізнес' },
  { emoji: '🎤', label: 'Організатори концертів та івентів' },
]

// ─── ADVANTAGES ──────────────────────────────────────────────
export const ADVANTAGES = [
  {
    num: '01',
    title: 'Персональний менеджер',
    text: 'Супровід на всіх етапах запуску. Підбір формату та міста для максимально ефективного результату.',
  },
  {
    num: '02',
    title: 'Оптові знижки',
    text: 'Спеціальні умови для запусків у кількох містах або по всій Україні. Вигідні пакетні пропозиції для масштабних кампаній.',
  },
  {
    num: '03',
    title: 'Гнучкі формати розміщення',
    text: 'Прямий рекламний пост, нативна інтеграція або серія розміщень. Формат підбирається відповідно до ваших цілей.',
  },
  {
    num: '04',
    title: 'Пріоритет для партнерів',
    text: 'Доступ до пріоритетних дат розміщення та індивідуальних умов співпраці. Окремі переваги для постійних партнерів.',
  },
]
