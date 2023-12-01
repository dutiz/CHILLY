'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'
import SVG from 'react-inlinesvg'

export default function Footer() {
  const t = useTranslations('FooterSection')
  return (
    <div className="bg-gray-700">
      <div className="container">
        <div className="row items-center mt-20">
          <div className="col-6">
            <Image src="/img/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div className="col-6 text-end space-x-5">
            <a className="inline-block">
              <SVG src="./svg/insta.svg" className="fill-current w-6 h-6" />
            </a>
            <a className="inline-block">
              <SVG src="./svg/fb.svg" className="fill-current w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="row my-16">
          <div className="md:col-6">
            <h2 className="py-1 inline-block border-y border-yellow-400 uppercase text-white">
              {t('contact')}
            </h2>
            <p className="mt-8 text-white">ROHRBACHERSTRASSE 3A | 2620 NEUNKIRCHEN</p>
            <a className="mt-2 inline-block text-white">
              <span className=" text-yellow-400">{t('call')}</span> - 0680 2380599
            </a>
            <a href="mailto:cillis@mail.com" className="mt-2 block text-yellow-400">
              cillicafe@gmx.at
            </a>
          </div>
          <div className="md:col-6 mt-10 lg:mt-0 text-end">
            <h2 className="py-1 inline-block border-y border-yellow-400 uppercase text-white">
              {t('workinghours')}
            </h2>
            <p className="mt-8 text-white">
              <span className="text-yellow-400">{t('wedntosun')} </span>08 - 22
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 py-9 border-t border-gray-500">
            <p className="text-white text-center text-sm lg:text-base font-bold">
              &copy; {new Date().getFullYear()} {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
