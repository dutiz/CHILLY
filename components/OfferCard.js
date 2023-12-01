'use client'
import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function OfferCard({ img, children }) {
  return (
    <div className="lg:col-4 lg:mt-0 mt-8 ">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="bg-gray-800 p-5">
          <div className="bg-gray-700 p-10">
            <Image src={`/img/${img}.png`} width={54} height={54} className="mx-auto" alt={img} />
            <p className="mt-5 text-xl text-white text-center">{children}</p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}
