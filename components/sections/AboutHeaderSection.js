'use client'
import Image from 'next/image'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function AboutHeaderSection({ t }) {
  return (
    <div className="bg-gray-300">
      <div className="container py-20">
        <div className="row justify-center items-center">
          <div className="lg:col-6 mt-10 lg:mt-0 col-10">
            <AnimationOnScroll animateIn="animate__flipInY">
              <p className="py-1 inline-block text-gray-700 border-y border-yellow-400 uppercase">
                {t('pageTitle')}
              </p>
              <h1 className="mt-5 text-4xl font-bold">{t('title')}</h1>
              <p className="mt-5 text-2xl">{t('description')}</p>
              <p className="mt-8 lg:text-6xl text-3xl cervantiss-font">Afrdita</p>
              <Button className="mt-10">Mehr Sehen</Button>
            </AnimationOnScroll>
          </div>
          <div className="lg:col-6 order-first lg:order-none col-10 z-10">
            <SVG
              src="/svg/pattern-about.svg"
              className="absolute lg:w-[360px] lg:h-[360px] w-[150px] h-[150px] right-5 lg:-mt-14 -mt-5 lg:right-[5%] scrolling-effect -z-10"
            />
            <Image
              src="/img/aboutfoto.png"
              width={553}
              height={638}
              alt="about-bg"
              className="w-full h-auto"
            />
            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className="bg-white relative lg:p-10 p-4 lg:w-[300px] w-[200px] rounded-2xl lg:-mt-24 -mt-[100px] lg:-ml-[180px] -ml-8">
                <p className="lg:text-3xl text-xl text-gray-700">Afrdita Saipi</p>
                <p className="mt-4 lg:text-base text-sm ">CEO & Founder</p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
