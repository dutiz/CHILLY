'use client'
import { useTranslations } from 'next-intl'

import FeatureCard from '../FeatureCard'

export default function FeatureSection() {
  const t = useTranslations('FeatureSection')
  return (
    <div className="container my-20">
      <div className="row g-0 items-center">
        <FeatureCard left img="11" subtitle={t('firstcardSubtitle')} title={t('firstcardTitle')}>
          {t('firstcardDescription')}
        </FeatureCard>
      </div>
      <div className="row g-0 items-center">
        <FeatureCard img="8" subtitle={t('secondcardSubtitle')} title={t('secondcardTitle')}>
          {t('secondcardDescription')}
        </FeatureCard>
      </div>
    </div>
  )
}
