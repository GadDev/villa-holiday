import localFont from 'next/font/local'

const aktivGrotesk = localFont({
  src: [
    {
      path: '../assets/fonts/aktiv-grotesk/AktivGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/aktiv-grotesk/AktivGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-aktiv-grotesk',
})

const domaineDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/domaine-display/domaine-display-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/domaine-display/domaine-display-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-domaine-display',
})

const hailusScript = localFont({
  src: [
    {
      path: '../assets/fonts/haikus-script/HaikusScriptv09Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/haikus-script/HaikusScriptv09Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-haikus-script',
})

export { aktivGrotesk, domaineDisplay, hailusScript }
