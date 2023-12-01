'use client'
import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function ContactHeaderCard({ t }) {
  return (
    <div className="lg:col-5">
      <div className="bg-gray-300 h-full p-12">
        <AnimationOnScroll animateIn="animate__fadeInLeft" delay={500}>
          <h1 className="text-3xl lg:text-4xl text-gray-700  font-bold">
            {t('contactInformation')}
          </h1>
          <p className="mt-5">{t('description')}</p>
          <div className="flex flex-col mt-8 space-y-8">
            <div className="inline-flex items-center">
              <Image src="/img/location.png" width={50} height={50} alt="location" />
              <p className="ml-3">Rohrbacherstrasse 3A | 2620 Neunkirchen</p>
            </div>
            <div className="inline-flex items-center">
              <Image src="/img/mail.png" width={50} height={50} alt="mail" />
              <p className="ml-3">cillicafe@gmx.at</p>
            </div>
            <div className="inline-flex items-center">
              <Image src="/img/phone.png" width={48} height={48} alt="phone" />
              <p className="ml-3">0680 2380599</p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
