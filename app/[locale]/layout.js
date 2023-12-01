/* eslint-disable no-unused-vars */
import '../styles/globals.css'

import { Cormorant_Infant } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, useLocation, useMessages } from 'next-intl'

import Layout from '@/components/layout/Layout'

const cormorantInfant = Cormorant_Infant({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-infant',
})
export const metadata = {
  title: 'Cilli Restaurant',
  description: 'Herzlich willkommen im Cilli Cafe Restaurant!',
}
const locales = ['de', 'en']

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages()

  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={locale}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className={`${cormorantInfant.variable} font-serif`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
