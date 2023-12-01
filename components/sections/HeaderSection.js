'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SVG from 'react-inlinesvg'

export default function HeaderSection() {
  const t = useTranslations('HeaderSection')
  return (
    <div className="bg-gray-700 pt-5">
      <div className="container">
        <div className="row items-center">
          <div className="lg:col-6 my-5 md:my-0">
            <AnimationOnScroll animateIn="animate__fadeIn">
              <h1 className="md:text-6xl text-5xl font-bold text-white">{t('title')}</h1>
              <p className="mt-8 text-white">{t('subtitle')}</p>
              <Link legacyBehavior href="/menu">
                <a className="mt-11 inline-block py-5 px-14 bg-yellow-400 rounded-3xl uppercase font-bold">
                  {t('buttonMessage')}
                </a>
              </Link>
            </AnimationOnScroll>
          </div>
          <div className="lg:col-6 order-first lg:-mb-[130px] z-10 -mb-0 lg:order-none">
            <SVG
              src="/svg/pattern.svg"
              width={360}
              height={360}
              alt="pattern-svg"
              className="absolute lg:w-[360px] lg:h-[360px] w-[100px] h-[100px] right-5 lg:right-[5%] scrolling-effect -z-10"
            />
            <Image
              src="/img/headerimage.png"
              width={650}
              height={780}
              alt="header-bg"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
