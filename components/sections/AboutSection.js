'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { AnimationOnScroll } from 'react-animation-on-scroll'
// import SVG from 'react-inlinesvg'
export default function AboutSection() {
  const t = useTranslations('AboutSection')
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row justify-center my-28 items-center ">
          <div className="md:col-6 col-10 pb-0 md:border-r border-r-0 border-gray-400">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <Image
                src="/img/aboutimage.png"
                width={700}
                height={600}
                alt="about"
                className="w-full h-auto"
              />
            </AnimationOnScroll>
            {/* <div className="col-2 space-x-5 text-end">
              <a className="inline-block">
                <SVG src="./svg/insta.svg" className="fill-current w-7 h-7" />
              </a>
              <a className="inline-block">
                <SVG src="./svg/fb.svg" className="fill-current w-7 h-7" />
              </a>
            </div> */}
          </div>
          <div className="md:col-6 col-10 mt-6 md:mt-0">
            <div className=" md:border-t-0 border-t w-full border-gray-400 pt-4 md:pt-0" />
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <h2 className="text-4xl text-gray-900 font-bold">{t('title')}</h2>
              <p className="mt-5 text-gray-600">{t('part1')}</p>
              <div className="row mt-9">
                <div className="col-6">
                  <h2 className="text-4xl text-gray-900 font-bold">2011</h2>
                  <p className="mt-5 text-gray-600">{t('part2')}</p>
                </div>
                <div className="col-6">
                  <h2 className="text-4xl text-gray-900 font-bold">2023</h2>
                  <p className="mt-5 text-gray-600">{t('part3')}</p>
                </div>
                <p className="mt-5 text-gray-700 text-center lg:text-start uppercase">
                  Afrdita Saipi
                </p>
                <p className="mt-8 lg:text-6xl text-4xl text-center lg:text-start cervantiss-font">
                  Afrdita
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
