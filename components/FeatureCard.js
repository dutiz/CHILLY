import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import Button from './Button'

export default function FeatureCard({ left, img, subtitle, title, children }) {
  return left ? (
    <>
      <div className="lg:pr-11 lg:col-6 pr-0">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <p className="py-1 inline-block text-gray-700 border-y border-yellow-400 uppercase">
            {subtitle}
          </p>
          <h1 className="mt-5 text-4xl font-bold">{title}</h1>
          <p className="mt-5 text-xl">{children}</p>
          <Button isLink href="/menu" className="mt-8">
            Ansicht Menü
          </Button>
        </AnimationOnScroll>
      </div>
      <div className="lg:col-6 mt-5 lg:mt-0">
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <Image
            src={`/img/${img}.jpg`}
            width={687}
            height={527}
            alt={img}
            className="w-full h-auto"
          />
        </AnimationOnScroll>
      </div>
    </>
  ) : (
    <>
      <div className="lg:col-6 mt-5 lg:mt-0">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <Image
            src={`/img/${img}.jpg`}
            width={687}
            height={527}
            alt={img}
            className="w-full h-auto"
          />
        </AnimationOnScroll>
      </div>
      <div className="lg:col-6 lg:pl-11 order-first lg:order-none pl-0 mt-5">
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <p className="py-1 inline-block text-gray-700 border-y border-yellow-400 uppercase">
            {subtitle}
          </p>
          <h1 className="mt-5 text-4xl font-bold">{title}</h1>
          <p className="mt-5 text-xl">{children}</p>
          <Button isLink href="/menu" className="mt-8">
            Ansicht Menü
          </Button>
        </AnimationOnScroll>
      </div>
    </>
  )
}
