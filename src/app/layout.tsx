import type { Metadata } from 'next'
import './globals.css'
import { aktivGrotesk, domaineDisplay, hailusScript } from './fonts'

export const metadata: Metadata = {
  title: 'Villa Holidays',
  description: "Private villa holidays with Oliver's Travels",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${aktivGrotesk.variable} ${domaineDisplay.variable} ${hailusScript.variable}`}
    >
      <body className="bg-light-blue">{children}</body>
    </html>
  )
}
