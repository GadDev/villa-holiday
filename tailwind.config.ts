import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue-standard':
          'linear-gradient(90deg, #0172B1 -1.97%, #019EF5 100%)',
      },
      boxShadow: {
        btn: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'light-blue': '#E6F1F8',
        dark: '#29293D',
      },
      fontFamily: {
        sans: ['var(--font-aktiv-grotesk)'],
        heading: ['var(--font-domaine-display)'],
        haikus_script: ['var(--font-haikus-script)'],
      },
      screens: {
        xs: '360px', // Custom 360px breakpoint
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
}
export default config
