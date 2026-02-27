# Мережа Головне — Медіакіт

Next.js 14 + TypeScript + Tailwind CSS

## Старт

```bash
npm install
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000)

## Структура

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata + шрифти
│   ├── page.tsx          # Головна сторінка
│   └── globals.css       # Глобальні стилі + CSS змінні
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Clients.tsx   # Логотипи marquee + типи клієнтів
│   │   ├── Formats.tsx   # Формати розміщень
│   │   ├── Advantages.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Nav.tsx
│       ├── CursorDot.tsx
│       └── RevealObserver.tsx  # Scroll анімації
└── lib/
    ├── data.ts           # Весь контент (канали, логотипи, формати)
    └── hooks.ts          # useReveal, useCounter

public/
├── logos/               # 18 логотипів клієнтів (PNG)
└── images/              # manager-avatar.jpg
```

## Деплой на Vercel

1. Залий код на GitHub
2. Зайди на [vercel.com](https://vercel.com) → New Project
3. Імпортуй репозиторій — Vercel сам визначить Next.js
4. Натисни Deploy

Готово. Автодеплой при кожному push в main.

## Контент

Весь контент знаходиться в `src/lib/data.ts` — канали, логотипи, формати, переваги.  
Редагувати можна без знання React.

## Додати нову секцію

1. Створи файл `src/components/sections/NewSection.tsx`
2. Імпортуй в `src/app/page.tsx`
3. Додай контент в `src/lib/data.ts` якщо потрібно
