import '../styles/globals.css'

import { Cormorant_Infant } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const cormorantInfant = Cormorant_Infant({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-infant',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: '',
          site_name: 'Next Starter',
          description: 'Website description here',
        }}
      />
      <div className={`${cormorantInfant.variable} font-serif`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
