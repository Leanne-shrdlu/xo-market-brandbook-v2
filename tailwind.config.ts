import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dbx-blue': '#0061ff',
        'dbx-yellow': '#f7d154',
        'dbx-red': '#ff4e00',
        'dbx-orange': '#f5882a',
        'dbx-green': '#b8e986',
        'dbx-cyan': '#62d4f0',
        'dbx-pink': '#e8a0b4',
        'dbx-purple': '#c4a8d4',
        'dbx-dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-rubik)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],

}

export default config
