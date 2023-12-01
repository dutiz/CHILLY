'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import MenuItem from '../MenuItem'

export default function MenuSection() {
  const t = useTranslations('MenuSection')
  const m = useTranslations('Caffee')
  const keys = []
  for (var i = 1; i <= 30; i++) {
    keys.push(i)
  }
  return (
    <div className="container py-12">
      <div className="row justify-center">
        <div className="lg:col-3 col-10">
          <AnimationOnScroll animateIn="animate__fadein">
            <p className="py-1 inline-block border-y border-yellow-400 uppercase">
              {t('headerTitle')}
            </p>
            <h1 className="mt-3 font-bold text-3xl">{t('title')}</h1>
            <p className="mt-5">{t('description')}</p>
            <Image
              src="/img/4.jpg"
              width={398}
              height={548}
              className="mt-10 w-full h-auto"
              alt="menu-img"
            />
            <Link
              href="/menu"
              className="inline-block mt-10 bg-yellow-400 px-10 rounded-3xl py-5 font-bold"
            >
              {t('buttonMessage')}
            </Link>
          </AnimationOnScroll>
        </div>
        <div className="col-8 hidden lg:block my-10">
          <AnimationOnScroll animateIn="animate__fadein">
            <h1 className="font-bold text-3xl mb-10">Vorspeisen</h1>
          </AnimationOnScroll>
          {keys.map((key) =>
            m(`item${key}`) == `Caffee.item${key}` ? (
              <MenuItem
                className="hidden"
                key={key}
                title={m(`item${key}`)}
                price={m(`price${key}`)}
                delay="100"
              />
            ) : (
              <MenuItem key={key} title={m(`item${key}`)} price={m(`price${key}`)} delay="100" />
            )
          )}
        </div>
      </div>
    </div>
  )
}
