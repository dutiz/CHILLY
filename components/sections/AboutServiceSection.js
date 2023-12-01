'use client'
import { useTranslations } from 'next-intl'

import AboutServiceCard from '../AboutServiceCard'

export default function AboutServiceSection() {
  const t = useTranslations('AboutServiceSection')
  return (
    <div
      style={{
        background: `url('/img/service-img.png') no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <div className="row justify-center my-20">
          <AboutServiceCard border img="freshproduct-img" title={t('freshproductTitle')}>
            {t('freshProductDescription')}
          </AboutServiceCard>
          {/* <AboutServiceCard border img="chefs-img" title={t('skilledchefTitle')}>
            {t('skilledchefDescription')}
          </AboutServiceCard> */}
          <AboutServiceCard border img="drink-img" title={t('drinkjuicesTitle')}>
            {t('drinkjuicesDescription')}
          </AboutServiceCard>
          <AboutServiceCard img="vegan-img" title={t('vegankitchen')}>
            {t('vegankitchenDescription')}
          </AboutServiceCard>
        </div>
      </div>
    </div>
  )
}
