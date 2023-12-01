'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SVG from 'react-inlinesvg'

import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/PageHeader'

export default function Reservation() {
  const t = useTranslations('ReservationPage')
  const c = useTranslations('ChooseSection')
  return (
    <Layout title={t('pageTitle')}>
      <PageHeader>{t('pageTitle')}</PageHeader>
      <div className="container">
        <div className="row justify-center mt-20 items-center">
          <div className="lg:col-6 col-10 text-center lg:text-start">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <p className="py-1 inline-block text-gray-700 border-y border-yellow-400 uppercase">
                {t('pageTitle')}
              </p>
              <h1 className="mt-5 text-4xl font-bold">{t('headerTitle')}</h1>
              <p className="mt-5 text-xl">{t('headerDescription')}</p>
              <form name="reservation" action="/success" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="reservation" />
                <div className="row mt-8">
                  <div className="lg:col-6 mt-8">
                    <input
                      type="text"
                      name="Name"
                      placeholder={t('name')}
                      className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
                      required
                    />
                  </div>
                  <div className="lg:col-6 mt-8">
                    <input
                      type="text"
                      name="Email"
                      placeholder={t('email')}
                      className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="lg:col-6 mt-8">
                    <input
                      type="text"
                      name="Phone"
                      placeholder={t('phone')}
                      className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
                      required
                    />
                  </div>
                  <div className="lg:col-6 mt-8">
                    <input
                      type="text"
                      name="Date"
                      placeholder={t('date')}
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => (e.target.type = 'text')}
                      className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="lg:col-6 mt-8">
                    <input
                      type="text"
                      name="Time"
                      onFocus={(e) => (e.target.type = 'time')}
                      onBlur={(e) => (e.target.type = 'text')}
                      placeholder={t('time')}
                      className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
                      required
                    />
                  </div>
                  <div className="lg:col-6 mt-8">
                    <input
                      type="text"
                      name="Persons"
                      placeholder={t('persons')}
                      className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <button type="submit" className="mt-10 bg-yellow-400 px-10 rounded-3xl py-5">
                      {t('buttonMessage')}
                    </button>
                  </div>
                </div>
              </form>
            </AnimationOnScroll>
          </div>
          <div className="lg:col-6 col-10 mt-10 lg:mt-0">
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <Image
                src="/img/reservationimg.png"
                width={582}
                height={866}
                className="w-full h-auto"
                alt="reservered-img"
              />
            </AnimationOnScroll>
          </div>
        </div>
        <div className="row justify-center items-center my-20">
          <div className="lg:col-6 col-10 mt-10 lg:mt-0 order-last lg:order-none ">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <Image
                src="/img/whyus.png"
                width={686}
                height={686}
                className="w-full h-auto"
                alt="choose-img"
              />
            </AnimationOnScroll>
          </div>
          <div className="lg:col-6 col-10 text-center lg:text-start">
            <AnimationOnScroll animateIn="animate__fadeInTop">
              <p className="py-1 inline-block text-gray-700 border-y border-yellow-400 uppercase">
                {c('title')}
              </p>
              <h1 className="mt-5 text-4xl font-bold">{c('headerTitle')}</h1>
              <p className="mt-5 text-xl">{c('headerDescription')}</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <div className="row mt-10">
                <div className="col-6">
                  <div className="w-full inline-flex items-center border-2 border-yellow-400 rounded-xl p-5">
                    <SVG src="/svg/pizza.svg" className="w-7 h-7" />
                    <p className="ml-3 lg:text-xl text-sm text-gray-700 font-bold">
                      {c('freshfood')}
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="w-full inline-flex items-center border-2 border-yellow-400 rounded-xl p-5">
                    <SVG src="/svg/delivery.svg" className="w-7 h-7" />
                    <p className="ml-3 lg:text-xl text-sm text-gray-700 font-bold">
                      {c('fastdelivery')}
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-8">
                  <div className="w-full inline-flex items-center border-2 border-yellow-400 rounded-xl p-5">
                    <SVG src="/svg/tick.svg" className="w-7 h-7" />
                    <p className="ml-3 lg:text-xl text-sm text-gray-700 font-bold">
                      {c('qualitymaintain')}
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-8">
                  <div className="w-full inline-flex items-center border-2 border-yellow-400 rounded-xl p-5">
                    <SVG src="/svg/clock.svg" className="w-7 h-7" />
                    <p className="ml-3 lg:text-xl text-sm text-gray-700 font-bold">
                      {c('fullservice')}
                    </p>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </Layout>
  )
}
