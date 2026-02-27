import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-2': '#111111',
        'bg-3': '#1a1a1a',
        red: {
          DEFAULT: '#E53935',
          dark: '#b71c1c',
        },
        gray: {
          DEFAULT: '#888888',
          light: '#cccccc',
        },
      },
      fontFamily: {
        display: ['var(--font-unbounded)', 'sans-serif'],
        body: ['var(--font-onest)', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'rgba(229, 57, 53, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
