'use client'
import { useTranslations } from 'next-intl'

import ServiceItem from '../ServiceItem'
export default function ServiceSection() {
  const t = useTranslations('ServiceSection')
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row md:mt-28 mt-10">
          <div className="col-12">
            <div className="row justify-center md:justify-start">
              <ServiceItem svg="service-location" title={t('location')}>
                {t('locationMessage')}
              </ServiceItem>
              <ServiceItem svg="service-clock" title={t('openHours')}>
                {t('openHoursMessage')}
              </ServiceItem>
              <ServiceItem svg="service-reservation" title={t('reservation')}>
                {t('reservationMessage')}
              </ServiceItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
