/* eslint-disable react/no-unknown-property */
import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function AboutServiceCard({ border, img, title, children }) {
  return border ? (
    <div className="lg:col-3 col-10 text-center lg:border-r lg:border-b-0 border-r-0 border-b border-gray-400 py-9">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Image
          src={`/img/${img}.png`}
          width={80}
          height={80}
          className="mx-auto w-20 h-20"
          alt={img}
        />
        <p className="mt-9 text-3xl text-white font-bold">{title}</p>
        <p className="mt-4 text-xl text-white">{children}</p>
      </AnimationOnScroll>
    </div>
  ) : (
    <div className="lg:col-3 col-10 text-center py-9">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Image
          src={`/img/${img}.png`}
          width={80}
          height={80}
          className="mx-auto w-20 h-20"
          alt={img}
        />
        <p className="mt-9 text-3xl text-white font-bold">{title}</p>
        <p className="mt-4 text-xl text-white">{children}</p>
      </AnimationOnScroll>
    </div>
  )
}
