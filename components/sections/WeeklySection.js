'use client'
import { useTranslations } from 'next-intl'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import WeeklyItem from '../WeeklyItem'

export default function WeeklySection() {
  const t = useTranslations('WeeklySection')
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <AnimationOnScroll animateIn="animate__fadeIn" delay={250}>
              <h1 className="border-y border-yellow-400 py-5 inline-block lg:text-6xl text-4xl font-bold uppercase">
                {t('title')}
              </h1>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="row justify-center my-20">
          <WeeklyItem date="Keine Mitteilung"></WeeklyItem>
        </div>
      </div>
    </div>
  )
}
