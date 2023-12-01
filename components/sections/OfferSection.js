'use client'
import { useTranslations } from 'next-intl'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import OfferCard from '../OfferCard'

export default function OfferSection() {
  const t = useTranslations('OfferSection')
  return (
    <div className="bg-gray-700">
      <div className="container py-20">
        <div className="row justify-center">
          <div className="lg:col-4 col-10">
            <AnimationOnScroll animateIn="animate__fadeIn">
              <p className="py-1 inline-block text-white border-y border-yellow-400 uppercase">
                {t('headerTitle')}
              </p>
              <h1 className="mt-5 text-4xl text-white font-bold">{t('title')}</h1>
              <p className="mt-5 text-2xl text-white">{t('description')}</p>
            </AnimationOnScroll>
          </div>
          <div className="col-8 mt-10 lg:mt-0">
            <div className="row">
              <OfferCard img="calendar-img">{t('clockMessage')}</OfferCard>
              <OfferCard img="menu-img">{t('menuMessage')}</OfferCard>
              <OfferCard img="delivery-img">{t('deliveryMessage')}</OfferCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
