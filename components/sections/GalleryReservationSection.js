'use client'
import Link from 'next/link'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function GalleryReservationSection({ t }) {
  return (
    <div
      style={{
        background: `url('/img/service-img.png') no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <div className="row my-20">
          <div className="lg:col-4">
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <p className="py-1 inline-block text-white border-y border-yellow-400 uppercase">
                {t('reservation')}
              </p>
              <h1 className="mt-5 md:text-5xl text-3xl font-bold text-white">
                {t('reservationTitle')}
              </h1>
              <p className="mt-8 text-white">{t('reservationDesc')} </p>
              <div className="row g-0 items-center mt-8">
                <div className="md:col-6 col-5">
                  <Link href="/reservation" legacyBehavior>
                    <a className=" block py-5 px-6 text-sm lg:text-base border border-yellow-400 text-yellow-400">
                      {t('reservationButtonMessage')}
                    </a>
                  </Link>
                </div>
                <div className="md:col-6 col-7 text-end">
                  <Link
                    href="/contact"
                    className="ml-2 block text-white border border-white py-5 px-6"
                  >
                    {t('getintouch')}
                  </Link>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
